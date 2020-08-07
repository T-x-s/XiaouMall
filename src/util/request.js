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

