import { useScreenStore } from '~/stores/screen'


export default function (screenId?: string) {
  const screenStore = useScreenStore()

  const screen = ref<any>()
  const components = ref<Record<string, any>>()

  const uiType = ref<string>()
  const skeletonLoading = ref<boolean>(true)

  if (screenId) {
    screen.value = screenStore.getScreenById(screenId)
    const screenComponents = screen.value?.components
    components.value = screenComponents
    uiType.value = screen.value?.UIType
  }

  const getComponent = (componentId: any) => {
    return components?.[componentId] || []
  }

  const getControl = (componentId: any, controlId: any) => {
    return getComponent(componentId)?.controls?.[controlId] || []
  }
  

  return {
    screen,
    components,
    uiType,
    skeletonLoading,
    getComponent,
    getControl
  }
}
