<script lang="ts" setup>
import useBaseScreen from '~/composables/useBaseScreen'
import {VQSForm as vqsform, VQSText as vqstext} from '#components'

interface ScreenProp {
  screenId: string
}

const props = defineProps<ScreenProp>()

const { components, uiType, screen } = useBaseScreen(
  props.screenId
)

function toPascalCase(str: string): string {
  return str.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase())
}
</script>

<template>
  <div :ui-type="uiType" :screen-id="props.screenId" :screen-master-id="screen?.screenMasterId">
    <el-row class="qs-card-panel">
      <el-col class="qs-card-panel__col">
          <template v-for="component in components" :key="component.componentId">
            <div v-if="component.enabled" class="qs-card-panel__item">
              <div>
                <!-- <component
                  :is="toPascalCase(component.component)"
                  :key="component.groupIndex"
                  :component-id="component.componentId"
                  :screen-id="props.screenId"
                /> -->
                <vqsform :key="component.groupIndex"  :component-id="component.componentId"
                  :screen-id="props.screenId" />
              </div>
            </div>
          </template>
      </el-col>
    </el-row>
  </div>
</template>
