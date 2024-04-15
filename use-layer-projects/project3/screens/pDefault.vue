<script lang="ts" setup>
import useBaseScreen from '~/composables/useBaseScreen'
import { VQSForm as vQSForm } from '#components'
import {cloneDeep} from 'lodash'

interface ScreenProp {
  screenId: string
}

const props = defineProps<ScreenProp>()

const { components, uiType, screen } = useBaseScreen(
  props.screenId
)

// function toPascalCase(str: string): string {
//   return str.replace(/(\w)(\w*)/g, (_, first, rest) => first.toUpperCase() + rest.toLowerCase())
// }

const _components = ref([]) 

const enabledComponents = {'vQSForm': vQSForm }

const componentsFactory = () => {
  const items = components.value.map((item) => 
    {
      const imsi = cloneDeep(item)

      if (Object.keys(enabledComponents).includes(item.component)) {
        imsi.component = enabledComponents[item.component]
      }
      return imsi
    })
  _components.value = items
}

componentsFactory()



</script>

<template>
  <div :ui-type="uiType" :screen-id="props.screenId" :screen-master-id="screen?.screenMasterId">
    <el-row class="qs-card-panel">
      <el-col class="qs-card-panel__col">
          <template v-for="component in _components" :key="component.componentId">
            <div v-if="component.enabled" class="qs-card-panel__item">
              <div>
                <component
                  :is="component.component"
                  :key="component.groupIndex"
                  :component-id="component.componentId"
                  :screen-id="props.screenId"
                  :controls="component.controls"
                />
                <!-- <vqsform :key="component.groupIndex"  :component-id="component.componentId"
                  :screen-id="props.screenId" :controls="component.controls" /> -->
              </div>
            </div>
          </template>
      </el-col>
    </el-row>
  </div>
</template>
