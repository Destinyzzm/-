// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url'
 
// 引入tailwindcss
import path from 'path';
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      // 添加对tailwindcss的支持
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/tailwind.css')}";`,
      },
    },
  },
  resolve: {
    alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@images': fileURLToPath(
            new URL('./src/assets/images', import.meta.url)
        ),
        '@fonts': fileURLToPath(
            new URL('./src/assets/fonts', import.meta.url)
        )
    }
}
});