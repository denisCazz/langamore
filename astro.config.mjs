import { defineConfig } from 'astro/config';

export default defineConfig({
  buildOptions: {
    sitemap: false, // Disabilita la generazione della sitemap se non necessaria
  },
  vite: {
    build: {
      rollupOptions: {
        input: {
          main: './src/pages/index.astro',
          '404': './src/pages/404.astro',
        },
      },
    },
  },
});
