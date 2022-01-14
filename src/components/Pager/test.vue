// 分页组件测试  vue serve ./src/components/Pager/test.vue
<template>
  <div id="app">
    <h1>App组件</h1>
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.current = newPage;
    },
  },
};
</script>

<style scoped>
</style>
