import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    uni.default(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: true,
      eslintrc: {
        enabled: true
      }
    }),
    UnoCSS()
  ]
})
