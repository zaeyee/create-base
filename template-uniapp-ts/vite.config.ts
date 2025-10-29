/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'
import path from 'path'
import uni from '@dcloudio/vite-plugin-uni'
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
    // @ts-expect-error
    uni.default(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: true
    }),
    UnoCSS()
  ]
})
