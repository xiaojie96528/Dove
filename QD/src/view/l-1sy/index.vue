<template>
    <div class="blackbg">
        <div class="myrow" content-style="padding: 0;" :bordered="false">
            <raliway />>
            <div
                class="rounded-md overflow-hidden bg-gradient-to-r bg-gray-600 p-2 mr-6 mt-4 mb-4 border-gray-900 border"
            >
                <table class="table-fixed rounded w-64">
                    <thead class="rounded">
                        <tr class="bg-gray-700">
                            <th class="w-1/2 px-2 py-1 text-gray-300">Title</th>
                            <th class="w-1/2 px-2 py-1 text-gray-300">Author</th>
                        </tr>
                    </thead>
                    <tbody class="rounded">
                        <tr class="transition hover:bg-gray-800">
                            <td class="px-4 py-2 text-gray-300 font-medium">Intro</td>
                            <td class="px-4 py-2 text-light-blue-600 font-medium">Adam</td>
                        </tr>
                        <tr class="transition hover:bg-gray-800">
                            <td class="px-4 py-2 text-light-blue-600 font-medium">A Long</td>
                            <td class="px-4 py-2 text-light-blue-600 font-medium">Adam</td>
                        </tr>
                        <tr class="transition hover:bg-gray-800">
                            <td class="px-4 py-2 text-light-blue-600 font-medium">Intro</td>
                            <td class="px-4 py-2 text-light-blue-600 font-medium">Chris</td>
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
/*边框公共样式*/
.border:before {
    content: "";
    position: absolute;
    width: 80%;
    height: 100%;
    bottom: -1px;
    top: -1px;
    left: 10%;
    border-bottom: 1px solid #007297;
    border-top: 1px solid #007297;
    transition: all 0.5s;
}
.border:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 80%;
    left: -1px;
    right: -1px;
    top: 10%;
    border-left: 1px solid #007297;
    border-right: 1px solid #007297;
    transition: all 0.5s;
}
.border:hover::before {
    width: 0%;
}
.border:hover::after {
    height: 0%;
}
.border:hover {
    box-shadow: -5px 0px 2px rgba(255, 255, 255, 0.1),
        /*左边阴影*/ 0px -5px 2px rgba(255, 255, 255, 0.1),
        /*上边阴影*/ 5px 0px 2px rgba(255, 255, 255, 0.1),
        /*右边阴影*/ 0px 5px 2px rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.1);
}
.border h4 {
    margin: 15px 0 5px 20px;
    color: #8adeff;
    line-height: 35px;
    font-size: 18px;
    font-weight: 500;
}
</style>