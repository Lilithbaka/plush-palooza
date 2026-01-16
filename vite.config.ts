import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/plush-palooza/',
  resolve: {
    alias: {
      // Isso garante que o símbolo "@" aponte para a pasta src corretamente
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Se o build falhar por causa de erros de TypeScript do Lovable, 
  // adicione a linha abaixo para ignorar erros de TS no build e conseguir subir o site:
  // build: { reportCompressedSize: false }
})
