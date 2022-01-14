// vue serve ./src/components/MessageArea/test.vue
<template>
  <div class="test-container">
    <MessageArea />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import "@/styles/reset.css";
export default {
  components: {
    MessageArea,
  },
};
</script>

<style lang="less" scoped>
.test-container{
  width: 700px;
  margin: 0 auto;
}
</style>