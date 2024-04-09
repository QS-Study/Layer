// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '@kt-test/el-plus-layer'
  ],

  css: [
    join(currentDir, './assets/scss/index.scss')
  ],

  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ]
  },

})
