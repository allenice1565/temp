<template>
  <div class="my-cart">
    <el-button>加入清单</el-button>
    <el-button @click.native="goCart">
      <i class="iconfont icon-gouwugouwuchedinggou"></i>
      购物车
    </el-button>
    <span class="sort-title">排序方式：</span>
    <el-radio v-model="radio" label="1">用品编码</el-radio>
    <el-radio v-model="radio" label="2">申请频率</el-radio>
  </div>
</template>

<script>
export default {
  name: "MyCart",
  data() {
    return {
      radio: "1",
    };
  },
  methods: {
    goCart() {
      this.$router.push({ name: "MyCart" });
      console.log(123);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-cart {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding-left: 20px;
  font-size: 14px;

  .el-button {
    height: 30px;
    line-height: 30px;
    text-align: center;
    vertical-align: center;
    padding: 0 15px;
  }
  .sort-title {
    margin-left: 15px;
  }
  ::v-deep .el-radio {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    padding: 0;
    margin: 0 10px;
  }
}
</style>
