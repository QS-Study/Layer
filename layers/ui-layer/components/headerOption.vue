<script setup lang="ts">
import { ref, defineProps } from 'vue'

const props = defineProps(['propSetting'])
const propSetting = props.propSetting
const sidemapVisible = ref(false)
</script>

<template>
  <div class="header-option">    

    <!-- Expand -->
    <div class="header-option__icon" v-if="propSetting.headerOptionMainExpand">
      <el-button class="btn-main-expand" @click="propSetting.layoutMainExpand = true">
        <font-awesome-icon :icon="['fas', 'maximize']" />
      </el-button>
    </div>

    <!-- Badge -->
    <el-popover 
      v-if="propSetting.headerOptionotification.use"
      placement="bottom" 
      title="알림 메세지" 
      width="25%" 
      trigger="click" 
      content=""
    >
      <template #reference>
          <el-badge :value="100">
            <div class="header-option__icon">
              <el-button><font-awesome-icon :icon="['fas', 'bell']" /></el-button>
            </div>
          </el-badge>
      </template>
    </el-popover>

    <!-- Sitemap -->
    <div class="header-option__icon" v-if="propSetting.headerOptionSiteMap">
      <el-button @click="sidemapVisible = true"><font-awesome-icon :icon="['fas', 'sitemap']" /></el-button>
    </div>
    <el-dialog
      v-model="sidemapVisible"
      title="Site Map"
      width="90%"
      align-center
      :append-to-body="true"
    >    
    </el-dialog>

    <!-- Info -->
    <el-dropdown trigger="click" v-if="propSetting.headerOptionAppInfo.use">
      <div class="header-option__icon">
        <el-button><font-awesome-icon :icon="['fas', 'gear']" /></el-button>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in propSetting.headerOptionAppInfo.activeItem" :key="item">{{ item }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- Language -->
    <el-dropdown trigger="click" v-if="propSetting.headerOptionLanguage.use">
      <div class="header-option__icon">
        <el-button><font-awesome-icon :icon="['fas', 'globe']" /></el-button>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in propSetting.headerOptionLanguage.activeItem" :key="item">{{ item }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- Avatar -->
    <el-dropdown trigger="click">
      <div class="header-option__icon">
        <el-button circle>
          <font-awesome-icon :icon="['fas', 'user']" />
        </el-button>
        <span class="user-name">Education Studio</span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>education_admin@quintet.co.kr</el-dropdown-item>
          <el-dropdown-item>v0.0.181</el-dropdown-item>
          <el-dropdown-item><strong>IP</strong>211.254.156.170</el-dropdown-item>
          <el-dropdown-item><strong>최근접속</strong>2024-02-17 09:11:45</el-dropdown-item>
          <el-dropdown-item>로그아웃</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- Header Banner -->
    <div class="header-banner" v-if="propSetting.headerBanner.use" :use-header-banner="propSetting.headerBanner">
      <!-- <el-image :src="propSetting.headerBanner.src" :alt="propSetting.headerBanner.alt" /> -->
    </div>
  </div>
</template>