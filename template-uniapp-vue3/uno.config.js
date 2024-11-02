import { defineConfig } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  theme: {
    colors: {
      primary: '#089bff',
      success: '#1fc819',
      warning: '#f0a020',
      danger: '#f85757',
      info: '#9e9fa2'
    }
  },
  presets: [presetWeapp({ whRpx: false })],
  transformers: [transformerClass()]
})
