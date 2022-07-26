<template>
  <div class="my-main">
    <div class="top">
      <div class="left">
        <Category />
        <Search />
        <MyCart />
      </div>
      <div class="right">
        <Info />
      </div>
    </div>

    <MyTable />
    <MyPagination />
  </div>
</template>

<script>
import Search from "./Search.vue";
import Category from "./Category.vue";
import MyTable from "./MyTable/MyTable.vue";
import Info from "./Info.vue";
import MyCart from "./MyCart.vue";
import MyPagination from "./MyPagination.vue";

export default {
  name: "MyMain",
  components: {
    Search,
    Category,
    MyTable,
    MyCart,
    Info,
    MyPagination,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-main {
  position: relative;
  font-size: 14px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  .info {
    margin-right: 20px;
  }
}
</style>
