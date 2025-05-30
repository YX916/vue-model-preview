import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "path";

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 80
  },
  plugins: [vue(), vueJsx({})],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "vue-model-preview",
      formats: ['es', 'umd']
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});