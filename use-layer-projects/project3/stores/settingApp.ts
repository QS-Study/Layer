import { defineStore } from 'pinia'
import { ref } from 'vue'

export const SettingAppStore = defineStore('SettingApp', {
  state: () => ({
    layoutType: ref('horizontal'),
    layoutDarkMode: ref(false),
    layoutThemeColor: ref('green'),
    layoutThemeBg: ref(''),
    layoutLogoInfo: ref({ title: 'CALS', src: '/img/logo.png', alt: '' }),

    layoutMenuType: ref('vertical'),
    layoutMenuCollapse: ref(false),
    layoutMainExpand: ref(false),

    panelPopup: ref(false),
    panelRight: ref(false),
    panelBottom: ref(false),

    headerBanner: ref({ use: true, src: "/img/banner-header.png", alt: '' }),
    asideBanner: ref({ use: true, src: "/img/banner-aside.png", alt: '' }),

    headerOptionMainExpand: ref(true),
    headerOptionotification: ref({ use: true, activeItem: ['Reverse'] }),
    headerOptionSiteMap: ref(true),
    headerOptionAppInfo: ref({ use: true, activeItem: ['Screen', 'Version'] }),
    headerOptionLanguage: ref({ use: true, activeItem: ['ENG', 'KOR'] }),
    headerOptionUserInfo: ref({ use: true, activeItem: ['My', 'IP', 'Logout'] }),

    scale: ref(13),
    spacing: ref(8),
    alpha: ref(0.8),
    maskColor: ref('rgba(255,255,255,0.8)'),
    primaryColor: ref('#5796ad'),

    screenFull: ref(false),
    componentOutlineType: ref('basic'),
    progressIcon: ref('basic'),

    loginLogo: ref({ use: true, src: "/img/login-logo.png", alt: '' }),
    loginBanner: ref({ use: true, src: "/img/login-banner.png", alt: '' }),

    currentScreen: ref('default'),
    currentComponent: ref('form'),

    menuList: [
      { id: '10', title: 'Home', path: '/', icon: 'house', hidden: false, menus: [] },
      { id: '20', title: 'Screen', path: '/screen', icon: 'sliders', hidden: false, menus: [], },
      {
        id: '30', title: 'Component', path: '/component', icon: 'wrench', hidden: false, menus: [
          { id: '301', title: 'ToolbarForm', path: '/component', icon: '', hidden: false, menus: [] },
          { id: '302', title: 'ToolbarList', path: '/component', icon: '', hidden: false, menus: [] },
          { id: '303', title: 'Toolbar', path: '/component', icon: '', hidden: true, menus: [] },
        ],
      },
    ],
    tagsList: [
      { id: '10', title: 'Home', path: '/' },
      { id: '20', title: 'Screen', path: '/Screen' },
      { id: '30', title: 'Component', path: '/component' },
      
    ],
  }),
  getters: {},
  actions: {
    changeScale() {
      document.documentElement.style.setProperty('font-size', `${this.scale}px`)
    },

    changeSpacing() {
      document.documentElement.style.setProperty('--qs-layout-padding', `${this.spacing}px`)
    },

    changeAlpha() {
      if (this.layoutDarkMode)
        this.maskColor = `rgba(0,0,0,${this.alpha})`
      else
        this.maskColor = `rgba(255,255,255,${this.alpha})`

      // document.querySelector('.app-layout')?.setAttribute('style', `--qs-layout-item-background-color: ${this.maskColor}`)
      document.documentElement.style.setProperty('--qs-layout-item-background-color', `${this.maskColor}`)
    },

    changeMode() {
      if (this.layoutDarkMode) {
        document.querySelector('html')?.classList.add('dark')
        this.layoutDarkMode = true
      } else {
        document.querySelector('html')?.classList.remove('dark')
        this.layoutDarkMode = false
      }
      this.changeAlpha()
    },

    changeTheme(theme: string) {
      if (this.layoutThemeColor !== theme) {
        document.querySelector('html')?.classList.remove(this.layoutThemeColor)
        this.layoutThemeColor = theme
        document.querySelector('html')?.classList.add(theme)
      }
    },

    changeLayout(layout: string) {
      if (this.layoutType !== layout) {
        if (layout == 'vertical') {
          this.layoutType = 'vertical'
          this.layoutMenuType = 'horizontal'
          this.layoutMenuCollapse = false
        } else {
          this.layoutType = 'horizontal'
          this.layoutMenuType = 'vertical'
          this.layoutMenuCollapse = false
        }
      }
    },
  },
})
