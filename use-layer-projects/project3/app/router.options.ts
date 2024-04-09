import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: _routes => {
    const routeArray = [
      {
        name: 'master',
        path: '/:catchAll(.*)',
        component: async () => import('@/pages/master.vue')
      },
      {
        name: 'errors',
        path: '/errors',
        component: async () => import('~/pages/errors.vue')
      },
    ]
    return routeArray
  }
}
