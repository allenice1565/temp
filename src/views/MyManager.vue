<template>
  <div class="main">
    <MyCategory />
    <MySearch />
  </div>
</template>
<script>
import MySearch from "@/components/common/MySearch.vue";
import MyCategory from "@/components/common/MyCategory.vue";

export default {
  components: {
    MySearch,
    MyCategory,
  },
};
</script>
