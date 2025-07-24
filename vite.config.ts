import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import { defineConfig } from 'vite'

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.VITE_PORT || '3000'),
  },
})
