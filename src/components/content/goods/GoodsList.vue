<!--
 * @Author: angula
 * @Date: 2020-07-15 12:56:49
 * @LastEditTime: 2020-07-26 16:12:51
 * @FilePath: \vue\mall\src\components\content\goods\GoodsList.vue
--> 
<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.background" :goodsItem="item" />
    <!-- 删除{{goods,否则会导致页面布局混乱}} -->
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";

export default {
  name: "GoddsList",
  data() {
    return {};
  },
  methods: {},
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  justify-content: space-evenly;
}
</style>