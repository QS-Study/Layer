// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({

  devtools: { enabled: true },
  ssr: false,
  extends:[
    '../../layers/ui-layer',
    '@kt-test/el-plus-layer',
    // '@kt-test/ui-layer',
    '@kt-test/form',
  ],
  components: {
    dirs: [
      {
        path: '~/screens',
        global: true
      },
      {
        path: '~/components',
        global: true
      },
      '~/screens',
      '~/components',
    ]
  },

  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss',
    themes: ['dark'],
  },
})
