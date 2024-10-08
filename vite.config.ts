import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({      
      iconDirs: [path.resolve(process.cwd(), 'src/6_shared/ui/icons')], // Указываем директорию с SVG файлами
      symbolId: 'icon-[name]', // Настраиваем ID для символов спрайта
      svgoOptions: true, // Включаем оптимизацию SVG
    }),
  ],
})