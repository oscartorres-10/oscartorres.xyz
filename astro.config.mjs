import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://oscartorres.xyz",
  integrations: [tailwind()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]"
  }
});
