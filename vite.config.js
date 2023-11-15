import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/react/web/web.tsx',
        'resources/react/app/app.tsx',
        'resources/react/admin/admin.tsx',
      ],
      ssr: [
        'resources/react/web/ssr.jsx',
        'resources/react/app/ssr.jsx',
        'resources/react/admin/ssr.jsx',
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
  resolve: { alias: { '@kit': path.resolve(__dirname, './resources/react/global') }},
  build: { commonjsOptions: { transformMixedEsModules: true }},
});
