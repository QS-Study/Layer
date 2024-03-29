<script setup lang="ts">
import text from '../../no-element-plus-text-layer/components/Text.vue'

interface ComponentProps {
    colSpacing: number
    rowSpacing: number
    span: number
    offset: number
    controls: any
}

const componentMap: any = {
    text
}

function getComponent(component: string) {
    return componentMap[component]
}

const props = defineProps<ComponentProps>()
</script>

<template>
    <div class="qs-component">
        <el-row :gutter="props.colSpacing" class="qs-form">
            <el-col
                v-for="control in props.controls"
                :key="control.controlId"
                :span="props.span"
                :offset="props.offset"
            >
            <Text />
            <Select />
            <component
                :is="getComponent(control.component)"
                :key="control.controlId"
                :col-spacing="props.colSpacing"
                :row-spacing="props.rowSpacing"
            />
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.qs-component {
    width: 100vw;
    height: 30vh;
}
</style>