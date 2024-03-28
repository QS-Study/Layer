<script setup lang="ts"></script>

<template>
  <div>
    <!-- no-element-plus-select-layer component/Select.vue -->
    <Select />

    <!-- 아래 코드는 동작하지 않는 코드. Layer Project 이름으로 import는 안 됨. (no-element-plus-text-layer의 app.vue에 Text 컴포넌트를 넣었으나 import되지 않았음) -->
    <!-- <NoElementPlusTextLayer /> -->
    <!-- 위 코드 주석 해제 시 경고 [Vue warn]: Failed to resolve component: NoElementPlusTextLayer
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. -->

    <!-- no-element-plus-text-layer의 components/Text.vue -->
    <Text />
  </div>
</template>
