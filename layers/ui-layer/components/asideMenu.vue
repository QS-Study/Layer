<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import menuItem from '@/components/asideMenuItem.vue'

const props = defineProps(['propSetting'])
const propSetting = props.propSetting
// const activeIndex = ref([0, 1])

const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
} 
</script>

<template>
  <div class="layout-menu">
    <el-scrollbar wrap-class="layout-menu-scroll">
      <el-menu 
        :mode="propSetting.layoutMenuType" 
        :collapse="propSetting.layoutMenuCollapse" 
        :collapse-transition=false
        :unique-opened=true
        :router="true"
        teleported=true
        @select="handleSelect"
      >        
        <template v-for="rootMenus in propSetting.menuList" :key="rootMenus">
          <el-sub-menu 
            v-if="!rootMenus.hidden && rootMenus.menus.length > 0"
            :index="rootMenus.id"
            popper-class="menu-popper"
            :popper-offset=1
          >
            <template #title>
              <font-awesome-icon :icon="['fas', rootMenus.icon]" v-if="rootMenus.icon !== ''" />
              <span class="menu-title">{{ rootMenus.title }}</span>
            </template>
            <el-menu-item-group>
              <template v-for="submenus in rootMenus.menus" :key="submenus">
                <menuItem :submenus="submenus" />
              </template>
            </el-menu-item-group>
          </el-sub-menu>

          <el-menu-item 
            v-else-if="!rootMenus.hidden"
            :index="rootMenus.id"
            :route="rootMenus.path"
          >
            <font-awesome-icon :icon="['fas', rootMenus.icon]" v-if="rootMenus.icon !== ''" />
            <span class="menu-title">{{ rootMenus.title }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>