<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import menuItem from '@/components/asideMenuItem.vue'

const props = defineProps(['submenus'])
const menu = props.submenus
</script>

<template>
  <el-sub-menu
    v-if="!menu.hidden && menu.menus.length > 0"
    :index="menu.id"
    popper-class="menu-popper"
    :popper-offset=1
  >      
    <template #title>
      <font-awesome-icon :icon="['fas', menu.icon]" v-if="menu.icon !== ''" />
      <span class="menu-title">{{ menu.title }}</span>
    </template>    
    <template v-for="submenus in menu.menus" :key="submenus">
      <menuItem :submenus="submenus" />
    </template>
  </el-sub-menu>
  <el-menu-item
    v-else-if="!menu.hidden"
    :index="menu.id"
    :route="menu.path"
  >
    <font-awesome-icon :icon="['fas', menu.icon]"  v-if="menu.icon !== ''"/>
    <span class="menu-title">{{ menu.title }}</span>
  </el-menu-item>
</template>