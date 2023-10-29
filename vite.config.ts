import path             from 'path';
import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@'          : path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@typings'   : path.resolve(__dirname, './src/typings'),
      '@theme'     : path.resolve(__dirname, './src/theme'),
      '@modules'   : path.resolve(__dirname, './src/modules'),
      '@store'     : path.resolve(__dirname, './src/store'),
      '@hooks'     : path.resolve(__dirname, './src/hooks'),
      '@hocs'      : path.resolve(__dirname, './src/hocs'),
      '@utils'     : path.resolve(__dirname, './src/utils'),
    }
  }
});
