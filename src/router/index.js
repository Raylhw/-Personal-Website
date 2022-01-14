import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import { titleControler } from '@/utils'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 判断是否是传统方式引入
if (!window.VueRouter) {
    Vue.use(VueRouter);//使用vue-router插件
}

//创建路由实例
const router = new VueRouter({
    //配置
    routes,//路由匹配规则
    mode: "history"
});

//网站--路由名字
router.afterEach((to) => {
    if (to.meta.title) {
        titleControler.setRouterTitle(to.meta.title);
    }
})

export default router;