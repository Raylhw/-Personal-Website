<template>
  <div class="empty-container">
    <IconCreate type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import IconCreate from "@/components/IconCreate";
export default {
  components: {
    IconCreate,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  text-align: center;
  color: @gray;

  .iconCreate-container {
    font-size: 4.5em;
  }

  p {
    font-size: 1em;
    font-weight: bold;
    margin-top: 1em;
  }
}
</style>