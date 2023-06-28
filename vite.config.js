import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/react/web/web.tsx',
        'resources/react/app/app.tsx',
      ],
      ssr: [
        'resources/react/web/ssr.jsx',
        'resources/react/app/ssr.jsx',
      ],
      refresh: true,
    }),
    react(),
  ],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss/nesting'),
        require('tailwindcss')({ config: './tailwind.config.js' }),
        require('autoprefixer'),
      ],
    },
  },
  define: {
    'process.env': {},
    'global.env': {},
  },
  resolve: { alias: { '@': '/resources' }},
  build: { commonjsOptions: { transformMixedEsModules: true }},
});
