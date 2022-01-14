<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <Catalogue :list="tocWithSelect" @selected="handleSelected" />
  </div>
</template>

<script>
import Catalogue from "../Catalogue";
import { debounce } from "@/utils";
export default {
  components: {
    Catalogue,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  computed: {
    // 对数据做些处理
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelected: t.anchor === this.activeAnchor,
          children: getTOC(t.children),
        }));
      };
      return getTOC(this.toc);
    },
    // 用于存储每条数据的dom元素,包括子元素.用于匹配htmlcontent中的元素id
    doms() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created() {
    // 防抖处理
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSelectDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSelectDebounce);
  },
  methods: {
    handleSelected(item) {
      location.hash = item.anchor;
    },
    setSelect(scrollDom) {
      if (!scrollDom) {
        return;
      }
      this.activeAnchor = "";
      const range = 200; //范围
      for (const dom of this.doms) {
        // 如果不存在,开始下一次循环
        if (!dom) {
          continue;
        }
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (top > range) {
          return;
        } else {
          this.activeAnchor = dom.id;
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.125em;
    margin-bottom: 0.5em;
  }
}
</style>