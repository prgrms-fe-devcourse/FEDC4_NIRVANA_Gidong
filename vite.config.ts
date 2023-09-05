import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
      { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
      { find: '@types', replacement: path.resolve(__dirname, '/src/types') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, '/src/constants')
      },
      { find: '@styles', replacement: path.resolve(__dirname, '/src/styles') },
      {
        find: '@colors',
        replacement: path.resolve(__dirname, '/src/styles/colors')
      }
    ]
  }
});
