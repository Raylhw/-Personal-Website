<template>
  <div v-loading="isLoading" class="blog-list-container" ref="container">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <!-- 略缩图 -->
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <!-- 主体 -->
        <div class="main">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期 : {{ formatDate(item.createDate) }}</span>
            <span>浏览 : {{ item.scanNumber }}</span>
            <span>评论 : {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
      <Empty
        text="很抱歉!没有找到信息"
        v-if="data.rows.length === 0 && !isLoading"
      />
    </ul>
    <!-- 分页 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import { getBlogs } from "@/api/blog.js";
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import { fetchData, toTop } from "@/mixins";
import { server_URL } from "@/urlConfig.js";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), toTop("container")],
  components: {
    Pager,
    Empty,
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1; //-1表示所有分类
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      const resp = await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
      for (const i of resp.rows) {
        if (i.thumb) {
          i.thumb = server_URL + i.thumb;
        }
      }
      return resp;
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };

      if (this.routeInfo.categoryId === -1) {
        //没有分类,路由地址:/blog
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        // 有分类,路由地址:/blog/cate/:categoryId
        this.$router.push({
          name: "CategoryBlog",
          params: { categoryId: this.routeInfo.categoryId },
          query,
        });
      }
    },
    formatDate,
  },
  watch: {
    //监控路由地址变化
    async $route() {
      this.isLoading = true; //正在loading
      this.$refs.container.scrollTop = 0; //滚动条回到顶部
      this.data = await this.fetchData();
      this.isLoading = false; //loading结束
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;

      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }

    .main {
      flex: 1 1 auto;

      h2 {
        font-size: 20px;
        font-weight: bold;
      }

      .aside {
        font-size: 12px;
        color: @gray;

        span {
          margin-right: 15px;
        }
      }

      .desc {
        margin: 15px 0;
        font-size: 14px;
      }
    }
  }
}
</style>
