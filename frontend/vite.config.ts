import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-spring-docker-project/',
  server: {
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
})
