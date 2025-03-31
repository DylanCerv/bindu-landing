import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // output: 'server',
  adapter: vercel({
    analytics: true,
    // Configuramos Node.js 20 como runtime (compatible con Vercel)
    functionPerRoute: false,
    devImageService: true,
    // Especificar runtime actualizado
    runtime: 'nodejs18.x',
  }),
});