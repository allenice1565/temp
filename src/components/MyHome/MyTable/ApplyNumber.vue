<template>
  <div class="apply" @mouseenter="mEnter" @mouseleave="mLeave">
    <i @click="minus" class="el-icon-remove-outline"></i>
    <span v-show="!showInput">{{ number }}</span>

    <el-input
      ref="el-button"
      @blur="myBlur"
      @change="finishEdit"
      @focus="myFocus"
      v-show="showInput"
      class="apply-input"
      type="number"
      :placeholder="number"
      v-model="number"
    ></el-input>
    <i @click="plus" class="el-icon-circle-plus-outline"></i>
  </div>
</template>
<script>
export default {
  name: "ApplyNumber",
  props: ["code"],
  data() {
    return {
      number: 0,
      mouseIn: false,
      isBlur: true,
    };
  },
  computed: {
    showInput() {
      return this.mouseIn || !this.isBlur;
    },
  },
  watch: {
    number() {
      if (this.number < 0) {
        this.number = 0;
      }
      this.$store.commit("changeApplyNumber", {
        code: this.code,
        applyNumber: this.number,
      });
    },
  },
  methods: {
    plus() {
      this.number += 1;
    },
    minus() {
      this.number -= 1;
    },
    mEnter() {
      this.mouseIn = true;
    },
    mLeave() {
      this.mouseIn = false;
    },
    myBlur() {
      this.isBlur = true;
      console.log(this.$refs["el-button"].value);
      this.number = this.$refs["el-button"].value;
    },
    finishEdit() {
      this.isBlur = true;
    },
    myFocus() {
      this.isBlur = false;
    },
  },
};
</script>
<style scoped lang="less">
.apply {
  display: flex;
  justify-content: space-around;
  align-items: center;

  i {
    margin: 0 8px;
    font-size: 18px;
  }
  span {
    display: inline-block;
    width: 40px;
    overflow: hidden;
  }
  ::v-deep .apply-input {
    // width: 40px;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    padding: 0;

    /*添加css样式*/
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }

    .el-input__inner {
      padding: 0 !important;
      height: 30px;
      line-height: 30px;
      -moz-appearance: textfield;
      font-size: 12px !important;
      text-align: center;
    }
  }
}
</style>
