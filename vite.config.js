import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://b1ckbeard.github.io/vivanti-test',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
