<template>
  <div class="my-pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="this.$store.state.MyHome.userHomePageSize"
      layout="sizes,total, prev, pager, next, jumper"
      :total="this.$store.state.MyHome.stuffList.length"
      hide-on-single-page
      :page-sizes="[5, 10, 20, 30, 40, 50, 100]"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "MyPagination",
  methods: {
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.$store.commit("setUserHomePageSize", val);
      this.$store.commit(
        "setUserHomeTableList",
        this.$store.state.MyHome.userHomeCurrentPage
      );
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.$store.commit("setUserHomeCurrentPage", val);
      this.$store.commit(
        "setUserHomeTableList",
        this.$store.state.MyHome.userHomeCurrentPage
      );
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
