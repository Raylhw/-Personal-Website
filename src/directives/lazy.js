import defaultGif from "@/assets/img-load.gif";
import eventBus from "@/eventBus";
import { debounce } from "@/utils";

let imgs = [];

function setImage(img) {
    img.dom.src = defaultGif;//默认图片
    const rect = img.dom.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;//视口高度
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        const tempImg = new Image();// 做缓存图片
        tempImg.onload = function () {
            // 当缓存图片加载完成后,改变默认图片路径为真实图片路径
            img.dom.src = img.src;
        }
        tempImg.src = img.src;//真实图片路径赋值缓存图片
        imgs = imgs.filter((i) => i !== img);//删除自身
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img);
    }
}

//主区域滚动条变化后触发
function handleScroll() {
    setImages();
}

//监听主区域滚动条变化
eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,//真实图片路径
        };
        imgs.push(img);
        setImage(img);//有可能刚一入页面,就有图片在范围之内
    },
    unbind(el) {
        imgs = imgs.filter((img) => img.dom !== el);
    }
}