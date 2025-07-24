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
  build: {
    cssCodeSplit: true, // Split CSS into smaller chunks
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor CSS (like Tailwind) from your app CSS
          if (id.includes('node_modules')) return 'vendor'
          // You can add more specific chunking if needed
          if (id.includes('components')) return 'components'
        },
        // Optimize CSS file names for caching
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
  },
})
