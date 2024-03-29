<script setup lang="ts">
import { ColorModeSwitch } from '#components';

const formProps = {
  colSpacing: 24,
  rowSpacing: 24,
  span: 24,
  offset: 1,
  controls: [
    {
      controlId: '123123',
      component: 'AppNavbar',
    },
  ],
};

const componentMap: any = {
  ColorModeSwitch,
};

function getComponent(component: string) {
  return componentMap[component];
}

// const dynamicComponent = resolveComponent(getComponent('ColorModeSwitch'));
</script>

<template>
  <div>
    <span>vQSForm</span>
    <vQSForm v-bind="formProps" />
    <!-- no-element-plus-select-layer component/Select.vue -->
    <span>-----</span>
    <!-- <Select /> -->

    <!-- 아래 코드는 동작하지 않는 코드. Layer Project 이름으로 import는 안 됨. (no-element-plus-text-layer의 app.vue에 Text 컴포넌트를 넣었으나 import되지 않았음) -->
    <!-- <NoElementPlusTextLayer /> -->
    <!-- 위 코드 주석 해제 시 경고 [Vue warn]: Failed to resolve component: NoElementPlusTextLayer
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->

    <!-- no-element-plus-text-layer의 components/Text.vue -->
    <!-- <VQSText /> -->
    <ColorModeSwitch />
    <span>-----</span><br />
    <component :is="ColorModeSwitch" /><br />
    <component :is="getComponent('ColorModeSwitch')" />
  </div>
</template>
