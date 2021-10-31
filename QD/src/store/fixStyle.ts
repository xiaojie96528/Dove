import { reactive } from 'vue'
import { IStore } from '@/store'

declare interface FixStyle {
  height: string

  width: string

  'margin-bottom': string

  'margin-left': string
}
// 使用Vue3提供的reactive方法，将一个普通对象包装成响应式的
const state: FixStyle = reactive({
  height: '',

  width: '',

  'margin-bottom': '',

  'margin-left': ''
})
const store: IStore<FixStyle> = {
  persistedState: true,
  state: state
}
export default store
export { state, FixStyle }
