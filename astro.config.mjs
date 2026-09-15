// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://maropizzeria.it',
  adapter: vercel(),
  // TODO: quando il menu digitale GO!Food sarà online, aggiungere il redirect
  // redirects: { '/menu': { destination: 'https://gofoodmenu.it/maro-pizzeria', status: 302 } },
  vite: {
    plugins: [tailwindcss()]
  }
});
