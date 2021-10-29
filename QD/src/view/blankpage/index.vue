<template>
    <div class="bg-white">
        <n-row>
            <n-space></n-space>
        </n-row>
        <div class="mt-10"></div>
    </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    name: "blankpage",
    components: {},
    setup () {
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
