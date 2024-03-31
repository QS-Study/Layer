<script setup lang="ts">
import { AppLayout, AppNavbar, ColorModeSwitch } from '#components';

interface ComponentProps {
  colSpacing: number;
  rowSpacing: number;
  span: number;
  offset: number;
  controls: any;
}

const componentMap: any = {
  AppLayout,
  AppNavbar,
  ColorModeSwitch,
};

function getComponent(component: string) {
  return componentMap[component];
}

const props = defineProps<ComponentProps>();
</script>

<template>
  <div class="qs-component">
    <el-row :gutter="props.colSpacing" class="qs-form">
      <el-col
        v-for="control in props.controls"
        :key="control.controlId"
        :span="props.span"
        :offset="props.offset">
        <vQSText />
        <Select />
        <component
          :is="ColorModeSwitch"
          :key="control.controlId"
          :col-spacing="props.colSpacing"
          :row-spacing="props.rowSpacing" />
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.qs-component {
  width: 500px;
  height: 200px;
  border: 1px solid red;
}
</style>
