<template>
    <div>
        <!-- <VisiTab /> -->
        <raliway />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, onMounted, toRefs } from "@vue/runtime-core";

import VisiTab from '@/components/charts/VisiTab.vue';
import raliway from '@/components/charts/VisiTabraliway.vue'

export default defineComponent({
    name: "workbench",
    components: { VisiTab, raliway },
    setup() {
        console.log('1-开始创建组件-setup')
        const data = reactive({})
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
        })
        return {
            ...toRefs(data),
        }
    },
});
</script>

<style>
</style>