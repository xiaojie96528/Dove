<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, Ref, reactive, unref } from 'vue';
import { fullProps } from './props';
import { LinesChart, LinesSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import * as echarts from 'echarts/core';
import axios from 'axios';
import tarin from '@/icon/jxgl.vue';
export default defineComponent({

  props: fullProps,
  setup() {
    const chartRef = ref<HTMLElement>();
    echarts.use([LinesChart, CanvasRenderer]);
    type EChartsOption = echarts.ComposeOption<LinesSeriesOption>;
    var app: any = {};
    var option: EChartsOption;
    onMounted(() => {
      axios.get('src/assets/map/json/china.json')
        .then(china => {
          echarts.registerMap('china', china.data);
          var myChart = echarts.init(chartRef.value!);
          axios.get('src/assets/map/json/result8.json')
            .then(data => {
              // 这里是获取连线的数据
              var hStep = 300 / (data.data.length - 1)
              var obj = eval(data.data) // 解析json数据
              var busLines = []
              for (var i = 0; i < obj.length; i++) {
                var points = []
                for (var j = 0; j < obj[i].Mnst.length; j++) {
                  // 这里有一个坑我必须说明一下 我的数据result8.json里经纬度反了，所以这里取值的时候先取的value[1],再取的value[0]
                  points.push([obj[i].Mnst[j].value[1], obj[i].Mnst[j].value[0]])
                }
                // 这里在组装连线的数据，下面将用到
                busLines.push({
                  coords: points, // 坐标这个数据是必须给的
                  name: obj[i].name, // 类似name还可以根据自己的需求给更多的数据
                  lineStyle: {
                    //给每条线都不同的样式
                    normal: {
                      color: echarts.color.modifyHSL(
                        '#5A94DF',
                        Math.round(hStep * i)
                      )
                    }
                  }
                })
              }
              console.log(busLines) // 打开浏览器控制台可以看到的输出的buslines，用于测试

              var series = []
              // 这里的series也是echarts绘图很关键的一部分，下面将用到
              // series是一个数组，你要画几种图series就有几个元素
              series.push(
                {
                  // 这个就是普通连线
                  type: 'lines',
                  coordinateSystem: 'geo', // 这句的意思是连线是基于地理坐标的,geo组件将在下面给出
                  polyline: true, // 这表示连线是否为多端点的连线
                  data: busLines, // 这里就是连线的数据了 上面组装的数据就在这里使用
                  markPoint: {
                    label: "123"
                  },
                  lineStyle: {
                    normal: {
                      opacity: 1,
                      width: 2
                    }
                  },
                  progressiveThreshold: 5,
                  progressive: 1
                },
                {
                  type: 'lines', // 这里还有一个连线其实是做的在线上的一个流动效果，运行代码注意观察你就会看到
                  coordinateSystem: 'geo',
                  polyline: true,
                  data: busLines,
                  lineStyle: {
                    normal: {
                      width: 0
                    }
                  },
                  effect: {
                    constantSpeed: 10,
                    show: true,
                    symbol: 'path://M21.96 11.22C21.57 7.01 17.76 4 13.56 4c-.19 0-.38.01-.57.02C2 4.74 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78zm-16.7.34c.57-1.29 1.28-2.35 2.14-3.19l3.62 1.53c.6.25.98.83.98 1.48c0 .89-.72 1.61-1.61 1.61H4.72c.15-.46.32-.94.54-1.43zm13.18 4.48A6.022 6.022 0 0 1 14 18H4v-.8c0-.02.01-.92.24-2.2h6.15c1.99 0 3.61-1.62 3.61-3.61c0-1.45-.87-2.76-2.2-3.32L9.3 7.01c1.1-.57 2.37-.9 3.82-.99c.15-.02.3-.02.44-.02c3.31 0 6.13 2.37 6.41 5.41c.16 1.72-.38 3.36-1.53 4.63z',
                    trailLength: 0.1,
                    symbolSize: 10
                  },
                  zlevel: 1,
                  progressiveThreshold: 5,
                  progressive: 1
                }
              )
              // setoption就是这里面最主要的东西了，上面的准备都是为了这里
              myChart.setOption({
                backgroundColor: '#404a59', // 这些设置去官网看手册就知道了
                animation: true,
                title: {
                  text: '福州动车段交路图',
                  // subtext: 'data from ',
                  // sublink: '',
                  left: 'right',
                  textStyle: {
                    color: '#ccc'
                  }
                },
                tooltip: {
                  trigger: 'item',
                  formatter: (params: any, ticket: any, callback: any) => {
                    if (params.seriesType == 'lines') return params.data.name
                  }
                },
                geo: {
                  // geo组件
                  map: 'china',
                  center: [109.50, 35.00],
                  zoom: 1.5,
                  label: {
                    normal: {
                      show: false,
                      formatter: '{a}',
                      // position: 'inside',
                      backgroundColor: '#fff',
                      padding: [3, 5],
                      borderRadius: 3,
                      borderWidth: 1,
                      borderColor: 'rgba(0,0,0,0.5)',
                      color: '#777'
                    },
                    emphasis: {
                      areaColor: '#2a333d'
                    }
                  },
                  selectedMode: 'false',
                  roam: true,
                  itemStyle: {
                    normal: {
                      areaColor: '#323c48',
                      borderColor: '#404a59'
                    },
                    emphasis: {
                      areaColor: '#2a333d'
                    }
                  }
                },
                series: series // 上面的组装的series在这里使用
              })

              // myChart.on('geoselectchanged', function (param) {
              //   var selected = []
              //   echarts.util.each(param.selected, function (v, key) {
              //     v && selected.push(key)
              //   })
              //   document.getElementById('info').innerHTML =
              //     'SELECTED: ' + selected.join(', ')
              // })

              // var isPaused = false
              // document.getElementById('pause-resume').onclick = function () {
              //   myChart.getZr().animation[isPaused ? 'resume' : 'pause']()
              //   isPaused = !isPaused
              // }
            })

        })


    })

    return {
      chartRef
    }





  },
});
</script>
