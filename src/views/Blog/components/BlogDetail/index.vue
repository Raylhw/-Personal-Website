<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期 : {{ formatDate(blog.createDate) }}</span>
      <span>浏览 : {{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论 : {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}
      </RouterLink>
    </div>
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import { formatDate } from "@/utils";

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  .aside {
    margin-top: 2rem;
    font-size: 0.9rem;
    color: @gray;

    span,
    a {
      margin-right: 0.96rem;
    }
  }

  .markdown-body {
    margin: 2rem 0;
  }
}
</style>