// 分页组件测试  vue serve ./src/components/Empty/test.vue
<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  name: "App",
  components: {
    Empty,
  },
};
</script>

<style scoped>
.test-container{
  font-size: 10px;
}
</style>
