<template>
  <div class="my-note" @mouseenter="hover" @mouseleave="noHover">
    <div ref="myText" class="my-text" v-show="!isShowButton">{{ content }}</div>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      ref="my-input"
      class="my-input"
      v-model="content"
      v-show="isShowButton"
      @focus="myFocus"
      @blur="finishInput"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "MyNote",
  data() {
    return {
      content: "",
      isHover: false,
      isBlur: true,
    };
  },
  props: ["code"],
  watch: {
    content() {
      this.$store.commit("changeNote", {
        code: this.code,
        content: this.content,
      });
      // console.log(this.content);
      // console.log(this.code);
    },
  },
  computed: {
    isShowButton() {
      return this.isHover || !this.isBlur;
    },
  },
  methods: {
    hover() {
      this.isHover = true;
    },
    noHover() {
      this.isHover = false;
    },
    myFocus() {
      this.isBlur = false;
    },

    finishInput() {
      this.isBlur = true;
      this.$refs["my-input"].blur();
    },
  },
};
</script>
<style scoped lang="less">
.my-note {
  width: 100%;
  min-height: 40px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  .my-text {
    width: fit-content;
    height: fit-content;
    min-height: 24px;
    text-align: left;
    line-height: 24px;
    vertical-align: middle;
    white-space: pre-wrap;
  }
  ::v-deep .my-input {
    width: 100%;
    min-height: 30px;
    font-size: 14px;
    line-height: 30px;
    .el-input__inner {
      min-height: 30px;
      padding: 0 5px;
    }
  }
}
</style>
