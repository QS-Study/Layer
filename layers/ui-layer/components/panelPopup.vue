<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['propSetting'])
const propSetting = props.propSetting
</script>

<template>
  <dl class="app-panel app-panel-popup">
    <dt>
      <h3>Panel Popup</h3>
      <div class="qs-button">
        <el-button plain @click="propSetting.appPanelPopup = !propSetting.appPanelPopup"><el-icon><Close /></el-icon></el-button>
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>

<style lang="scss" scoped></style>