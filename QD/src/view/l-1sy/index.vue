<template>
    <div class="blackbg">
        <div class="myrow" content-style="padding: 0;" :bordered="false">
            <raliway />
            <div class="tables">
                <n-space vertical>
                    <!-- <n-slider :min="200" :max="500" :step="100" style="max-width: 180px;" /> -->
                    <n-list>
                        <n-thing title="Thing" title-extra="extra" description="description"></n-thing>
                        <n-thing title="Thing" title-extra="extra" description="description"></n-thing>
                    </n-list>
                </n-space>
            </div>
        </div>
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
.blackbg {
    background-color: #404a59;
    width: 100%;
    height: 650px;
}
.tables {
    width: 40%;
}
.toum {
    background-color: rgba(255, 255, 255, 0);
}
</style>