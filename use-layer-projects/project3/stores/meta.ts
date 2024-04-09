import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', () => {

  const userData = ref<any | null>(null)
  const getUserData = computed(() => userData)
  const setUserData = (_userData: any | null) => {
    userData.value = _userData
  }


  return {
    setUserData,
    getUserData,
  }
})
