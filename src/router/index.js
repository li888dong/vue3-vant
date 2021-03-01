import {createRouter, createWebHashHistory, createWebHistory} from "vue-router"

// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import home from "../pages/home.vue";
import home2 from "../pages/home2.vue";
import home3 from "../pages/home3.vue";

// 2. 定义路由配置
const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    { path: "/home", component: home },
    { path: "/home2", component: home2 },
    { path: "/home3", component: home3 },
];

// 3. 创建路由实例
const router = createRouter({
    // 4. 采用hash 模式
    history: createWebHashHistory(),
    // 采用 history 模式
    // history: createWebHistory(),
    routes, // short for `routes: routes`
});

export default router
