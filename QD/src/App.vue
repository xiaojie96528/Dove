<template>
  <n-message-provider>
    <!-- <div>{{ states.loginStatus }}</div> -->
    <router-view></router-view>
  </n-message-provider>

  <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
    <template #footer>
      <n-button>找点乐子吧</n-button>
    </template>
  </n-result>
  <n-result status="403" title="403 禁止访问" description="总有些门是对你关闭的">
    <template #footer>
      <n-button>放轻松</n-button>
    </template>
  </n-result>
  <n-result status="500" title="500 服务器错误" description="服务器出错可能说明该雇更多程序员了">
    <template #footer>
      <n-button>散财消灾</n-button>
    </template>
  </n-result>
  <n-result status="success" title="成功" description="失败的孩子">
    <template #footer>
      <n-button>我喜欢</n-button>
    </template>
  </n-result>
  <n-result status="info" title="信息" description="在这个年代，信息就是金钱，金钱就是信息。">
    <template #footer>
      <n-button>我需要信息</n-button>
    </template>
  </n-result>
  <n-result status="warning" title="警告" description="在它变成错误以前一般不会有人管它">
    <template #footer>
      <n-button>听起来有那么点悲伤，哈哈哈</n-button>
    </template>
  </n-result>
  <n-result status="error" title="错误" description="它是红的">
    <template #footer>
      <n-button>还是离它远点吧</n-button>
    </template>
  </n-result>
</template>
<script>
import { defineComponent, reactive } from "@vue/runtime-core"
import { useRouter } from "vue-router"
export default defineComponent({
  setup () {
    const router = useRouter()
    const states = reactive({
      user: null,
    })
    return {
      states
    }
  }
})

</script>
<style>
* {
  padding: 0;
  margin: 0;
}
div {
  box-sizing: border-box;
}
.bg-white {
  background-color: white;
  padding: 10px;
}
.mt-10 {
  margin-top: 10px;
}
</style>
