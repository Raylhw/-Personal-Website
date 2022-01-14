<template>
  <div @click="handleClick" v-show="show" class="to-top-container">Top</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
  methods: {
    handleScroll(dom) {
      if (!dom) {
        this.show = false;
        return;
      }
      this.show = dom.scrollTop >= 500;
    },
    handleClick() {
      this.$bus.$emit("setMainScroll", 0);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  @size: 75px;
  width: @size;
  height: @size;
  background: @primary;
  border-radius: 50%;
  position: fixed;
  z-index: 999;
  right: 50px;
  bottom: 25px;
  text-align: center;
  line-height: @size;
  cursor: pointer;
  color: #fff;
  opacity: 0.5;
  transition: 0.4s;
  user-select: none;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
}
</style>