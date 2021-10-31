<template>
    <div class="homepage-hero-module">
        <div class="video-container">
            <div :style="fixStyle" class="filter">
                <!--内容-->
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
import { defineComponent, reactive, onBeforeMount, onMounted, toRefs } from "@vue/runtime-core";

export default defineComponent({
    name: "Video",
    components: {},

    setup() {
        console.log('1-开始创建组件-setup')
        const data = reactive({
            vedioCanPlay: false,
            fixStyle: {}
        })
        const canplay = () => {
            data.vedioCanPlay = true
        }
        onBeforeMount(() => {
            console.log('2.组件挂载页面之前执行----onBeforeMount')
        })
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
            canplay,
            ...toRefs(data),
        }
    },
});
</script>

<style scoped>
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
