import { defineConfig } from "@tanstack/react-start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [
      // cloudflare({ viteEnvironment: { name: "ssr" } }),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
    define: {
      "globalThis.Cloudflare.compatibilityFlags":
        "{enable_nodejs_process_v2: true}",
    },
  },
});
