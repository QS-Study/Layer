<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['propSetting'])
const tags = props.propSetting.tagsList
</script>

<template>  
  <div class="tags-group">
    <el-tag v-for="tag in tags" :key="tag" :disable-transitions=true closable>
      <RouterLink :to="`${tag.path}`">{{ tag.title }}</RouterLink>
    </el-tag>
  </div>
</template>