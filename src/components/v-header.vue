<template>
    <van-nav-bar
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <template #left>
            <van-icon size="20px" :color="propColor" name="arrow-left" />
        </template>
        <template #title>
            <span :style="{color: propColor}">{{propTitle}}</span>
        </template>
        <template #right>
            <van-icon size="20px" :color="propColor" name="notes-o" />
        </template>
    </van-nav-bar>
    <van-calendar
            v-model:show="calendarShow"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm" />
</template>

<script>
    import { Toast } from 'vant';
    import { ref } from 'vue'
    import dayjs from 'dayjs'
    export default {
        setup(props,{emit}) {
            const onClickLeft = () => Toast('返回');
            const onClickRight = () => {calendarShow.value = true};
            const onConfirm = (date) => {calendarShow.value = false;emit('confirm-date',dayjs(date))}
            let calendarShow = ref(false)
            let propTitle = ref(props.vtitle)
            let propColor = ref(props.vcolor)

            const minDate = new Date(dayjs().subtract(60, 'days'));
            const maxDate = new Date(dayjs());
            return {
                onClickLeft,
                onClickRight,
                onConfirm,
                calendarShow,
                propTitle,
                minDate,
                maxDate,
                propColor,
            };
        },
        props:{
            vtitle:{ type: String },
            vcolor:{type:String}
        },
        emits: ["confirm-date"],
        data() {
            return {

            }
        },
        mounted() {

        },
        methods:{

        }
    };
</script>

