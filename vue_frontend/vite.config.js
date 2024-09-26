import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import { splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5173,
    host: true,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve('./src/main.js'),
        reward: resolve('./src/reward.js'),
      },
      output: {
        dir: '../holistiplan/static/vue/',
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [
    vue(),
    cssInjectedByJsPlugin({ jsAssetsFilterFunction: () => true }),
    splitVendorChunkPlugin(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
	api: 'modern-compiler', // or 'modern',
        silenceDeprecations: ['legacy-js-api'],

      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
