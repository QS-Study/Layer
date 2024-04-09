<script lang="ts" setup>
import {useBaseComponent} from '@/composables'

interface vQSFormProps {
  componentId: string
  screenId: string
}


const props = defineProps<vQSFormProps>()

const {

} = useBaseComponent<QSFormProp, any>(props.screenId, props.componentId)

debugger


</script>

<template>
  <div class="qs-component">
    <el-row class="qs-screen-row default" :gutter="10" style="grid-template-rows: repeat(24, 1fr);grid-template-columns: repeat(24, 1fr);">
      <el-col
        v-for="(control, index) in props.controls"
        :key="control.controlId"
        class="qs-screen-col" 
        style="grid-area: span 24 / span 24;"
      >
        <component
          :is="control.component"
        />   
      </el-col>
    </el-row>
  </div>



</template>