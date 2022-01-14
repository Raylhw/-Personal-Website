<template>
  <nav class="menu-container">
    <RouterLink
      v-for="item in items"
      :exact="item.exact"
      :key="item.link"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <IconCreate :type="item.icon" />
      </div>
      <span>{{ item.text }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import IconCreate from "@/components/IconCreate";
export default {
  components: {
    IconCreate,
  },
  data() {
    return {
      items: [
        {
          name: "Home",
          text: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          text: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          text: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          text: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          text: "留言板",
          icon: "message",
          exact: true,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;

  a {
    width: 100%;
    height: 45px;
    padding: 0 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;

    .icon {
      width: 24px;
    }

    &:hover {
      color: #fff;
    }

    &.selected {
      background: darken(@words, 3%);
    }
  }
}
</style>
