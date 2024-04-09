<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['propSetting'])
const propSetting = props.propSetting
</script>

<template>
  <div class="aside-banner" v-if="propSetting.asideBanner.use">
    <!-- <el-image :src="propSetting.asideBanner.src" :alt="propSetting.asideBanner.alt" /> -->
  </div>
</template>