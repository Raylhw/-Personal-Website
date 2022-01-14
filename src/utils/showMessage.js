import getComponentRootDom from "./getComponentRootDom";
import IconCreate from "@/components/IconCreate";
import styles from './showMessage.module.less';
/**
 * 
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 停留时长
 * @param {HTMLElement} container 容器  
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;

    const div = document.createElement('div');
    const iconDom = getComponentRootDom(IconCreate, { type });//获取真实dom
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    // 设置样式
    const typeClassName = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClassName}`;
    // 只有传递了container才设置为relative。没有传递则相对于视口
    if (options.container) {
        if (getComputedStyle(container).position === 'static') {
            container.style.position = 'relative';
        }
    }
    // 将div加入container
    container.appendChild(div);

    // 强行渲染一次
    div.clientHeight;

    // 显示
    div.style.opacity = 1;
    div.style.transform = `translate(-50%,-50%)`;

    // 过一段时间，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        div.addEventListener('transitionend', function () {
            div.remove();
            // 消失后，执行函数
            options.callback && options.callback();
        }, { once: true })
    }, duration)
}