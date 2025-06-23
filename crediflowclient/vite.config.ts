import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
  port: 3001,
  host: '0.0.0.0', // allow access on your network
  https: false     // set to true if using SSL
}
})
