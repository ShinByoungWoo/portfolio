import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /portfolio/ rather than the domain root.
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
