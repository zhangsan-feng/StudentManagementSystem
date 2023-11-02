import Qs from 'qs'
import instance from "./instance";


const jsonHeaders = {
    'Content-Type': 'application/json'
}

const formHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}

export function HttpGet(url, params){
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'get',
            params: params,
            headers: jsonHeaders,
            paramsSerializer: {
                serialize:function(params) {
                    return Qs.stringify(params, { arrayFormat: 'repeat' })
                }
            }
        })
            //成功回调
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                return reject(error.data)
            })
    })
}


export function HttpPost(url, params){
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'post',
            data: Qs.stringify(params, { indices: false }),
            headers: formHeaders,
        })
            //成功回调
            .then(response => {
                resolve(response.data)
            })
            //失败
            .catch(error => {
                reject(error.data)
            })
    })
}


export function HttpPut(url, params){}


export function HttpDelete(url, params){}


export function FormPost(url , params){
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'post',
            data: params,
            headers: formHeaders,
        })
            //成功回调
            .then(response => {
                resolve(response.data)
            })
            //失败
            .catch(error => {
                console.log(error)
                reject(error.data)
            })
    })
}


export function DownLoadFile(url, data){
    // console.log(file_name)
    return new Promise((resolve, reject) => {
        instance({
            url: url,
            method: 'post',
            data: data,
            // headers: formHeaders,
            responseType: "blob",
        })
            //成功回调
            .then((res) => {
                // console.log(res.headers)
                // console.log(res.data)

                if (res.headers['content-type'] === 'application/json'){
                    alert('下载失败' )
                    return
                }
                // console.log(res.headers)

                const link = document.createElement("a");
                let blob = new Blob([res.data]);
                link.style.display = "none";
                link.href = URL.createObjectURL(blob);
                // 下载的文件名
                link.download = decodeURIComponent(res.headers['content-disposition']?.split(';')[1].split('=')[1])
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                resolve(res)
            })
            //失败
            .catch(error => {
                console.log(error)
                reject(error.data)
            })
    })

}


export function WebSocket(){

}
