// 分页组件测试  vue serve ./src/components/ImageLoader/test.vue
<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration="10000"
      @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  name: "App",
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {},
  },
};
</script>

<style scoped>
.test-container {
  width: 500px;
  height: 300px;
  border: 1px solid black;
  margin: 0 auto;
}
.image-loader-container {
}
</style>
