import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
  server: {
    port: 3000,
    proxy: {},
  },
  plugins: [react()],
})
