import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, './src/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@themes': `${path.resolve(__dirname, './src/styles/themes/')}`,
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@services': `${path.resolve(__dirname, './src/services/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@contexts': `${path.resolve(__dirname, './src/contexts/')}`,
      '@models': `${path.resolve(__dirname, './src/models/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@styles': `${path.resolve(__dirname, './src/styles/')}`,
    },
  },
  server: {
    port: 3000,
  },
});
