// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../../layers/select-layer',
    '../../layers/no-element-plus-select-layer',
    '../../layers/no-element-plus-text-layer',
  ],
});
