<script setup lang="ts">
const value = ref('');

const options = [
  {
    value: 'no element plus',
    label: 'no element plus',
  },
  {
    value: 'test',
    label: 'test',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
];
</script>

<template>
  <div>
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value" />
    </el-select>
  </div>
</template>
