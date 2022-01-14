// 头像组件
<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
import occupyingPic from "@/assets/occupying.jpg";
export default {
  data() {
    return {
      occupyingPic,
    };
  },
  props: {
    url: {
      type: String,
      required: true,
      default: occupyingPic,
    },
    size: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>