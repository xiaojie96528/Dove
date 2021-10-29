<template>
    <layout />
</template>
<script>
import { useRouter } from "vue-router"
import { defineComponent, onBeforeMount, onBeforeUpdate } from "@vue/runtime-core"
import Layout from "../../layout/index.vue"
export default defineComponent({
    components: {
        Layout
    },
    setup () {
        const router = useRouter()
        onBeforeMount(() => {
            // if (!states.loginStatus) {
            //     router.replace({ name: "Login" })
            // }
        })

    }
})
</script>

<style>
</style>