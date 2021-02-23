<template>
    <v-header
            :vtitle="'心率'"
            :vcolor="'crimson'"
            @confirm-date="confirmDate"></v-header>
    <v-date-tab :date="startDate"/>
</template>

<script>
    import vheader from '../components/v-header.vue'
    import vdatetab from '../components/v-datetab.vue'
    import dayjs from 'dayjs'
    export default {
        components:{
            'v-header':vheader,
            'v-date-tab':vdatetab,
        },
        setup() {

        },
        data() {
            return {
                startDate: dayjs(),
            }
        },
        mounted() {

        },
        methods:{
            confirmDate(date){
                this.startDate = date
            }
        }
    };
</script>

<style scoped>


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
</style>
