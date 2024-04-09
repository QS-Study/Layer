<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useScreenStore } from '~/stores/screen'

const screenStore = useScreenStore()


const screen = screenStore.screen

const layout = screen.layout

</script>

<template>
  <div>
    <component :is="layout" :screen-id="screen?.screenId" />
  </div>
</template>
