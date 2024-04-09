<script lang="ts" setup>
import { ref, reactive, defineProps } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
const props = defineProps(['propSetting'])
const propSetting = reactive(props.propSetting)
</script>

<template>
  <div class="btn-toggle-menu" @click="propSetting.layoutMenuCollapse = !propSetting.layoutMenuCollapse">
    <el-button><font-awesome-icon :icon="['fas', 'bars']" /></el-button>
  </div>

  <h1 class="header-logo">
    <RouterLink to="/">
      <!-- <el-image :src="propSetting.layoutLogoInfo.src" :alt="propSetting.layoutLogoInfo.alt" /> -->
      <!-- <img :src="propSetting.layoutLogoInfo.src" :alt="propSetting.layoutLogoInfo.alt" /> -->
    </RouterLink>
  </h1>

  <div class="header-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item>
        <RouterLink :to="{ path: '/' }">Home</RouterLink>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <RouterLink :to="{ path: '/' }">Main</RouterLink>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>