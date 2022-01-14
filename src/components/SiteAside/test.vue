//vue serve ./src/components/SiteAside/test.vue
<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
import "@/styles/reset.css";
import "@/styles/global.less";

export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 300px;
  height: 600px;
  margin: 0 auto;
}
</style>