import { defineConfig } from "tsdown";

export default defineConfig({
  dts: true,
  entry: ["src/core.ts", "src/signals.ts", "src/dom.ts"],
});
