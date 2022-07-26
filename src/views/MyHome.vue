<template>
  <div class="application">
    <MyHeader />
    <div class="container">
      <MyAside />
      <MyMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from "@/components/common/MyHeader.vue";
import MyAside from "@/components/common/MyAside.vue";
import MyMain from "@/components/MyHome/MyMain.vue";
export default {
  name: "MyHome",
  components: {
    MyHeader,
    MyAside,
    MyMain,
  },
};
</script>
<style scoped lang="less">
.application {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .my-header {
    width: 100vw;
    height: 122px;
    padding-bottom: 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex: 1;

    .my-aside {
      flex: none;
      width: 200px !important;
      border-right: 1px solid #ccc;
      overflow: hidden;
    }
    .my-main {
      flex: 1;
    }
  }
}
</style>
