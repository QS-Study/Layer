import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useMetaStore } from './meta'

export const SettingAppStore = defineStore('SettingApp', () => {
  const metaStore = useMetaStore()

  const  layoutType = ref('horizontal')
   const layoutDarkMode = ref(false)
   const layoutThemeColor = ref('green')
   const layoutThemeBg = ref('')
   const layoutLogoInfo = ref({ title: 'CALS', src: '/img/logo.png', alt: '' })

   const layoutMenuType= ref('vertical')
   const layoutMenuCollapse= ref(false)
   const layoutMainExpand= ref(false)

   const panelPopup= ref(false)
   const panelRight= ref(false)
   const panelBottom= ref(false)

   const headerBanner= ref({ use: true, src: "/img/banner-header.png", alt: '' })
   const asideBanner= ref({ use: true, src: "/img/banner-aside.png", alt: '' })

   const headerOptionMainExpand= ref(true)
   const headerOptionotification= ref({ use: true, activeItem: ['Reverse'] })
   const headerOptionSiteMap= ref(true)
   const headerOptionAppInfo= ref({ use: true, activeItem: ['Screen', 'Version'] })
   const headerOptionLanguage= ref({ use: true, activeItem: ['ENG', 'KOR'] })
   const headerOptionUserInfo= ref({ use: true, activeItem: ['My', 'IP', 'Logout'] })

   const scale= ref(13)
   const spacing= ref(8)
   const alpha= ref(0.8)
   const maskColor= ref('rgba(255,255,255,0.8)')
   const primaryColor= ref('#5796ad')

   const screenFull= ref(false)
   const componentOutlineType= ref('basic')
   const progressIcon= ref('basic')

   const loginLogo= ref({ use: true, src: "/img/login-logo.png", alt: '' })
   const loginBanner= ref({ use: true, src: "/img/login-banner.png", alt: '' })

   const currentScreen= ref('default')
   const currentComponent= ref('form')

   const menuList= ref([])
  
    const tagsList= [
      { id: '10', title: 'Home', path: '/' },
      { id: '20', title: 'Screen', path: '/Screen' },
      { id: '30', title: 'Component', path: '/component' },
      
    ]
  
  
   function setMenuList() {
    // { id: '10', title: 'Home', path: '/', icon: 'house', hidden: false, menus: [] },
    // { id: '20', title: 'Screen', path: '/screen', icon: 'sliders', hidden: false, menus: [], },
    // {
    //   id: '30', title: 'Component', path: '/component', icon: 'wrench', hidden: false, menus: [
    //     { id: '301', title: 'ToolbarForm', path: '/component', icon: '', hidden: false, menus: [] },
    //     { id: '302', title: 'ToolbarList', path: '/component', icon: '', hidden: false, menus: [] },
    //     { id: '303', title: 'Toolbar', path: '/component', icon: '', hidden: true, menus: [] },
    //   ]
    // }
    menuList.value = metaStore.getUserData.value.menus
   }
  
   function changeScale() {
      document.documentElement.style.setProperty('font-size', `${scale.value}px`)
    }

    function changeSpacing() {
      document.documentElement.style.setProperty('--qs-layout-padding', `${spacing.value}px`)
    }

    function changeAlpha() {
      if (layoutDarkMode.value)
        maskColor.value = `rgba(0,0,0,${alpha.value})`
      else
        maskColor.value = `rgba(255,255,255,${alpha.value})`

      // document.querySelector('.app-layout')?.setAttribute('style', `--qs-layout-item-background-color: ${this.maskColor}`)
      document.documentElement.style.setProperty('--qs-layout-item-background-color', `${maskColor.value}`)
    }

    function changeMode() {
      if (layoutDarkMode.value) {
        document.querySelector('html')?.classList.add('dark')
        layoutDarkMode.value = true
      } else {
        document.querySelector('html')?.classList.remove('dark')
        layoutDarkMode.value = false
      }
      changeAlpha()
    }

   function  changeTheme(theme: string) {
      if (layoutThemeColor.value !== theme) {
        document.querySelector('html')?.classList.remove(layoutThemeColor.value)
        layoutThemeColor.value = theme
        document.querySelector('html')?.classList.add(theme)
      }
    }

    function changeLayout(layout: string) {
      if (layoutType.value !== layout) {
        if (layout == 'vertical') {
          layoutType.value = 'vertical'
          layoutMenuType.value = 'horizontal'
          layoutMenuCollapse.value = false
        } else {
          layoutType.value = 'horizontal'
          layoutMenuType.value = 'vertical'
          layoutMenuCollapse.value = false
        }
      }
    }


    return {
      layoutType,
      layoutDarkMode,
      layoutThemeColor,
      layoutThemeBg,
      layoutLogoInfo,
      layoutMenuType,
      layoutMenuCollapse,
      layoutMainExpand,
      panelPopup,
      panelRight,
      panelBottom,
      headerBanner,
      asideBanner,
      headerOptionMainExpand,
      headerOptionotification,
      headerOptionSiteMap,
      headerOptionAppInfo,
      headerOptionLanguage,
      headerOptionUserInfo,
      scale,
      spacing,
      alpha,
      maskColor,
      primaryColor,
      screenFull,
      componentOutlineType,
      progressIcon,
      loginLogo,
      loginBanner,
      currentScreen,
      currentComponent,
      menuList,
      tagsList,
      changeScale,
      changeSpacing,
      changeAlpha,
      changeMode,
      changeTheme,
      changeLayout,
      setMenuList
    }
})
