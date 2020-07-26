<!--
 * @Author: angula
 * @Date: 2020-07-26 15:26:53
 * @LastEditTime: 2020-07-26 16:13:18
 * @FilePath: \vue\mall\src\components\content\goods\GoodsListItem.vue
--> 
<template>
  <div class="goods-item" @click="itemClick">
    <!-- <img :src="goodsItem.show.img" alt /> -->
    <img :src="showImage" alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$router.push("./detail/" + this.goodsItem.iid);
    }
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return [];
      }
    }
  },
  components: {},
  watch: {},
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.goods-item {
  padding-bottom: 40px;

  position: relative;
  width: 48%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>