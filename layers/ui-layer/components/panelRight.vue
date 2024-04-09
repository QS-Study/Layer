<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps(['propSetting'])
const propSetting = props.propSetting
</script>

<template>
  <dl class="app-panel app-panel-right">
    <dt>
      <h3>Panel Right</h3>
      <div class="qs-button">
        <el-button plain @click="propSetting.panelRight = !propSetting.panelRight"><el-icon><Close /></el-icon></el-button>
      </div>
    </dt>
    <dd></dd>
  </dl>
</template>

<style lang="scss" scoped></style>