import type { Preset, SourceCodeTransformer } from 'unocss'
import { defineConfig, presetAttributify } from 'unocss'
import { presetApplet, presetRemRpx, transformerApplet, transformerAttributify } from 'unocss-applet'

const isApplet = process.env?.UNI_PLATFORM?.startsWith('mp-') ?? false

const presets: Preset[] = []
const transformers: SourceCodeTransformer[] = []

if (isApplet) {
  presets.push(presetApplet({ preflight: false }))
  presets.push(presetRemRpx())
  transformers.push(transformerAttributify({ ignoreAttributes: ['block'] }))
  transformers.push(transformerApplet())
} else {
  presets.push(presetApplet({ preflight: false }))
  presets.push(presetAttributify())
  presets.push(presetRemRpx({ mode: 'rpx2rem' }))
}

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
  presets,
  transformers
})
