import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
    server: {
      allowedHosts: ["5173-rwinterburn-music-bpeht9zozk2.ws-eu118.gitpod.io"],
    },
})
