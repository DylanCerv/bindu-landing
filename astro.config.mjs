import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: vercel({
    includeFiles: ['.env'],
    maxDuration: 60,
    analytics: true,
    functionPerRoute: false,
    devImageService: true,
    // runtime: 'nodejs20.x',
  }),
});