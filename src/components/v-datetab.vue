<template>
    <van-tabs type="card">
        <van-tab title="日">
            <div class="date-container">
                <van-icon name="arrow-left" @click="dateChange('decrease',1,'day')"/>
                <div>{{startDate.format('YYYY年MM月DD日 dddd')}}</div>
                <van-icon name="arrow" @click="dateChange('increase',1,'day')"/>
            </div>

        </van-tab>
        <van-tab title="周">
            <div class="date-container">
                <van-icon name="arrow-left" @click="dateChange('decrease',1,'week')"/>
                <div>{{startDate.format('YYYY/MM/DD')}} - {{startDate.add(1,'week').format('YYYY/MM/DD')}}</div>
                <van-icon name="arrow" @click="dateChange('increase',1,'week')"/>
            </div>
        </van-tab>
        <van-tab title="月">
            <div class="date-container">
                <van-icon name="arrow-left" @click="dateChange('decrease',1,'month')"/>
                <div>{{startDate.format('YYYY/MM/DD')}} - {{startDate.add(1,'month').format('YYYY/MM/DD')}}</div>
                <van-icon name="arrow" @click="dateChange('increase',1,'month')"/>
            </div>
        </van-tab>
    </van-tabs>

</template>

<script>
    import { ref, toRefs,watch } from 'vue'
    export default {
        name: "v-datetab",
        setup(props,context){
            let { date } = toRefs(props)
            let startDate = ref(props.date)
            const dateChange = (updown, step, type)=>{
                if (updown === 'increase'){
                    startDate.value = startDate.value.add(step, type)
                }
                else {
                    startDate.value = startDate.value.add(-step, type)
                }
            }
            watch(date,()=>{
                startDate.value = date.value
            })
            return{
                startDate,
                dateChange
            }
        },
        props:{
            date:{
              type:Object
          }
        }
    }
</script>

<style scoped>
    .date-container{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
</style>
