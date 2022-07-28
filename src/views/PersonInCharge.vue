<template>
  <div class="my-main"></div>
</template>

<script>
// @ is an alias to /src
import MyTable from "@/components/MyCart/MyTable/MyTable.vue";
import MyPagination from "@/components/MyCart/MyPagination.vue";
export default {
  name: "PersonInCharge",
  components: {
    MyTable,
    MyPagination,
  },
};
</script>
<style scoped lang="less">
</style>
