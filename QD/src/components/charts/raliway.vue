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
                  lineStyle: {
                    normal: {
                      opacity: 1,
                      width: 2
                    }
                  },
                  progressiveThreshold: 500,
                  progressive: 200
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
                    constantSpeed: 20,
                    show: true,
                    trailLength: 0.1,
                    symbolSize: 1.5
                  },
                  zlevel: 1
                }
              )
              // setoption就是这里面最主要的东西了，上面的准备都是为了这里
              myChart.setOption({
                backgroundColor: '#404a59', // 这些设置去官网看手册就知道了
                animation: false,
                title: {
                  text: '高铁网络',
                  subtext: 'data from ',
                  sublink: '',
                  left: 'center',
                  textStyle: {
                    color: '#fff'
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
                  label: {
                    normal: {
                      show: true,
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
                  selectedMode: 'single',
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
