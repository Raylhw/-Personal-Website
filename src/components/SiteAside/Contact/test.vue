// 分页组件测试  vue serve ./src/components/SiteAside/Contact/test.vue
<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import '@/styles/reset.css'
import "@/styles/global.less";
export default {
  name: "App",
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
.test-container{
  width: 500px;
  height: 600px;
  border: 1px solid black;
  margin: 100px auto;
  background: black;
}
</style>

