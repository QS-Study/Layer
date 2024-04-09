<template>
  <div>
    {{ serverLayer }}
  </div>
</template>

<script setup lang="ts">
const { data: serverLayer } = await useFetch('/api/hello');
</script>
