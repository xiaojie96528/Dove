import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    host: "0.0.0.0",
    open: "/",
    proxy: {
      // 如果是 /lsbdb 打头，则访问地址如下
      // 如果是 /lsbdb 打头，则访问地址如下
      '^/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/lsbdb/, '')
        // rewrite: (path) => path.replace(/^\/api/, '')
        rewrite: (path) => path
      }
    }
  }

})
