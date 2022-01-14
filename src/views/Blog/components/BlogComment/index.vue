<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论列表"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { fetchData, messageArea } from "@/mixins";
import { postComment, getComments } from "@/api/blog.js";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), messageArea("评论成功")],
  components: {
    MessageArea,
  },
  methods: {
    // 加载数据
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async postData(formData) {
      return await postComment(formData);
    },
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  margin: 30px 0;
}
</style>