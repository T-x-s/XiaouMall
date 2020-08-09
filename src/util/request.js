import axios from "axios";
import qs from "qs";

// axios.interceptors.request.use(config=>{
//     // 请求拦截
//     return config
// })

axios.interceptors.response.use(res=>{
    // 响应拦截
    console.log(res)
    return res;
})

//登录
export const requestLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}

//banner
export const requestBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
//banner
export const requestList=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

//商品信息（首页）
export const requestGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}

//分类信息
export const requestGetGoods=()=>{
    return axios({
        url:"/api/getcatetree",
        method:"get"
    })
}

//商品信息
export const GetGoodsInfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params:params
    })
}
