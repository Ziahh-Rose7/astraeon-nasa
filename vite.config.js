import { defineConfig } from 'vite';

// Files in /public are served from the site root and copied into the build.
// So public/assets/textures/earth.jpg is available at /assets/textures/earth.jpg.
export default defineConfig({
  publicDir: 'public',
  server: { port: 5173 },
  build: { chunkSizeWarningLimit: 1500 },
});
