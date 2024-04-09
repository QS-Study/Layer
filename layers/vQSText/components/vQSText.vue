<script lang="ts" setup>
import { ref, reactive, defineProps } from 'vue'

interface vQSTextProps {
  controlData: Control
}

interface Control {
  readonly: boolean
  data?: any
  disabled: boolean
  required: boolean
}

const props = withDefaults(defineProps<vQSTextProps>(), {
  controlData: {
    readonly: false,
    disabled: false,
    required: true,
    data: ''
  }
})


const controlData = reactive(props.controlData)

</script>

<template>
  <el-form 
    :disabled="controlData.disabled"
    class="qs-control"
  >
    <el-form-item 
      class="qs-control-item" 
      :required="controlData.required"
    >
      <div class="qs-control-data">
        <el-input
          v-model="controlData.data.value" 
          :readonly="controlData.readonly"
          :style="controlData.data.bgColor !== '' ? `background-color: ${controlData.data.bgColor}` : `background-color: white`"
          :input-style="[
            controlData.data.align ? `text-align: ${controlData.data.align};`:'', 
            controlData.data.bold ? `font-weight: bold;`:'', 
            controlData.data.italic ? `font-style: italic;`:'',
            controlData.data.color !== '' ? `color: ${controlData.data.color};`:''
          ]"
        />
      </div>
    </el-form-item>
  </el-form>
</template>

<!-- <template>
    <div>
      <el-text class="mx-1" type="danger">Text Layer</el-text>
    </div>
  </template>
   -->