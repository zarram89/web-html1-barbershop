import { defineConfig, loadEnv } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgSprite from "vite-plugin-svg-sprite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    root: "src",

    // автоматически берём base из .env.production
    base: env.VITE_BASE || "/",

    build: {
      outDir: "../dist",
      emptyOutDir: true,
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
