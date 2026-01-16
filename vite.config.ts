import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // Importação necessária para o resolve se usar o alias @

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define a base para os assets (CSS, Imagens, JS) carregarem do lugar certo
  base: '/plush-palooza/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
