<script lang="ts" setup>

import { SettingAppStore } from '@/stores/settingApp'
// import metaData from '@/config/metaDataSample.json'
// import { useMetaStore } from '@/stores/meta'

const SettingApp = SettingAppStore()

// const metaStore = useMetaStore()


// metaStore.setUserData(metaData.data)


</script>

<template>
  <div class="app-layout">
    <div class="layout-container" 
      :layout-type="SettingApp.layoutType"
      :layout-menu-collapse="SettingApp.layoutMenuCollapse"
      :layout-main-expand="SettingApp.layoutMainExpand"
    >
      
      <div class="layout-header">
        <headerInfo :propSetting = "SettingApp" />
        <headerOption :propSetting = "SettingApp" />
      </div>
      
      <div class="layout-aside" :use-side-banner="SettingApp.asideBanner.use">
        <asideMenu :propSetting = "SettingApp" />
        <asideBanner :propSetting = "SettingApp" />
      </div>

      <el-scrollbar class="layout-tags" style="height: 40px;">
        <tags :propSetting = "SettingApp" />
      </el-scrollbar>

      <main class="layout-main">
        <el-button class="btn-main-reduce" v-if="SettingApp.headerOptionMainExpand" @click="SettingApp.layoutMainExpand = false">
          <font-awesome-icon :icon="['fas', 'minimize']" />
        </el-button>

        <el-scrollbar view-class="qs-screen">
          <slot />
        </el-scrollbar>

      </main>
    </div>

    <panelPopup v-if="SettingApp.panelPopup" :propSetting = "SettingApp" />
    <panelRight v-if="SettingApp.panelRight" :propSetting = "SettingApp" />
    <panelBottom v-if="SettingApp.panelBottom" :propSetting = "SettingApp" />
  </div>  
</template>
<style lang="scss" scoped></style>