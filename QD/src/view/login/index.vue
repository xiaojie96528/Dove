<template>
    <div class="homepage-hero-module">
        <div class="video-container">
            <div :style="fixStyle" class="filter">
                <div class="login-page">
                    <div class="login-warp">
                        <div class="centered">
                            <img src="@/assets/logo.png" class="login-logo" alt="CRH数据分析系统" />
                        </div>
                        <div style="text-align:center">
                            <n-h1 prefix="bar" align-text type="primary">
                                <n-text type="primary">CRH数据分析系统</n-text>
                            </n-h1>
                        </div>
                        <n-form :model="model" ref="formRef" :size="size" :rules="rules">
                            <n-form-item path="username" label="账号">
                                <n-input
                                    v-model:value="model.username"
                                    placeholder="请输入账号"
                                    :size="size"
                                />
                            </n-form-item>
                            <n-form-item path="password" label="密码">
                                <n-input
                                    v-model:value="model.password"
                                    placeholder="请输入密码"
                                    type="password"
                                    show-password-on="mousedown"
                                    :size="size"
                                    :maxlength="20"
                                />
                            </n-form-item>
                            <n-row :gutter="[0, 24]">
                                <n-col :span="24">
                                    <div style="display: flex; justify-content: flex-end;">
                                        <n-button
                                            round
                                            type="primary"
                                            @click="doSubmit"
                                            block
                                            :size="size"
                                            :loading="loading"
                                        >登录</n-button>
                                    </div>
                                </n-col>
                            </n-row>
                        </n-form>
                    </div>
                </div>
            </div>
            <video :style="fixStyle" autoplay loop muted class="fillWidth" v-on:canplay="canplay">
                <source src="@/assets/login.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            </video>
            <div class="poster hidden" v-if="!vedioCanPlay">
                <img :style="fixStyle" src="@/assets/bg.jpg" alt="浏览器不支持 video 标签，建议升级浏览器。" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, onBeforeMount, onMounted, toRefs, ref, toRaw } from "@vue/runtime-core";
import { useMessage } from 'naive-ui'
import { useRouter } from "vue-router"
import { loginReq } from '@/api/user'


export default defineComponent({
    name: "Login",
    components: {},
    setup() {
        const formRef = ref()
        const data = reactive({
            username: "",
            password: "",
            vedioCanPlay: false,
            fixStyle: {}
        })
        const canplay = () => {
            data.vedioCanPlay = true
        }
        const message = useMessage()
        const loading = ref(false)
        const router = useRouter()
        const doSubmit = () => {
            loading.value = true
            loginReq(toRaw(data))
                .then((res) => {
                    loading.value = false
                    if (res.data.code == 200) {
                        message.success("登录成功！")
                        localStorage.setItem("loginstatus", "1");
                        router.push({ name: 'Admin' })
                    } else {
                        message.error(res.data.msg)
                    }
                })
                .catch(error => console.error(error))



        }
        onMounted(() => {
            console.log('3.-组件挂载到页面之后执行-------onMounted')
            window.onresize = function () {
                const windowWidth = document.body.clientWidth
                const windowHeight = document.body.clientHeight
                const windowAspectRatio = windowHeight / windowWidth
                let videoWidth
                let videoHeight
                if (windowAspectRatio < 0.5625) {
                    videoWidth = windowWidth
                    videoHeight = videoWidth * 0.5625
                    data.fixStyle = {
                        height: windowWidth * 0.5625 + 'px',
                        width: windowWidth + 'px',
                        'margin-bottom': (windowHeight - videoHeight) / 2 + 'px',
                        'margin-left': 'initial'
                    }
                } else {
                    videoHeight = windowHeight
                    videoWidth = videoHeight / 0.5625
                    data.fixStyle = {
                        height: windowHeight + 'px',
                        width: windowHeight / 0.5625 + 'px',
                        'margin-left': (windowWidth - videoWidth) / 2 + 'px',
                        'margin-bottom': 'initial'
                    }
                }
            }
        })
        return {
            formRef,
            model: data,
            size: "large",
            rules: {
                username: {
                    required: true,
                    message: '请输入账号！',
                    trigger: 'blur'
                },
                password: {
                    required: true,
                    message: '请输入密码！',
                    trigger: ['input', 'blur']
                }
            },
            canplay,
            doSubmit,
            loading,
            ...toRefs(data)
        }
    }
})
</script>

<style scoped>

.login-page {
    width: 100vw;
    height: 100vh;
    padding-top: 150px;
    box-sizing: border-box;
    /* background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%); */
}
.login-warp {
    width: 400px;
    height: auto;
    margin: 0 auto;
    background-color: rgb(226, 236, 255);
    border-radius: 10px;
    padding: 30px;
}
.login-logo {
    width: 102px;
    height: 50px;
}
.homepage-hero-module,
.video-container {
    position: relative;
    height: 100vh;
    overflow: hidden;
}

.video-container .poster img {
    z-index: 0;
    position: absolute;
}

.video-container .filter {
    z-index: 1;
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
}

.fillWidth {
    width: 100%;
}
</style>