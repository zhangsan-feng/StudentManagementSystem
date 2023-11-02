import axios from "axios";

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {message } from 'antd';
export const HttpServerUrl = "http://127.0.0.1:8000"



const instance = axios.create({
    baseURL:HttpServerUrl,
    responseType:'json',
    timeout:5000,
})


//配置进度条参数
NProgress.configure({ showSpinner: false, minimum: 0.2, easeing: 'swing', speed: 1000, trickleRate: 0.2 })


instance.interceptors.request.use(
    config => {
        //发送请求前添加认证token，
        // localStorage.setItem('token', JSON.stringify({'token':'token'}))   //存储
        // config.headers.Authorization = 'BEARER ' + JSON.parse(localStorage.getItem('token'))  //返回前台
        // config.headers.Authorization = 'Bearer ' + JSON.parse(localStorage.getItem('token'))  //返回前台
        config.headers.Authorization =  localStorage.getItem("token")
        // config.headers.token = "Authorization--"+  localStorage.getItem("token")
        // config.headers.prople = "user"

        // config.headers.token = ""+ localStorage.getItem("token")
        NProgress.start()
        // message.loading("加载中",1)
        // message.error("服务器出错了",1)
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        NProgress.done()
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        // console.log(error)
        // console.log(this)
        NProgress.done()
        if(error.response.status){
            switch(error.response.status) {

                case 401:
                    //返回登录页
                    // message.error("身份验证过期 , 请重新登录")
                    localStorage.clear()
                    localStorage.removeItem('token')
                    window.location.href = '/login';
                // hashHistory.push('/login')
                    break
                case 403:
                    // message.error("权限不足")
                    //无权限，拒绝访问
                    break
                case 404:
                    //请求地址出错
                    break
                default:
                    console.log(error.response)
                    // message.error("服务异常, 请联系开发人员")
                    //其它错误，直接展示消息error.response.data.message
                    break
            }
            return Promise.reject(error.response);
        }
    }
)

export default instance
