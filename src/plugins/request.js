import axios from "axios";
// create an axios instance
const service = axios.create({
    timeout: 30000, // request timeout
    headers: {
        "Content-Type": "application/json",
        "x-requested-with": "XMLHttpRequest",
    },
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 401; // 默认的
    },
});

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {

        // 在发送请求之前做些什么
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
service.interceptors.response.use(
    (response) => {
        const { data, headers } = response;
        if (
            data &&
            data instanceof Blob &&
            headers &&
            headers["content-disposition"]
        ) {
            const arr = headers["content-disposition"].split("=");
            return {
                data,
                fileName: arr.length > 1 ? decodeURIComponent(arr[1]) : null,
            };
        }

        return data;
    },
    (error) => {
        console.dir(error);
    }
);

export default service;
