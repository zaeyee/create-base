import { defineConfig, presetWind3, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  shortcuts: {
    'u-clickable': 'cursor-pointer duration-300 active:op-100 hover:op-70'
  },
  theme: {
    colors: {
      primary: '#ff6200',
      success: '#1fc819',
      warning: '#f0a020',
      danger: '#f85757',
      link: '#089bff',
      tips: '#9e9fa2'
    },
    container: {
      center: true
    }
  },
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
