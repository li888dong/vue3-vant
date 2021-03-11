import * as echarts from 'echarts';
const chartDayOption = {

    tooltip: {},
    grid:{
      bottom:40,
      top:40,
    },
    xAxis: {
        data: [],
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        }
    },
    yAxis: {},
    series: [
        {
            name: '',
            type: 'line',
            data: [],
            symbol: 'none',
            sampling: 'lttb',
            smooth: false,
            color:'rgba(255,88,69,1)',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255,88,69,.7)'
                }, {
                    offset: 1,
                    color: 'rgba(255,88,69,.1)'
                }])
            },
        }
    ]
}

export const bushuDay = Object.assign({},chartDayOption,{

    series: [
        {
            name: '',
            type: 'bar',
            barWidth:5,
            data: [],
            symbol: 'none',
            sampling: 'lttb',
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 70, 131,.7)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 70, 131,.1)'
                }])
            },
        }
    ]

})

export default chartDayOption
