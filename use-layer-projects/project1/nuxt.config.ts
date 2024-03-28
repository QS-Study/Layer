// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [
    '../../layers/element-plus-layer',
    '../../layers/no-element-plus-select-layer',
    '../../layers/no-element-plus-text-layer',
  ],
});
