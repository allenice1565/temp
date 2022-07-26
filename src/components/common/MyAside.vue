<template>
  <div class="my-aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          collapse
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>办公用品申请</span>
            </template>
            <el-menu-item index="1-1">申请用品</el-menu-item>
            <el-menu-item index="1-2" :route="{ path: '/cart' }"
              >购物车</el-menu-item
            >
            <el-menu-item index="1-3">我的申请</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "MyAside",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-aside {
  // width: 200px;
  overflow: hidden;
  .tac {
    width: 100%;
    .el-col {
      width: 100%;
    }
    ::v-deep .el-submenu {
      .el-submenu__title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
