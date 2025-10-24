import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  root: './frontend',  // <-- kök dizini açık belirt
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html')  // <-- giriş dosyası burada
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
