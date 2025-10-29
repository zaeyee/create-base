import { defineConfig } from 'unocss'
import { presetWeapp } from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  shortcuts: {},
  theme: {
    colors: {
      primary: '#ff6200',
      success: '#1fc819',
      warning: '#f0a020',
      danger: '#f85757',
      link: '#089bff',
      tips: '#9e9fa2'
    }
  },
  presets: [presetWeapp({ whRpx: false })],
  transformers: [transformerClass()]
})
