<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="data"
      class="about-content"
      :src="data"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaded: false,//是否已经加载
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", ["loading", "data"]),
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .about-content {
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>