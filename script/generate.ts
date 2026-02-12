import ts from "typescript";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { transformTagName } from "./lib.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filename = path.resolve(__dirname, "../src", "dom.ts");
// Track processed types to avoid duplicates
const processedTypes = new Set<string>();

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
const tags = new Set();
function generateHTMLElementBuilders() {
  fs.writeFileSync(filename, "// Auto-generated file\n\n");

  fs.appendFileSync(
    filename,
    'import { build, ReactiveElement, type ValueOrReactive, type Chain } from "./core";\n',
  );

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
}
`,
  );

  TAG_MAPS.forEach((mapName) => {
    const tagNameMap = resolveSymbol(mapName, ts.SymbolFlags.Interface);

    if (!tagNameMap) throw new Error("Could not find HTMLElementTagNameMap");

    for (const [name, tag] of tagNameMap.members) {
      const elementType = checker.getTypeOfSymbolAtLocation(
        tag,
        tag.valueDeclaration!,
      );
      processTypeHierarchy(elementType);
      const elementCls = checker.typeToString(elementType);

      if (tags.has(name)) continue;
      tags.add(name);
      const finalName = transformTagName(name as string);

      fs.appendFileSync(
        filename,
        `
export const ${finalName} = () => build(document.createElement("${name}") as unknown as ${elementCls}) as ReactiveElement<${elementCls}> & ${elementCls}Builder;
            `,
      );
    }
  });
}

function appendGetters(property: ts.Symbol) {
  const declarations = property.getDeclarations();
  if (!declarations) return;

  // Has getter or property signature
  const propertySignature = declarations.find(ts.isPropertySignature);
  const getAccessor = declarations.find(ts.isGetAccessor);
  const getter = getAccessor ?? propertySignature;
  if (!getter) return false;

  // Is object type
  const type = checker.getTypeOfSymbolAtLocation(property, getter);
  if (!(type.flags & ts.TypeFlags.Object)) return;

  const name = property.getName();
  const getterTypeString = checker.typeToString(type);
  // TODO: object chaining support

  const setter = declarations.find(ts.isSetAccessor);
  if (setter) {
    const paramType = setterParam(setter);
    const typeString = checker.typeToString(paramType);
    fs.appendFileSync(
      filename,
      `  ${name}: ${getterTypeString} & ((value: ValueOrReactive<${typeString}>)=>this);\n`,
    );
    return true;
  }
  fs.appendFileSync(filename, `  ${name}: ${getterTypeString};\n`);
  return true;
}

function appendSetters(property: ts.Symbol) {
  const declarations = property.getDeclarations();
  if (!declarations) return;

  const name = property.getName();
  const getter = declarations.find(ts.isPropertySignature);
  const setter = declarations.find(ts.isSetAccessor);
  if (setter) {
    const paramType = setterParam(setter);
    let typeString = checker.typeToString(paramType);
    fs.appendFileSync(
      filename,
      `  ${name}(value: ValueOrReactive<${typeString}>): this;\n`,
    );
  } else if (getter && !isReadonly(property)) {
    const propType = checker.getTypeOfSymbolAtLocation(property, getter);
    let typeString = checker.typeToString(propType);
    fs.appendFileSync(
      filename,
      `  ${name}(value: ValueOrReactive<${typeString}>): this;\n`,
    );
  }
}

// Types that should NOT have object chaining (Element/Node-like types)
const NON_CHAINABLE_TYPES = new Set([
  "Element",
  "Node",
  "EventTarget",
  "HTMLElement",
  "SVGElement",
  "SVGGraphicsElement",
  "MathMLElement",
  "Document",
  "ShadowRoot",
  "Window",
  "ParentNode",
  "ChildNode",
  "DocumentFragment",
]);

// Only these types get object sub-property chaining
const CHAINABLE_TYPES = new Set([
  "CSSStyleDeclaration",
  "DOMTokenList",
  "DOMStringMap",
  "StylePropertyMap",
]);

// SVGAnimated* types are also chainable
function isChainableTypeName(name: string): boolean {
  return CHAINABLE_TYPES.has(name) || name.startsWith("SVGAnimated");
}

/**
 * Check if a type is a simple object suitable for chaining
 * (only allowlisted types like CSSStyleDeclaration, DOMTokenList, etc.)
 */
function isChainableObjectType(type: ts.Type): boolean {
  if (!(type.flags & ts.TypeFlags.Object)) return false;

  const symbol = type.getSymbol();
  if (!symbol) return false;

  return isChainableTypeName(symbol.getName());
}

// Helper function to get unique own properties (not inherited from base types)
function writeProperties(type: ts.Type) {
  const allProperties = checker.getPropertiesOfType(type);
  const baseTypes = type.getBaseTypes().filter((baseType) => {
    const baseTypeName = baseType.getSymbol()?.getName();
    return baseTypeName !== undefined && !BASE_TYPES.includes(baseTypeName);
  });

  // Get all inherited property names
  const inheritedProps = new Set<string>();

  baseTypes.forEach((baseType) => {
    checker.getPropertiesOfType(baseType).forEach((prop) => {
      inheritedProps.add(prop.getName());
    });
  });

  allProperties.forEach((prop) => {
    const name = prop.getName();

    // Skip inherited properties to keep them unique
    if (inheritedProps.has(name)) return;
    if (name.startsWith("on")) return; // Skip event handlers

    const declarations = prop.getDeclarations();
    if (!declarations) return;
    const method = declarations.find(ts.isMethodSignature);
    // TODO: support setter methods
    // TODO: on events
    if (method) return; // Skip methods

    // Check if property has a chainable object type (e.g., style, classList)
    const propertySignature = declarations.find(ts.isPropertySignature);
    const getAccessor = declarations.find(ts.isGetAccessor);
    const setAccessor = declarations.find(ts.isSetAccessor);
    const getter = getAccessor ?? propertySignature;

    if (getter) {
      const propType = checker.getTypeOfSymbolAtLocation(prop, getter);
      if (isChainableObjectType(propType)) {
        const objectTypeStr = checker.typeToString(propType);
        if (setAccessor) {
          const paramType = setterParam(setAccessor);
          const typeString = checker.typeToString(paramType);
          fs.appendFileSync(
            filename,
            `  ${name}: Chain<this, ${objectTypeStr}> & ((value: ValueOrReactive<${typeString}>) => this);\n`,
          );
        } else if (propertySignature && !isReadonly(prop)) {
          const typeString = checker.typeToString(propType);
          fs.appendFileSync(
            filename,
            `  ${name}: Chain<this, ${objectTypeStr}> & ((value: ValueOrReactive<${typeString}>) => this);\n`,
          );
        } else {
          // Read-only chainable object - sub-properties only
          fs.appendFileSync(
            filename,
            `  ${name}: Chain<this, ${objectTypeStr}>;\n`,
          );
        }
        return;
      }
    }

    appendSetters(prop);
  });
}

const BASE_TYPES = [
  "HTMLElement",
  "Element",
  "Node",
  "EventTarget",
  "SVGElement",
  "SVGGraphicsElement",
  "MathMLElement",
];

// Process a type and its base types recursively
function processTypeHierarchy(type: ts.Type): string[] {
  const symbol = type.getSymbol();
  if (!symbol) return [];

  const typeName = symbol.getName();
  if (typeName === "__type") {
    return [];
  }
  // If already processed, return just the name
  if (processedTypes.has(typeName)) {
    return [typeName];
  }

  processedTypes.add(typeName);

  // Process base types first
  const baseTypes = type.getBaseTypes().filter((baseType) => {
    const baseTypeName = baseType.getSymbol()?.getName();
    return baseTypeName !== undefined && BASE_TYPES.includes(baseTypeName);
  });
  const baseTypeNames: string[] = [];

  baseTypes.forEach((baseType) => {
    const processed = processTypeHierarchy(baseType);
    baseTypeNames.push(...processed);
  });

  // Get unique base type names for extends clause
  const uniqueBaseNames = [...new Set(baseTypeNames)];

  // Generate interface
  const extendsClause =
    uniqueBaseNames.length > 0
      ? ` extends ${uniqueBaseNames.map((name) => `${name}Builder`).join(", ")}`
      : "";

  fs.appendFileSync(
    filename,
    `
interface ${typeName}Builder${extendsClause} {\n`,
  );

  // Get only own properties (not inherited)
  writeProperties(type);

  fs.appendFileSync(filename, "}\n\n");

  return [typeName];
}

function setterParam(setter: ts.SetAccessorDeclaration) {
  const setterParams = setter.parameters;
  if (setterParams.length !== 1) return;
  return checker.getTypeAtLocation(setterParams[0]);
}

function getterParam(prop: ts.Symbol, getter: ts.GetAccessorDeclaration) {
  return checker.getTypeOfSymbolAtLocation(prop, getter);
}

function isReadonly(prop: ts.Symbol) {
  const flags = prop.valueDeclaration
    ? ts.getCombinedModifierFlags(prop.valueDeclaration)
    : 0;

  if (flags & ts.ModifierFlags.Readonly) return true;

  return false;
}
generateHTMLElementBuilders();
