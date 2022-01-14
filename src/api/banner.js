import request from './request'
 
// 请求banner数据
export async function getBanners() {
    return await request.get("/api/banner");
}