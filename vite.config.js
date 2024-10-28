import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // This changes the output dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: 'dist',
  },
  plugins: [tsconfigPaths(), react()],
  resolve: {
    alias: {
      // Настроим alias для папок
      "pages": "/src/pages",
      "components": "/src/components",
      "assets": "/src/assets",
      "styles": "/src/styles",
      "hooks": "/src/hooks",
      "utils": "/src/utils",
    },
  },
});

