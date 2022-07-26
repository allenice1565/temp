<template>
  <div class="apply">
    <i class="el-icon-remove-outline"></i>
    <input class="apply-input" type="text" />
    <i class="el-icon-circle-plus-outline"></i>
  </div>
</template>
<script>
export default {
  name: "ApplyNumber",
};
</script>
<style scoped lang="less">
.apply {
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    margin: 0 8px;
    font-size: 18px;
  }
}

.apply-input {
  width: 30px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
</style>
