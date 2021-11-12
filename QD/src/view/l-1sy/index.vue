<template>
    <div class="witebg">
        <router-link to="/sy">进入大屏</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onBeforeMount, onMounted, toRefs, h, ref } from "@vue/runtime-core";

import VisiTab from '@/components/charts/VisiTab.vue';
import raliway from '@/components/charts/raliway.vue'
export default defineComponent({
    name: "l-1sy",
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
.myrow {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}
.witebg {
    background-color: #f3f3f3;
    width: 100%;
    height: 600px;
}
.tables {
    width: 40%;
}
.toum {
    background-color: rgba(255, 255, 255, 0);
}
</style>