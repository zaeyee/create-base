import { defineConfig, presetWind3, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        width: '1.125em',
        height: '1.125em',
        'vertical-align': 'middle'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
