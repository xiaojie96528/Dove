// src/store/index.ts
import { App, watch } from 'vue'
import UserStore from './UserStore'
import FixStyle from './fixStyle'
/**
 * IStore接口，所有Store都必须实现这个接口才能注册
 */
declare interface IStore<State> {
  /**
   * 是否开启持久化
   */
  persistedState: boolean
  /**
   * State
   */
  state: State
}
/**
 * 待注册的store，类似于vuex中的module
 */
const Stores: Record<string, IStore<any>> = { UserStore, FixStyle }
/**
 * 用于安装vue插件的方法，需要在main.ts里导入并调用app.use()才可以集成store
 * @param app Vue实例
 */
const store = (app: App) => {
  // 遍历所有Store
  const keys = Stores && Object.keys(Stores)
  keys &&
    keys.forEach((item: string) => {
      // 注入
      app.provide(item, Stores[item].state)
      // 持久化处理
      if (Stores[item].persistedState) {
        // 读取sessionStorage的值
        const storageState = JSON.parse(sessionStorage.getItem(item) || '{}')
        for (const key in storageState) {
          Stores[item].state[key] = storageState[key]
        }
        // 监听值变化，保存到sessionStorage
        watch(
          () => Stores[item].state,
          () => {
            sessionStorage.setItem(item, JSON.stringify(Stores[item].state))
          },
          { deep: true }
        )
      }
    })
}

export default store
export { IStore }
