<template>
<!--    顶部标题-->
    <v-header
            :vtitle="'心率'"
            :vcolor="'crimson'"
            @confirm-date="confirmDate"></v-header>

<!--日 周 月 选择器-->
    <v-date-tab :date="startDate" @tab-change="tabChange"/>

<!--echart图表容器-->
    <div class="chart-container" ref="echart"></div>

<!--数据项面板-->
    <van-row class="card-list" gutter="4">
        <van-col :span="12">
            <div class="card-item">
                <div class="card-name">当前心率</div>
                <div class="card-val">
                    <span class="val">84</span><span class="unit">次/分</span>
                </div>
            </div>
        </van-col>
        <van-col :span="12">
            <div class="card-item">
                <div class="card-name">当前心率</div>
                <div class="card-val">
                    <span class="val">84</span><span class="unit">次/分</span>
                </div>
            </div>
        </van-col>
        <van-col :span="12">
            <div class="card-item">
                <div class="card-name">当前心率</div>
                <div class="card-val">
                    <span class="val">84</span><span class="unit">次/分</span>
                </div>
            </div>
        </van-col>
        <van-col :span="12">
            <div class="card-item">
                <div class="card-name">当前心率</div>
                <div class="card-val">
                    <span class="val">84</span><span class="unit">次/分</span>
                </div>
            </div>
        </van-col>

    </van-row>

<!--列表数据    -->
    <div class="title" style="background-color: #eee;text-align: left;padding: 10px">
        心率异常列表
    </div>
    <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span>单元格</span>
        </template>
        <template #default>
            <span>单元格</span>
        </template>
    </van-cell>
    <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span>单元格</span>
        </template>
        <template #default>
            <span>单元格</span>
        </template>
    </van-cell>
    <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
            <span>单元格</span>
        </template>
        <template #default>
            <span>单元格</span>
        </template>
    </van-cell>

</template>

<script>
    import vheader from '../components/v-header.vue'
    import vdatetab from '../components/v-datetab.vue'
    import dayjs from 'dayjs'
    import chartDayOption from "./chartDayOption";
    import chartWeekOption from "./chartWeekOption";
    import chartMonthOption from "./chartMonthOption";
    import { nextTick } from 'vue'

    export default {
        components:{
            'v-header':vheader,
            'v-date-tab':vdatetab,
        },

        data() {
            return {
                startDate: dayjs(),
                myChart:null
            }
        },
        mounted() {
            this.myChart = this.echarts.init(this.$refs.echart);
            this.$axios.get('/chartday/data')
            .then(res=>{
                console.log(res)
                chartDayOption.xAxis.data = res.xData.xData.sort()
                chartDayOption.series[0].data = res.yData.yData
                // 基于准备好的dom，初始化echarts实例

                this.myChart.setOption(chartDayOption);
            })

            this.$axios.get('/chartweek/data')
                .then(res=>{
                    console.log(res)
                    chartWeekOption.xAxis.data = res.xData.xData
                    chartWeekOption.series[0].data = res.yData.yDataMin
                    chartWeekOption.series[1].data = res.yData.yDataMax
                })

            this.$axios.get('/monthweek/data')
                .then(res=>{
                    console.log(res)
                    chartMonthOption.xAxis.data = res.xData.xData
                    chartMonthOption.series[0].data = res.yData.yDataMin
                    chartMonthOption.series[1].data = res.yData.yDataMax
                })

        },
        methods:{
            confirmDate(date){
                this.startDate = date;
            },
            async tabChange(e){
                await nextTick()
                this.myChart.clear()
                if (e === '日'){
                    this.myChart.setOption(chartDayOption);
                }
                else if (e === '周'){

                    this.myChart.setOption(chartWeekOption);
                }
                else if (e === '月'){

                    this.myChart.setOption(chartMonthOption);

                }
            }
        }
    };
</script>

<style scoped>
    .chart-container{
        width: 100%;
        height: 250px;
    }

    .card-list{
        overflow: hidden;
        padding-top: 15px;
        text-align: left;
        background-color: #eeeeee;
    }

    .card-item{
        display: inline-block;
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        background-color: #fff;
        font-size: 14px;
        text-align: center;
        color: #999;
        margin-bottom: 5px;
    }
    .card-item+.card-item{
    }
    .card-val{
        margin-top: 10px;
    }
    .card-val .val{
        font-size: 36px;
        font-family: Arial;
        color: #000;
        margin: 0 20px;
    }

    :deep(.van-tabs__wrap){
        margin-bottom: 20px;
    }
    :deep(.van-tabs__nav){
        background-color: #eee;
        border-radius: 8px;
        border: none;
        color: #000;
    }
    :deep(.van-tab){
        border-radius: 8px;
        border: none;
        height: 25px;
        line-height: 25px;
        margin: 2px ;
    }

    :deep(.van-tab.van-tab--active){
        background-color: #fff;
    }
    :deep(.van-tab__text.van-tab__text--ellipsis){
        color: #000;
    }
    :deep(.van-tab__pane){
        font-size: 14px;
    }
    :deep(.van-cell__title){
        text-align: left;
    }
</style>
