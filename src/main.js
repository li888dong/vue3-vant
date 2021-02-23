import { createApp } from 'vue'
import App from './App.vue'
import service from './plugins/request'
const app = createApp(App)
app.config.globalProperties.$axios = service;
// 引入路由对象实例
import routerIndex from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';

import dayjs from "dayjs";
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

app
    .use(Vant)
    .use(routerIndex)
    .mount('#app')
