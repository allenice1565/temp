<template>
  <div class="my-pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
       :page-size="10" layout="total, prev, pager, next, jumper" :total="30">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-pagination{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
