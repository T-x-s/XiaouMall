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