<template>
  <div class="my-table" ref="myTable">
    <div ref="imgBg"></div>
    <div ref="myClose"></div>
    <img ref="bigImg" src="" alt="" />
    <el-table
      ref="multipleTable"
      :data="tableData"
      stripe
      border
      tooltip-effect="dark"
      current-row-key
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="tableCellStyle"
      @cell-click="handleCellClick"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="40"> </el-table-column>
      <el-table-column
        label="用品类型"
        prop="type"
        width="100"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <i
            :class="
              'iconfont ' +
              (scope.row.type[0] === '个人用品'
                ? 'icon-geren'
                : 'icon-gonggonggongju')
            "
            style="margin: 0 4px; font-size: 14px"
          ></i>
          <span>{{ scope.row.type[1] }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="用品名称"
        prop="name"
        width="100"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="用品编码"
        prop="code"
        width="70"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="型号规格"
        prop="scale"
        width="200"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="单位"
        prop="unit"
        width="60"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="图片信息" prop="image" width="70">
        <template>
          <img
            src="@/assets/images/tyy.png"
            alt="未加载"
            style="width: 20px; height: 20px"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="库存数量"
        prop="totalNumber"
        width="70"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column
        label="建议数量"
        prop="suggestNumber"
        width="70"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="申请数量" width="120" show-overflow-tooltip>
        <template>
          <!-- {{ scope.row.date }} -->
          <ApplyNumber />
        </template>
      </el-table-column>
      <el-table-column label="备注">
        <template>
          <my-note />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ApplyNumber from "./ApplyNumber.vue";
import MyNote from "./MyNote.vue";
export default {
  name: "MyTable",
  components: { ApplyNumber, MyNote },
  data() {
    return {
      // tableLabel: {
      //   type: "用品类型",
      //   name: "用品名称",
      //   code: "用品编码",
      //   scale: "型号规格",
      //   unit: "单位",
      //   image: "图片信息",
      //   totalNumber: "库存数量",
      //   suggestNumber: "建议数量",
      // },
      tableData: [
        {
          id: "0",
          type: ["个人用品", "打印纸"],
          name: "A4纸",
          code: "001001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
        {
          id: "1",
          type: ["公共用品", "公共设备"],
          name: "会议室投影仪",
          code: "101001",
          scale: "长20cm，宽16cm",
          unit: "包",
          image: "/A4.png",
          totalNumber: 100,
          suggestNumber: 1,
        },
      ],
      applyNumber: [
        {
          code: null,
          applyNumber: null,
          remark: "",
        },
      ],
      multipleSelection: [],
    };
  },
  methods: {
    handleCellClick(row, column, cell, event) {
      if (column.label === "图片信息") {
        this.$refs.myClose.onclick = () => {
          this.$refs.imgBg.style.display = "none";
          this.$refs.bigImg.style.display = "none";
          this.$refs.myClose.style.display = "none";
          this.$refs.imgBg.className = "";
          this.$refs.bigImg.className = "";
          this.$refs.myClose.className = "i";
        };

        this.$refs.imgBg.className = "img-bg";
        this.$refs.bigImg.className = "big-img";
        this.$refs.myClose.className = "my-close iconfont icon-guanbi";
        this.$refs.imgBg.style.display = "block";
        this.$refs.bigImg.src = cell.children[0].children[0].src;
        this.$refs.bigImg.style.display = "block";
        this.$refs.myClose.style.display = "block";
      }
    },

    tableCellStyle({ row, column, rowIndex, columnIndex }) {
      // if(columnIndex in [0,3,5,6,7,8,9]){ //指定坐标
      let arr = [0, 3, 5, 6, 7, 8, 9, 10];
      let obj = {};
      if (arr.indexOf(columnIndex) > -1) {
        obj["text-align"] = "center";
      }
      return obj;
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.my-table {
  // overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img-bg {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 9;
  }

  .my-close {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(180px, -220px);
    font-size: 40px;
    color: #fff;
    background-color: rgb(249, 101, 101);
    border-radius: 50%;
    z-index: 999;
  }
  .big-img {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 400px;
    height: 400px;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 99;
  }

  ::v-deep .el-table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .el-button {
      margin: 20px;
    }

    .el-table__cell {
      min-height: 20px;
      height: fit-content;
      padding: 6px 0;
      font-size: 12px;
    }
    .cell {
      text-indent: 0;
    }
  }
}
.my-note {
  width: 100%;
  height: fit-content;
  min-height: 40px;
}
</style>
