import jsonQuery from 'json-query'
import { useMetaStore } from '@/stores/meta'
import { useScreenStore } from '@/stores/screen'
import metaData from '@/config/metaDataSample.json'
import { cloneDeep } from 'lodash'

export default defineNuxtRouteMiddleware(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    
    const metaStore = useMetaStore()
    const screenStore = useScreenStore()

    const path = to.path

    let userData = metaStore.getUserData.value

    if (!userData) {
      metaStore.setUserData(metaData.data)

      userData = metaStore.getUserData.value
    }

    const currScreen = jsonQuery(`screens[path=${path}]`, {
      data: userData
    }).value

    if (!currScreen) {
      return navigateTo('/errors')
    }

    const screens = screenStore.screens

    const storeScreen = screens?.[currScreen.screenId]

    const screen = cloneDeep(currScreen)

    screenStore.setScreen(screen as any)

    if (!storeScreen) {
      screenStore.setScreens(screen as any)
    }
  }
)