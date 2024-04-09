import { useScreenStore } from '~/stores/screen'

export default function <P extends any, C extends any>(
  screenId: string,
  componentId: string
) {

  const screenStore = useScreenStore()


  const component = computed(() => {
    return screenStore.getComponent(screenId, componentId)
  })

  const componentProp = computed(() => {
    return component.value ? component.value?.prop : {}
  })

  const controls = computed(() => {
    return component.value ? component.value?.controls : []
  })


  return {
    component,
    componentProp,
    controls
  }
}