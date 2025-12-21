import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target:
          "ecommerce-project-backend-bmd2k33vw-mahx-codes-projects.vercel.app",
      },
      "/images": {
        target:
          "ecommerce-project-backend-bmd2k33vw-mahx-codes-projects.vercel.app",
      },
    },
  },
});
