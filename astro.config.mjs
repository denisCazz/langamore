import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://langamorepollenzo.it',
  integrations: [sitemap(), playformCompress()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: './src/pages/index.astro',
          '404': './src/pages/404.astro'
        }
      }
    }
  }
});