<template>
  <div class="my-search">
    <span>用品名称：</span>
    <input
      class="search-input"
      v-model="searchContent"
      type="text"
      placeholder="请输入内容"
    />
    <el-button @click="goSearch">查询</el-button>
    <el-button>重置</el-button>
    <!-- <el-button>加入清单</el-button> -->
    <!-- <i class="el-icon-shopping-cart-2 cart"></i> -->
  </div>
</template>

<script>
import { search } from "@/api/index.js";
export default {
  name: "MySearch",
  data() {
    return {
      searchContent: "",
    };
  },
  methods: {
    goSearch() {
      if (!this.searchContent) {
        let data = search({
          type: "search1",
          search: this.searchContent,
        });
        data.then((res) => {
          // console.log("请求成功，这是请求结果");
          // console.log(res);
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-search {
  // font-size: 12px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 40px;
  // border-bottom: 1px solid #ccc;

  .search-input {
    width: 200px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding-left: 10px;

    ::placeholder {
      color: green;
    }
  }

  .el-button {
    margin-left: 20px;
    padding: 10px 15px;
    text-align: center;
    vertical-align: center;
  }
  .icon-gouwugouwuchedinggou {
    font-size: 100px;
    color: green;
  }
}
</style>
