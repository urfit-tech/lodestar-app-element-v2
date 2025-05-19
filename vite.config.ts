import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Element",
      formats: ["es"],
      fileName: () => "index.js",
    },
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom","styled-components"],
    },
  },
  plugins: [
    dts({
      outDir: "dist/types",
      insertTypesEntry: true,

    }),
  ],
});
