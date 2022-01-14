<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" :size="150" />
      <h1 class="user-name">{{ data.siteTitle }}</h1>
    </template>
    <Menu v-if="data" />
    <Contact v-if="data" />
    <div class="icp">
      {{ data.icp }}
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "@/components/SiteAside/Contact";
import Menu from "@/components/SiteAside/Menu";
import { mapState } from "vuex";
import { getSetting } from "@/api/setting.js";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}

.avatar-container {
  margin: 0 auto;
  cursor: pointer;
}

.user-name {
  height: 70px;
  line-height: 70px;
  font-size: 25px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  cursor: pointer;
}
.icp {
  color: darken(@gray, 40%);
  font-size: 14px;
  text-align: center;
}
</style>