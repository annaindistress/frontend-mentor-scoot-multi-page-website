import { resolve } from 'path';
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about.html'),
        careers: resolve(__dirname, 'src/careers.html'),
        locations: resolve(__dirname, 'src/locations.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
  base: '/frontend-mentor-scoot-multi-page-website/',
  root: 'src',
});
