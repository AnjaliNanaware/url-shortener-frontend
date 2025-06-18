import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
  server: {
    port: 5173, // <--- Specify your desired port here
    // You can also add other server options like host, open, etc.
    // host: '0.0.0.0', // to expose on network
    // open: true, // to automatically open browser on start
  },
})
