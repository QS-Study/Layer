



export const useScreenStore = defineStore('screen', () => {
    const screens = ref<Record<string, any>>({})

    const screen = ref<any>()
    // getters
    const getScreens = computed(() => screens)


    const getScreenById = (screenId: string | undefined): any | undefined => {
        return screenId ? screens.value[screenId] : undefined
      }

    const getComponent = (screenId: string, componentId: string) => {
        const screen = getScreenById(screenId)
    
        return screen?.components[componentId]
    }

    const getControl = (
        screenId: string,
        componentId: string,
        controlId: string
      ): any | undefined => {
        const component = getComponent(screenId, componentId)
        if (component) {
          return component.controls[controlId]
        }
      }

    const getControlData = (screenId: string, componentId: string, controlId: string) => {
      const control = getControl(screenId, componentId, controlId)
      if (control) {
        return control.data
      }
    }
    
    const setScreen = (_screen: any) => {
      screen.value = _screen
    }

    const setScreens = (_screen: any) => {
      // screenData 가공후 셋팅
      screens.value[_screen.screenId] = _screen
    }
    
      return {
        getScreenById,
        getScreens,
        getComponent,
        getControl,
        getControlData,
        setScreen,
        setScreens,
        screen,
        screens
      }
})