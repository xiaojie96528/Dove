<template>
    <div class="blackbg">
        <div class="myrow" content-style="padding: 0;" :bordered="false">
            <raliway />
            <div
                class="rounded-md overflow-hidden bg-gradient-to-r bg-gray-600 p-2 mr-6 mt-4 mb-4 border-gray-900 border"
            >
                <table class="table-fixed rounded w-64">
                    <thead class="rounded">
                        <tr class="bg-gray-700">
                            <th class="w-1/2 px-2 py-1 text-gray-300">车次</th>
                            <th class="w-1/2 px-2 py-1 text-gray-300">交路</th>
                        </tr>
                    </thead>
                    <tbody class="rounded">
                        <tr class="transition hover:bg-gray-500">
                            <td class="px-4 py-2 text-black-200 font-medium">D2331</td>
                            <td class="px-4 py-2 text-black-200 font-medium">福州</td>
                        </tr>
                        <tr class="transition hover:bg-gray-500">
                            <td class="px-4 py-2 text-black-200 font-medium">D2331</td>
                            <td class="px-4 py-2 text-black-200 font-medium">福州</td>
                        </tr>
                        <tr class="transition hover:bg-gray-500">
                            <td class="px-4 py-2 text-black-200 font-medium">D2331</td>
                            <td class="px-4 py-2 text-black-200 font-medium">福州</td>
                        </tr>
                    </tbody>
                </table>
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