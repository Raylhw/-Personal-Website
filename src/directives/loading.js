import loadingUrl from '@/assets/loading.svg';
import styles from './loading.module.less'
// 判断el中是否存在loading的img元素
function isLoadingIn(el) {
    return el.querySelector("img[data-role=loading]");
}
//创建img
function createLoadingImg() {
    const img = document.createElement('img');
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

export default function (el, binding) {
    const curImg = isLoadingIn(el);
    if (binding.value) {
        // 没有
        if (!curImg) {
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }
    else {
        if (curImg) {
            curImg.remove();
        }
    }
}