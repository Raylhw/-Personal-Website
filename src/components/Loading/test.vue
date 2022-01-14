//测试指令 vue serve ./src/components/Loading/test.vue
<template>
  <div>
    <Loading v-if="isLoading"/>
    <button @click="isLoading = !isLoading">显示/隐藏</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  data() {
    return {
      isLoading: true, //是否正在加载
    };
  },
  components: {
    Loading,
  },
};
</script>

<style>
</style>