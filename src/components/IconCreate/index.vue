<template>
  <i class="iconfont iconCreate-container" :class="fontClass"></i>
</template>

<script>
// icon名字映射
const classMap = {
  arrowUp: "icon-xiangshang",
  arrowDown: "icon-xiangxia",
  error: "icon-cuowu",
  blog: "icon-blog",
  info: "icon-xinxi",
  message: "icon-liuyan",
  wechat: "icon-weixin-copy",
  warn: "icon-jinggao",
  home: "icon-zhuye",
  success: "icon-zhengque",
  code: "icon-code",
  qq: "icon-QQ-circle-fill",
  close: "icon-guanbi",
  email: "icon-email",
  empty: "icon-empty",
  github: "icon-github",
  about: "icon-set_about_hov",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2909635_vlmqqklh8em.css";
.iconCreate-container {
  color: inherit;
  font-size: inherit;
}
</style>