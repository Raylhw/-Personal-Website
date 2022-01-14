// 分页组件测试  vue serve ./src/components/Avatar/test.vue
<template>
  <div id="app">
    <h1>App组件</h1>
    <Avatar
      url="https://img2.baidu.com/it/u=1834303886,1990802258&fm=26&fmt=auto"
      :size="150"
    />
    <Avatar
      url="https://img2.baidu.com/it/u=395719964,2145680590&fm=26&fmt=auto"
      :size="150"
    />
  </div>
</template>

<script>
import Avatar from "./";
export default {
  name: "App",
  components: {
    Avatar,
  },
  mounted(){
    console.log(this)
  }
};
</script>

<style scoped>
.avatar-container{
  margin-top: 50px;
}
</style>
