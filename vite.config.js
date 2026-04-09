import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import eslint from "vite-plugin-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const createAlias = (dirName) => path.resolve(__dirname, `src/${dirName}`);
//components =>/项目根目录/src/components

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": createAlias(""), //src/,项目根目录
      "@components": createAlias("components"), //src/components/,组件专用目录
      "~img": createAlias("assets/images"), //src/assets/images/,图片专用目录
      "#types": createAlias("/types"), //src/types/,类型专用目录
      "@utils": createAlias("utils"),
      "@assets": createAlias("assets"),
      "@pages": createAlias("pages"),
      "@hooks": createAlias("hooks"),
      "@store": createAlias("store"),
      "@services": createAlias("services"),
    },
  },
});
