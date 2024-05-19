import { defineConfig } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  theme: {
    colors: {
      primary: 'var(--c-primary)',
      primaryThin: 'var(--c-primary-thin)',
      success: 'var(--c-success)',
      warning: 'var(--c-warning)',
      danger: 'var(--c-danger)',
      info: 'var(--c-info)'
    }
  },
  presets: [presetWeapp({ whRpx: false })],
  transformers: [transformerClass()]
})
