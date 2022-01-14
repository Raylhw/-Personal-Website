<template>
  <div class="blog-category-container">
    <h2>文章分类</h2>
    <Catalogue :list="list" @selected="handleSelected" />
  </div>
</template>

<script>
import Catalogue from "../Catalogue";
import { getBlogTypes } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";

export default {
  mixins: [fetchData([])],
  components: {
    Catalogue,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];

      return result.map((item) => ({
        ...item,
        isSelected: item.id === this.categoryId,
        aside: `${item.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelected(item) {
      const query = {
        page: 1,
        limit: this.limit,
      };

      if (item.id === -1) {
        //点击全部,路由地址:/blog
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 点击分类,路由地址:/blog/cate/:categoryId
        this.$router.push({
          name: "CategoryBlog",
          params: { categoryId: item.id },
          query,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.blog-category-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.125em;
    margin-bottom: 0.5em;
  }
}
</style>