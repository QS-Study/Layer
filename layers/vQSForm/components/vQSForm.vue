<script lang="ts" setup>
// import {useBaseComponent} from '@/composables'
// import { useBaseComponent } from '#imports'
import { VQSText as vQSText, VQSTextarea as vQSTextarea } from '#components'
import {cloneDeep} from 'lodash'

interface vQSFormProps {
  componentId: string
  screenId: string
  controls: any
}


const props = defineProps<vQSFormProps>()

const enabledControls = {'vQSText': vQSText, 'vQSTextarea': vQSTextarea }

const _controls = ref([]) 

// const {
//   component,
//   controls
// } = useBaseComponent<vQSFormProps, any>(props.screenId, props.componentId)

const controlsFactory = () => {
  const items = props.controls.map((item) => 
    {
      const imsi = cloneDeep(item)

      if (Object.keys(enabledControls).includes(item.component)) {
        imsi.component = enabledControls[item.component]
      }
      
      return imsi
    })
  _controls.value = items
}

controlsFactory()

</script>

<template>
  <div class="qs-component">
    <el-row class="qs-screen-row default" :gutter="10" style="grid-template-rows: repeat(24, 1fr);grid-template-columns: repeat(24, 1fr);">
      <el-col
        v-for="(control, index) in _controls"
        :key="control.controlId"
        class="qs-screen-col" 
        style="grid-area: span 24 / span 24;"
      >
        <component
          :is="control.component"
          :contorl="control"
        />   
      </el-col>
    </el-row>
  </div>



</template>