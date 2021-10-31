declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
