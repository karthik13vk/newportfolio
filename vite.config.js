import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/karthik_portfolio/",
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://demo.tbi.net.in",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
