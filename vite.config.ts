import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          title: process.env.VITE_APP_TITLE,
        },
      },
    }),
    compression(), // Enable Gzip/Brotli compression
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@mdi/font/css/materialdesignicons.css";`
      }
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000', // Laravel API URL
        changeOrigin: true, // Necessary for CORS handling
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Keep the /api prefix in the proxied request
      },
    },
  },

  build: {
    sourcemap: true, // Enable source maps for easier debugging
    chunkSizeWarningLimit: 800, // Increase chunk size limit to avoid warnings

    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          const extType = name.split('.').pop();
          return `assets/${extType}/[name]-[hash].[ext]`;
        },

        // Split large dependencies into separate chunks
        manualChunks: {
          vue: ['vue'],
          vuetify: ['vuetify'],
          vendor: ['axios'], // Grouping vendor libraries
        },
      },
    },
  },

  base: '/', // Set this to the base URL of your app
});
