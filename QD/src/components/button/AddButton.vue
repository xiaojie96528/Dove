<template>
    <n-button type="primary">
        <template #icon>
            <add></add>
        </template>
        新增
    </n-button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import Add from "../../icon/Add.vue"
export default defineComponent({
    name: "AddButton",
    components: {
        Add
    },
})
</script>

<style>
</style>