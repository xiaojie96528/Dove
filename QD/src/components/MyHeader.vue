<template>
  <!-- <n-grid>

  </n-grid>-->
  <div class="header-warp">
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      mode="horizontal"
      :options="menuOptions"
      :render-label="renderMenuLabel"
      :expand-icon="expandIcon"
      @update:value="handleUpdateValue"
    />
    <div class="header-item" style="flex-direction: row">
      <n-switch v-model:value="disabled" @update:value="handleChange" />
      <div>{{ smodle }}</div>
    </div>
    <div class="header-item" @click="logout">
      <logout-icon class="header-icon" />
      <div>注销</div>
    </div>
  </div>
</template>
<script lang="ts">
import LogoutIcon from "@/icon/Logout.vue"
import yjzhIcon from '@/icon/yjzh.vue'
import ddglIcon from '@/icon/ddgl.vue'
import jxglIcon from '@/icon/jxgl.vue'
import yyglIcon from '@/icon/yygl.vue'
import zlglIcon from '@/icon/zlgl.vue'
import jsglIcon from '@/icon/jsgl.vue'
import wzglIcon from '@/icon/wzgl.vue'
import settingIcon from '@/icon/setting.vue'
import { BookmarkOutline, CaretDownOutline, HomeOutline } from '@vicons/ionicons5'
import { defineComponent, h, ref, reactive, toRefs } from '@vue/runtime-core'
import { NIcon } from 'naive-ui'
import {
  WineOutline as WineIcon,
} from '@vicons/ionicons5'
import { useRouter } from "vue-router"
import { post } from '@/api/user'


function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export default defineComponent({

  components: {
    LogoutIcon
  },
  setup() {
    const router = useRouter()
    const handleUpdateValue = (key: any, item: any) => {
      router.replace({ name: key })
    }
    const menuOptions = [
      {
        label: '应急指挥',
        key: 'dance-dance-dance',
        icon: renderIcon(yjzhIcon),
      },
      {
        label: '调度管理',
        key: 'dance-dance-dance',
        icon: renderIcon(ddglIcon),
      },
      {
        label: '检修管理',
        key: 'dance-dance-dance',
        icon: renderIcon(jxglIcon),
      },
      {
        label: '运用管理',
        key: 'dance-dance-dance',
        icon: renderIcon(yyglIcon),
      },
      {
        label: '质量管理',
        key: 'dance-dance-dance',
        icon: renderIcon(zlglIcon),
      },
      {
        label: '技术管理',
        key: 'dance-dance-dance',
        icon: renderIcon(jsglIcon),
      },
      {
        label: '物资管理',
        key: 'dance-dance-dance',
        icon: renderIcon(wzglIcon),
        children: [
          {
            label: '测试',
            key: 'beverage3',
            icon: renderIcon(WineIcon),
          }, {
            label: '测试2',
            key: 'beverage4',
            icon: renderIcon(WineIcon),
          },
        ]
      },
      {
        label: '设置',
        key: 'dance-dance-dance',
        icon: renderIcon(settingIcon),
        children: [
          {
            label: '测试3',
            key: 'beverage1',
            icon: renderIcon(WineIcon),
          },
          {
            label: '测试4',
            key: 'beverage2',
            icon: renderIcon(WineIcon),
          },
        ]
      }
    ]
    const logout = () => {

      post("api/user/logout", {})
        .then((data: any) => {
          console.log(data)
        })
        .catch((error: any) => {
          console.error(error)
        })


      localStorage.setItem("loginstatus", "0");
      router.replace({ name: 'L' })


    }

    const data = reactive({
      smodle: "浅色"
    })
    return {
      ...toRefs(data),
      disabled: ref(false),
      handleChange(e: boolean) {
        if (e) {
          data.smodle = "深色"
        }
        else {
          data.smodle = "浅色"
        }
      },
      logout,
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

<style>
.header-icon {
  font-size: 20px;
  color: #ff0033;
}
.header-item {
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  float: right;
}
.header-item:hover {
  background-color: #f8f8f9;
}
.header-warp {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>