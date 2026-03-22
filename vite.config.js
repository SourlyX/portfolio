import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Para que siga siendo el mismo puerto
    proxy: {
      '/api': 'http://localhost:5001'  // Proxy al backend
    }
  }
})