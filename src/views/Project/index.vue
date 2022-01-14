<template>
  <div class="project-container" v-loading="loading" ref="projectContainer">
    <a
      v-for="item in data"
      :key="item.id"
      :href="item.url ? item.url : 'javascript:void(0)'"
      :target="item.url ? '_blank' : '_self'"
      class="project-item"
    >
      <img v-lazy="item.thumb" class="thumb" />
      <div class="info">
        <div>
          <h2>{{ item.name }}</h2>
          <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
        </div>
        <div class="github">
          <a
            :href="item.github"
            target="_blank"
            >-> github</a
          >
        </div>
      </div>
    </a>
    <Empty text="很抱歉!没有找到信息" v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { toTop } from "@/mixins";
import Empty from "@/components/Empty";
export default {
  mixins: [toTop("projectContainer")],
  components: {
    Empty,
  },
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: mapState("project", ["loading", "data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.project-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;

  .project-item {
    transition: 0.5s;
    padding: 20px;
    display: flex;
    border-bottom: 1px solid @gray;
    margin-bottom: 20px;
    &:hover {
      box-shadow: -1px 1px 5px #000;
      transform: scale(1.01) translate(3px, -3px);
      color: inherit;
    }
    .thumb {
      width: 250px;
      min-height: 150px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 15px;
    }
    .info {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-size: 25px;
        margin-bottom: 10px;
        font-weight: bold;
      }
      p {
        line-height: 1.7;
      }
    }
  }
}
</style>