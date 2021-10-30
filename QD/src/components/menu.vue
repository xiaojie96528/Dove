<template>
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        <n-card line>
            <n-space style="align-items: center;">
                <n-avatar
                    round
                    :style="{
                        color: 'black',
                    }"
                >{{ txname }}</n-avatar>
                <span>CRH数据分析系统</span>
            </n-space>
        </n-card>
        <n-menu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :expand-icon="expandIcon"
            @update:value="handleUpdateValue"
        />
    </n-layout-sider>
</template>

<script lang="ts">
import { h, ref, defineComponent } from '@vue/runtime-core'
import { NIcon } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline, HomeOutline } from '@vicons/ionicons5'
import MaterialIcon from "@/icon/Material.vue"
import ProductIcon from "@/icon/Product.vue"
import Production from "@/icon/Production.vue"
import { useRouter } from "vue-router"
import { NAvatar } from 'naive-ui'
function renderIcon(icon: any) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
    {
        label: '首页',
        key: 'Workbench',
        icon: renderIcon(HomeOutline)
    },
    {
        label: '预警预测',
        key: 'MaterialManagement',
        icon: renderIcon(MaterialIcon)
    },
    {
        label: '辅助决策',
        key: 'Product',
        icon: renderIcon(ProductIcon)
    },
    {
        label: '应急资源',
        key: 'ProductionManagement',
        icon: renderIcon(Production)
    },
    {
        label: '自定义',
        key: 'zdy',
        icon: renderIcon(Production)
    },
]

export default defineComponent({
    components: {
        NAvatar
    },
    setup() {
        const router = useRouter()
        const handleUpdateValue = (key: any, item: any) => {
            router.replace({ name: key })
        }

        return {
            txname: ref('admin'),
            collapsed: ref(false),
            menuOptions,
            renderMenuLabel(option: any) {
                if ('href' in option) {
                    return h('a', { href: option.href, target: '_blank' }, option.label)
                }
                return option.label
            },
            renderMenuIcon(option: any) {
                // 渲染图标占位符以保持缩进
                if (option.key === 'sheep-man') return true
                // 返回 falsy 值，不再渲染图标及占位符
                if (option.key === 'food') return null
                return h(NIcon, null, { default: () => h(BookmarkOutline) })
            },
            expandIcon() {
                return h(NIcon, null, { default: () => h(CaretDownOutline) })
            },
            handleUpdateValue
        }
    }
})
</script>
<style scoped>
.ui-logo[data-v-67c0ad1a] {
    cursor: pointer;
    display: flex;
    font-size: 18px;
}
.ui-logo > img[data-v-67c0ad1a] {
    height: 50px;
    margin-right: 12px;
    width: 102px;
}
.n-text {
    transition: color 0.3s var(--bezier);
    color: var(--text-color);
    text-align: center;
}
</style>