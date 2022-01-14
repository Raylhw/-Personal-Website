<template>
  <div class="image-loader-container">
    <!-- 占位图片 -->
    <img class="placeholder" v-if="!everythingDone" :src="placeholder" />
    <!-- 加载后的图片 -->
    <img
      class="origin"
      @load="handleLoad"
      :src="src"
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    // 原始图片的路径
    src: {
      type: String,
      required: true,
    },
    // 原始图片加载完成前的占位图片
    placeholder: {
      type: String,
      required: true,
    },
    // 原始图片加载完成后，切换到原始图经过的毫秒数
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false,//判断图片是否加载成功
      everythingDone: false,//判断一切是否已经完成
    };
  },
  computed: {
    // 计算opacity：1 或 0
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    // load后处理函数
    handleLoad() {
      this.originLoaded = true;
      // setTimeout的作用是为了处理用户传入的duration
      setTimeout(() => {
        this.everythingDone = true;//时间到，一切完成
        this.$emit("load");//抛出事件
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
    &.placeholder {
      filter: blur(2vw);
    }
    &.origin {
      opacity: 0;
    }
  }
}
</style>
