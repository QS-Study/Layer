// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@qs-study/element-plus-layer'],
  vite: {
    optimizeDeps: {
      include: ['dayjs', 'dayjs/plugin/*'],
    },
  },
});
