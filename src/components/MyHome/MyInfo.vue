<template>
  <div class="info">
    <!-- <el-card> -->
    <h2 class="el-icon-info">温馨提示</h2>
    <ol>
      <li>申请公共用品请备注好使用地点及用途</li>
      <li>申请个人用品时，多人申请需备注好使用人员姓名及数量</li>
      <li>
        申请个人用品时，申请数量超过建议数量，或申请频繁时，需备注好原因或用途
      </li>
      <li>紧急申请，需备注好原因或用途</li>
      <li>二期打印纸和硒鼓在1512杨洋老师处登记领取</li>
    </ol>
    <!-- </el-card> -->
  </div>
</template>

<script>
export default {
  name: "MyInfo",
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.info {
  height: 150px;
  overflow: hidden;
}
h2 {
  font-size: 14px;
  color: red;
}
::v-deep .el-card__body,
.el-main {
  padding: 8px;
}
ol {
  margin: 8px 0;

  li {
    font-size: 12px;
    color: red;
    margin: 6px 0;
  }
}
</style>
