const chartWeekOption = {

    tooltip: {},
    grid:{
        bottom:40,
        top:40,
    },
    xAxis: {
        type: 'category',
            splitLine: {show: false},
        data: []
    },
    itemStyle:{
        borderRadius: [5, 5, 5, 5] //（顺时针左上，右上，右下，左下）

    },
    yAxis: {},

    series: [
        {
            name: '最小心率',
            type: 'bar',
            barWidth:7,
            stack: '总量',

            itemStyle: {
                borderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            label: {
                show: false,
                position: 'top'
            },
            data: []
        },
        {
            name: '最大心率',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                borderColor: 'rgb(192,71,52,1)',
                color: 'rgba(192,71,52,1)',
            },
            label: {
                show: false,
                position: 'top'
            },
            data: []
        }
    ]
}

export default chartWeekOption
