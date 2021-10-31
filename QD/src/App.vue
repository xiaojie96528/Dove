<template>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/runtime-core"
import { useRouter } from "vue-router"

export default defineComponent({
  name: "App",
  setup() {
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
