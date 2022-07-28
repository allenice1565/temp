<template>
  <div class="my-category">
    <span>用品类型：</span>
    <el-dropdown
      class="category-button"
      split-button
      type=""
      @click="handleClick"
      placement="top-start"
    >
      <i class="iconfont icon-geren"></i>
      个人用品
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown
      class="category-button"
      split-button
      type=""
      @click="handleClick"
      placement="top-start"
    >
      <i class="iconfont icon-gonggonggongju"></i>
      公共用品
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "MyCategory",
  data() {
    return {};
  },
  methods: {
    handleClick() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-category {
  padding: 10px 20px;
  height: 40px;
  font-size: 14px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .el-dropdown {
    padding: 0;
    text-align: center;

    i {
      font-size: 14px;
    }
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
