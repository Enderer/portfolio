// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
        rollupOptions: {
          output: {
              entryFileNames: '[name]-[hash].js',
          },
        },
    },
  },
});
