<template>
  <div class="my-main">
    <el-button type="danger" class="delete">删除</el-button>
    <MyTable />
    <div class="bottom">
      <MyPagination />
      <el-button type="success " class="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyTable from "@/components/MyCart/MyTable/MyTable.vue";
import MyPagination from "@/components/MyCart/MyPagination.vue";
export default {
  name: "MyCart",
  components: {
    MyTable,
    MyPagination,
  },
};
</script>
<style scoped lang="less">
.my-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .delete {
    width: 60px;
    height: 30px;
    align-self: end;
    margin-right: 40px;
    margin-top: 15px;
    padding: 0;
  }
  .bottom {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .submit {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 30px;
      padding: 0;
    }
    ::v-deep .my-pagination {
      overflow: hidden;
      height: 30px;
      margin-left: 40px;
      padding: 0;
    }
  }
}
</style>
