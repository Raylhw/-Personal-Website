// import '@/mock';//模拟数据
import Vue from 'vue';
import App from './App.vue';
import '@/styles/reset.css';
import '@/styles/global.less';
import router from '@/router';//路由
import store from '@/store';//仓库
import { showMessage } from "@/utils";//弹出消息模块
import "./eventBus";//事件总线
import vLoading from '@/directives/loading';//指令
import vLazy from '@/directives/lazy';//指令

store.dispatch("setting/fetchSetting");

Vue.prototype.$showMessage = showMessage;//挂载到原型

//注册全局指令
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

