// 分页组件测试  vue serve ./src/components/IconCreate/test.vue
<template>
  <div id="app">
    <h1>App组件</h1>
    <IconCreate type="qq" />
  </div>
</template>

<script>
import IconCreate from "./";
export default {
  name: "App",
  components: {
    IconCreate,
  },
  
};
</script>

<style scoped>
.iconCreate-container {
  font-size: 50px;
  color: blue;
}
</style>
