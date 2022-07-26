<template>
  <div class="header">
    <img src="@/assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "MyHeader",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  width: 100%;
  border-bottom: 1px solid #ccc;
  img {
    width: 265px;
    height: 60px;
  }
}
</style>
