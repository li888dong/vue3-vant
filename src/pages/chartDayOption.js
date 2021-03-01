import * as echarts from 'echarts';
const chartDayOption = {

    tooltip: {},
    xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
        {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20],
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
}

export const bushuDay = Object.assign({},chartDayOption,{

    series: [
        {
            name: '销量',
            type: 'bar',
            barWidth:5,
            data: [5, 20, 36, 10, 10, 20],
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
