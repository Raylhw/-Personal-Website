<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" :style="imagePosition" ref="image">
      <ImageLoader
        @load="showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descriptionWidth: 0,
      containerSize: null, //外层容器的尺寸
      innerSize: null, //里层图片的尺寸
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    imagePosition() {
      //在mounted后才获取值，所以需要判断一下有没有值
      if (!this.innerSize || !this.containerSize) {
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width; //多出的宽度
      const extraHeight = this.innerSize.height - this.containerSize.height; //多出的高度
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    //该组件销毁时，移除事件
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    showWords() {
      //title
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      (this.$refs.title.style.transition = "1s"),
        (this.$refs.title.style.width = this.titleWidth + "px");

      //description
      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.clientWidth;
      (this.$refs.description.style.transition = "2s 1s"),
        (this.$refs.description.style.width = this.descriptionWidth + "px");
    },
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
    },
    handleMouseMove(e) {
      const containerRect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - containerRect.left;
      this.mouseY = e.clientY - containerRect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  background: @dark;
  color: #fff;
  position: relative;
  overflow: hidden;

  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .title,
  .description {
    position: absolute;
    letter-spacing: 3px;
    color: #fff;
    left: 30px;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }

  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }

  .description {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
  }
}
</style>