<template>
  <div class="message-container" ref="messageContainer">
    <MessageArea
      title="留言板"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import { fetchData, toTop, messageArea } from "@/mixins";
import { getMessages, postMessage } from "@/api/message";
export default {
  mixins: [
    fetchData({ total: 0, rows: [] }),
    toTop("messageContainer"),
    messageArea("感谢您的留言"),
  ],
  components: {
    MessageArea,
  },
  methods: {
    async fetchData() {
      return await getMessages(this.page, this.limit);
    },
    async postData(formData) {
      return await postMessage(formData);
    },
  },
};
</script>

<style lang="less" scoped>
.message-container {
  width: 100%;
  height: 100%;
  padding: 25px 0;
  box-sizing: border-box;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.message-area-container {
  width: 70%;
  margin: 0 auto;
}
</style>