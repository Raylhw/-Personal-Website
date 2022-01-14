<template>
  <div class="detail-container">
    <Layout>
      <!-- 详情文本区 评论区 -->
      <div class="main-container" ref="mainContainer" v-loading="isLoading">
        <!-- 详情文本区 -->
        <BlogDetail :blog="data" v-if="data" />
        <!-- 评论区 -->
        <BlogComment v-if="!isLoading" />
      </div>
      <!-- 文本目录区 -->
      <template #right>
        <div class="right-container">
          <BlogTOC :toc="data.toc" v-if="data" />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import { fetchData, toTop } from "@/mixins";
import { getBlog } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogComment from "./components/BlogComment";
import BlogTOC from "./components/BlogTOC";
import { titleControler } from "@/utils";
export default {
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogTOC,
  },
  mixins: [fetchData(null), toTop("mainContainer")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if (!resp) {
        this.$router.push("/404");
        return;
      }
      titleControler.setRouterTitle(resp.title);
      return resp;
    },
    //处理滚动事件
    handleScroll() {
      this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    },
  },
  mounted() {
    this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style lang="less" scoped>
.detail-container {
  width: 100%;
  height: 100%;
}

.main-container {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 3em 1.5em 0;
  box-sizing: border-box;
  position: relative;
  scroll-behavior: smooth;
}

.right-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>