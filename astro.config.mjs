import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  integrations: [mdx()],
  image: {
    // Use sharp for image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
