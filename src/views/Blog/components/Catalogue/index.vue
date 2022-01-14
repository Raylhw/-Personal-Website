// 目录
<template>
  <ul class="catalogue-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ selected: item.isSelected }">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ selected: item.isSelected }"
        @click="handleClick(item)"
      >
        {{ item.aside }}
      </span>
      <!-- 递归 -->
      <Catalogue :list="item.children" @selected="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Catalogue", //自我递归需要name
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelected) {
        this.$emit("selected", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.catalogue-container {
  .catalogue-container {
    margin-left: 1em;
  }

  li {
    min-height: 2.5em;
    line-height: 2.5em;
    cursor: pointer;

    .aside {
      margin-left: 1em;
      color: @gray;
      font-size: 0.75em;
    }

    .selected {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>