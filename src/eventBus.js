import Vue from "vue";
const app = new Vue({});

/**
 * 事件:mainScroll
 * 含义:主区域滚动条位置变化后触发
 * 参数:
 * -滚动的dom元素,如果undefined即为不存在
 * 
 * 事件:setMainScroll
 * 含义:设置主区域滚动条位置时触发
 * 参数:
 * -滚动高度
 */

Vue.prototype.$bus = app;
//为了让普通的js文件也可以监听事件总线
export default app;