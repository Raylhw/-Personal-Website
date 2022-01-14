import axios from 'axios';
import { showMessage } from "@/utils";

// 拦截器
const ins = axios.create();//创建axios实例
ins.interceptors.response.use(function (resp) {
    // 发生错误
    if (resp.data.code !== 0) {
        showMessage({
            content: resp.data.msg,
            type: "error",
            duration: 1000,
        })
        return null;
    }
    // 成功请求数据
    return resp.data.data;
})

export default ins;