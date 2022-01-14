//vue serve ./src/views/Blog/components/Catalogue/test.vue
<template>
  <div class="test-container">
    <Catalogue @selected="handleSelected" :list="list" />
  </div>
</template>

<script>
import Catalogue from "./";
import "@/styles/reset.css";
export default {
  components: {
    Catalogue,
  },
  data() {
    return {
      list: [
        {
          name: "a",
          isSelected: true,
          children: [
            { name: "a-1", isSelected: false },
            { name: "a-2", isSelected: false },
            { name: "a-3", isSelected: false },
          ],
        },
        { name: "b", isSelected: false },
        { name: "c", isSelected: false },
      ],
    };
  },
  methods: {
    handleSelected(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>
</style>