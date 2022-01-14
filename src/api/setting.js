import request from './request'

// 共享数据--全局设置
export async function getSetting() {
    return await request.get("/api/setting");
}