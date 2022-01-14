// 布局组件测试  vue serve ./src/components/Layout/test.vue
<template>
  <div class="test-container">
    <Layout>
      <!-- <template #left>
        <div class="left">左边栏</div>
      </template> -->
      <div class="main">
        主区域
      </div>
      <template #right>
        <div class="right">右边栏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
  .left {
    width: 200px;
    height: 100%;
    background: blueviolet;
  }
  .main {
    width: 100%;
    height: 100%;
    background: red;
  }
  .right {
    width: 150px;
    height: 100%;
    background: yellow;
  }
}
</style>