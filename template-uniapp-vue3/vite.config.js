import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: true,
      eslintrc: {
        enabled: true
      }
    })
  ]
})
