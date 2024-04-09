<script lang="ts" setup>
import { ref, reactive, defineProps } from 'vue'

interface vQSTextareaProps {
  controlData: Control
}

interface Control {
  readonly: boolean
  data?: any
  disabled: boolean
  required: boolean
}

const props = withDefaults(defineProps<vQSTextareaProps>(), {
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
    :label-width="controlData.labelWidth" 
    :label-position="controlData.labelPosition"
    :disabled="controlData.disabled"
    class="qs-control"
    :class="{'hide-control' : controlData.hide}"
  >
    <el-form-item 
      class="qs-control-item"
      :label="controlData.label?.label" 
      :required="controlData.required"
      :style="[
        // controlData.label?.align ? `text-align: ${controlData.label.align};`:'', 
        // controlData.label?.bold ? `font-weight: bold;`:'', 
        // controlData.label?.italic ? `font-style: italic;`:'',
        // controlData.label?.color !== '' ? `color: ${controlData.label.color};`:'',
        // controlData.label?.bgColor !== '' ? `background-color: ${controlData.label.bgColor};`:''
      ]"
    >
      <div class="qs-control-data">
        <el-input v-model="controlData.data.value" :rows="4" type="textarea" placeholder="Please input" :disabled="controlData.disabled" />
      </div>
    </el-form-item>
  </el-form>
</template>