import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import {
  // create naive ui
  create,
  // component
  NButton,
  NLayout,
  NLayoutSider,
  NLayoutContent,
  NLayoutFooter,
  NLayoutHeader,
  NSpace,
  NSwitch,
  NMenu,
  NIcon,
  NForm,
  NRow,
  NCol,
  NFormItem,
  NInput,
  NH1,
  NText,
  NMessageProvider,
  NDataTable,
  NDrawer,
  NDrawerContent,
  NInputGroup,
  NInputNumber,
  NModal,
  NCard,
  NTooltip,
  NSelect,
  NResult
} from 'naive-ui'
const naive = create({
  components: [
    NButton,
    NLayout,
    NLayoutSider,
    NLayoutContent,
    NLayoutFooter,
    NLayoutHeader,
    NSpace,
    NSwitch,
    NMenu,
    NIcon,
    NForm,
    NRow,
    NCol,
    NFormItem,
    NInput,
    NH1,
    NText,
    NMessageProvider,
    NDataTable,
    NDrawer,
    NDrawerContent,
    NInputGroup,
    NInputNumber,
    NModal,
    NCard,
    NTooltip,
    NSelect,
    NResult
  ]
})

createApp(App).use(naive).use(router).use(store).mount('#app')
