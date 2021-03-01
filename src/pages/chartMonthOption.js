
const charMonthOption = {

    tooltip: {},
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: function () {
            var list = [];
            for (var i = 1; i <= 11; i++) {
                list.push('11月' + i + '日');
            }
            return list;
        }()
    },
    itemStyle:{
        borderRadius: [5, 5, 5, 5] //（顺时针左上，右上，右下，左下）

    },
    yAxis: {},
    series: [
        {
            name: '辅助',
            type: 'bar',
            barWidth:10,
            stack: '总量',
            itemStyle: {
                borderColor : 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)',
            },
            emphasis: {
                itemStyle: {
                    borderColor : 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'top'
            },
            data: [900, 345, 393, '-', '-', 135, 178, 286, '-', '-', '-']
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'bottom'
            },
            data: ['-', '-', '-', 108, 154, '-', '-', '-', 119, 361, 203]
        }
    ]
}

export default charMonthOption
