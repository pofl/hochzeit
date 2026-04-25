import mdx from "@astrojs/mdx";
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  output: "static",
  integrations: [mdx()],
  image: {
    // Use sharp for image optimization
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
  fonts: [
    {
      provider: fontProviders.bunny(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      weights: [300, 600],
      styles: ["normal"],
    },
    {
      provider: fontProviders.bunny(),
      name: "Playfair Display",
      cssVariable: "--font-playfair-display",
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.bunny(),
      name: "Tangerine",
      cssVariable: "--font-tangerine",
      weights: [400],
      styles: ["normal"],
    },
  ],
});
