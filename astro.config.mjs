import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://oscartorres.xyz",
  integrations: [tailwind()],
  redirects: {
    "/posts/[...slug]": "/blog/[...slug]",
    "/cv": "/Oscar_Torres_Frontend_Engineer.pdf",
    "/resume": "/Oscar_Torres_Frontend_Engineer.pdf",
    "/CV": "/Oscar_Torres_Frontend_Engineer.pdf",
    "/Resume": "/Oscar_Torres_Frontend_Engineer.pdf",
    "/RESUME": "/Oscar_Torres_Frontend_Engineer.pdf"
  }
});
