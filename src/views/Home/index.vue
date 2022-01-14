<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handleWheel"
  >
    <!-- 轮播图 -->
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionend"
    >
      <li v-for="item in data" :key="item.id">
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <!-- 上箭头 -->
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <IconCreate type="arrowUp" />
    </div>
    <!-- 下箭头 -->
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <IconCreate type="arrowDown" />
    </div>
    <!-- 指示器 -->
    <ul class="indicator">
      <li
        :class="{
          selected: i === index,
        }"
        @click="switchTo(i)"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carouselitem from "./Carouselitem";
import IconCreate from "@/components/IconCreate";
export default {
  components: {
    Carouselitem,
    IconCreate,
  },
  data() {
    return {
      index: 0, //当前页面的索引号
      containerHeight: 0, //容器高度
      switching: false, //是否正在翻页
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner");
  },
  mounted() {
    //获取容器的高度
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    //该组件销毁时，移除事件
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    //页面索引 * 容器宽度 = 移动距离
    marginTop() {
      return this.index * -this.containerHeight + "px";
    },
    ...mapState("banner", ["loading", "data"]),
  },
  methods: {
    //跳转到哪一个页面
    switchTo(i) {
      this.index = i;
    },
    //滚动事件
    handleWheel(e) {
      // 正在翻页
      if (this.switching) {
        return;
      }
      // 向上滚动
      if (e.deltaY > 5 && this.index < this.data.length - 1) {
        this.switching = true;
        this.switchTo(this.index + 1);
      }
      // 向下滚动
      else if (e.deltaY < -5 && this.index >= 1) {
        this.switching = true;
        this.switchTo(this.index - 1);
      }
    },
    //过渡效果结束后事件
    handleTransitionend() {
      this.switching = false;
    },
    //容器尺寸变化事件
    handleResize() {
      //容器尺寸改变后，重新获取
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  background: @dark;
  position: relative;
  overflow: hidden;

  .carousel-container {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    li {
      width: 100%;
      height: 100%;
    }
  }

  .icon {
    .self-center();
    font-size: 30px;
    @gap: 15px;
    color: @gray;
    cursor: pointer;
    transform: translateX(-50%);
    @jump: 5px;

    &.icon-up {
      top: @gap;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 2s infinite;
    }

    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }

  .indicator {
    @size: 7px;
    .self-center();
    left: auto;
    right: 20px;
    transform: translateY(-50%);

    li {
      width: @size;
      height: @size;
      border-radius: 50%;
      background: @words;
      margin-top: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      cursor: pointer;

      &.selected {
        background: #fff;
      }
    }
  }
}
</style>