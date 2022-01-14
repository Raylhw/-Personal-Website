import Vue from "vue";

/**
 * 获取某个组件渲染的Dom根元素
 * @param {Object} comp 组件
 * @param {Object} props 该组件需要传入的属性
 * @returns 真实dom
 */
export default function (comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}