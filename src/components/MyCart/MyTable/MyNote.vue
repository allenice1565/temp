<template>
  <div class="my-note">
    <div class="edit" v-if="this.edit">
      <el-tooltip
        class="item"
        effect="light"
        :content="content"
        placement="top"
        :disabled="!content"
      >
        <span>{{ content }}</span>
      </el-tooltip>

      <el-button @click="changeEditState">编辑</el-button>
    </div>
    <div class="finish" v-if="!this.edit">
      <el-input type="text" v-model="content"></el-input>
      <el-button @click="changeEditState">完成</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyNote",
  data() {
    return {
      edit: true,
      content: "",
    };
  },
  methods: {
    changeEditState() {
      this.edit = !this.edit;
    },
  },
};
</script>
<style scoped lang="less">
.my-note {
  // width: 200px;
}
.edit,
.finish {
  width: 200px;
  display: flex;
  justify-content: space-between;
  ::v-deep .el-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    padding: 5px;
    height: 24px;
    font-size: 14px;
    vertical-align: middle;
    margin-left: 10px;
  }
  span,
  ::v-deep .el-input {
    // flex: 1;
    width: 120px;
    height: 24px !important;
    // align-self: center;
    padding: 0;
  }
  ::v-deep .el-input__inner {
    height: 24px !important;
  }
  span {
    display: inline-block;
    // width: 120px;
    // overflow: hidden;
  }
}
.edit {
  span {
    font-size: 14px;
  }
}
</style>
