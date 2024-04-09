<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['propSetting'])
const propSetting = props.propSetting
</script>
<template>
  <dl class="app-panel app-panel-bottom">
    <dt>
      <h3>Panel Bottom</h3>
      <div class="qs-button">
        <el-button plain @click="propSetting.appPanelBottom = !propSetting.appPanelBottom"><el-icon><Close /></el-icon></el-button>
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>