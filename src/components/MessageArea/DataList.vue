<template>
  <ul class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Layout>
        <!-- 左侧头像 -->
        <template #left>
          <div class="img">
            <Avatar :url="item.avatar" :size="50" />
          </div>
        </template>
        <!-- 文本区 -->
        <div class="main">
          <!-- 顶部信息栏 -->
          <div class="header">
            <span class="name">{{ item.nickname }}</span>
            <div class="aside">
              <span>{{ formatDate(item.createDate) }}</span>
              <span>{{ formatTime(item.createDate) }}</span>
            </div>
          </div>
          <!-- 描述栏 -->
          <div class="desc">{{ item.content }}</div>
        </div>
      </Layout>
    </li>
  </ul>
</template>

<script>
import Layout from "@/components/Layout";
import Avatar from "@/components/Avatar";
import { formatDate, formatTime } from "@/utils";
export default {
  components: {
    Layout,
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
    formatTime,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.data-list-container {
  width: 100%;

  li {
    border-bottom: 1px solid lighten(@gray, 20%);
    padding: 15px 0;
    box-sizing: border-box;

    .img {
      width: 100%;
      height: 100%;
      margin-right: 15px;
    }

    .main {
      display: flex;
      flex-direction: column;

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .name {
          color: @success;
          font-weight: bold;
        }
        .aside {
          color: @gray;
          font-size: 12px;

          span {
            margin-left: 5px;
          }
        }
      }

      .desc {
        font-size: 14px;
        color: @words;
        line-height: 1.43;
      }
    }
  }
}
</style>