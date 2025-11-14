import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgSprite from "vite-plugin-svg-sprite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "src",
    base: env.VITE_BASE || "/",

    build: {
      outDir: "../dist",
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "src/index.html"),
          catalog: path.resolve(__dirname, "src/catalog.html"),
        },
      },
    },

    plugins: [
      svgSprite({
        include: "icons/**/*.svg",
        symbolId: (file) => "icon-" + file.name,
      }),

      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        webp: { quality: 80 },
      }),
    ],
  };
});
