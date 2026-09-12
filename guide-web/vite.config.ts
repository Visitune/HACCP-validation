import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // base relative : fonctionne sur GitHub Pages (projet), Vercel et domaine custom
  base: "./",
  plugins: [react()],
})
