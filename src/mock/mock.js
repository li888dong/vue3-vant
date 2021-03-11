// const Mock = require('mockjs') // 获取mock对象
import Mock from 'mockjs'
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const domain = 'http://mockjs.com/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码
//
const dayData = req => {

    let post = {
        "xData": Mock.mock({
            "xData|50": [
                "@time('HH:mm')"
            ]
        }),
        "yData": Mock.mock({
            "yData|50": [
                "@integer(60, 120)"
            ]
        }),
    }

    // 返回状态码和文章数据posts
    return post
}

Mock.mock(/\/chartday\/data.*/, 'get', dayData);

const weekData = req => {

    let post = {
        "xData": Mock.mock({
            "xData|7": [
                Random.now('day','MM/dd')
            ]
        }),
        "yData": Mock.mock({
            "yDataMin|7": [
                "@integer(60, 90)"
            ],
            "yDataMax|7": [
                "@integer(90, 120)"
            ]
        }),
    }

    // 返回状态码和文章数据posts
    return post
}

Mock.mock(/\/chartweek\/data.*/, 'get', weekData);

const monthData = req => {

    let post = {
        "xData": Mock.mock({
            "xData|30": [
                Random.now('day','MM/dd')
            ]
        }),
        "yData": Mock.mock({
            "yDataMin|30": [
                "@integer(60, 90)"
            ],
            "yDataMax|30": [
                "@integer(90, 120)"
            ]
        }),
    }

    // 返回状态码和文章数据posts
    return post
}

Mock.mock(/\/monthweek\/data.*/, 'get', monthData);
