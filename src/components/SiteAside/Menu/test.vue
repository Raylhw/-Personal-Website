// 分页组件测试  vue serve ./src/components/SiteAside/Menu/test.vue
<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/reset.css";
import "@/styles/global.less";
export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style scoped>
.test-container {
  width: 400px;
  height: 600px;
  border: 2px solid black;
  background: #000;
  margin: 0 auto;
}
</style>
