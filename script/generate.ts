import ts from "typescript";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { transformTagName } from "./lib.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filename = path.resolve(__dirname, "../src", "dom.ts");

function createDomTsProgram() {
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.Latest,
    lib: ["lib.dom.d.ts"],
  };

  const defaultLibPath = ts.getDefaultLibFilePath(options);
  const program = ts.createProgram([defaultLibPath], options);
  return program;
}
const program = createDomTsProgram();
const checker = program.getTypeChecker();

function resolveSymbol(name: string, flags: ts.SymbolFlags) {
  return checker.resolveName(name, undefined, flags, false);
}

const TAG_MAPS = [
  "HTMLElementTagNameMap",
  "SVGElementTagNameMap",
  "MathMLElementTagNameMap",
];

function generateHTMLElementBuilders() {
  fs.writeFileSync(filename, "// Auto-generated file\n\n");

  fs.appendFileSync(filename, 'import { build } from "./core";\n');

  fs.appendFileSync(
    filename,
    `
export interface Lifecycle {
  connectedCallback?(): void;
  disconnectedCallback?(): void;
  attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void;
  adoptedCallback?(): void; // This one is rarely used, so optional
}\n
`,
  );
  const tags = new Set<string>();

  TAG_MAPS.forEach((mapName) => {
    const tagNameMap = resolveSymbol(mapName, ts.SymbolFlags.Interface);

    if (!tagNameMap) throw new Error(`Could not find ${mapName}`);

    for (const [name, tag] of tagNameMap.members) {
      if (tags.has(name as string)) continue;
      tags.add(name as string);

      const elementType = checker.getTypeOfSymbolAtLocation(
        tag,
        tag.valueDeclaration!,
      );
      const elementCls = checker.typeToString(elementType);
      const finalName = transformTagName(name as string);

      fs.appendFileSync(
        filename,
        `export const ${finalName} = () => builder(document.createElement("${name as string}") as unknown as ${elementCls});\n`,
      );
    }
  });
}

generateHTMLElementBuilders();
