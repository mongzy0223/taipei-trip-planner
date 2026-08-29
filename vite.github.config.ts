import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  root: 'github',
  base: './',
  build: {
    outDir: '../github-dist',
    emptyOutDir: true,
  },
  plugins: [react(), viteSingleFile()],
});
