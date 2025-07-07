import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
  build: {
    // Enable modern JavaScript for better performance
    target: 'es2020',
    // Optimize chunk splitting for better caching and loading
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          'react-vendor': ['react', 'react-dom'],
          // Router
          'router': ['react-router-dom'],
          // UI libraries
          'ui-icons': ['lucide-react'],
          // Firebase
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          // Form libraries
          'forms': ['react-hook-form', '@hookform/resolvers', 'yup'],
          // Animation libraries
          'animations': ['framer-motion'],
          // Utility libraries
          'utils': ['clsx', 'tailwind-merge', 'class-variance-authority']
        },
        // Optimize chunk file names for better caching
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            return `assets/[name]-[hash].js`
          }
          return `assets/chunk-[hash].js`
        },
        // Optimize entry file names
        entryFileNames: `assets/[name]-[hash].js`,
        // Optimize asset file names
        assetFileNames: `assets/[name]-[hash].[ext]`
      },
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable minification
    minify: 'terser',
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
  // Development optimizations
  server: {
    hmr: {
      overlay: false,
    },
  },
  // Enable optimizeDeps for faster dev startup
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'lucide-react',
      'react-router-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'framer-motion'
    ],
  },
})
