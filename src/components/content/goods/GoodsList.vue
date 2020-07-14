<template>
  <div class=goods>
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
    {{goods}}
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

export default {
  name:"GoddsList",
  data(){
    return {
    }
  },
  methods:{},
  props:{
    goods:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    GoodsListItem,
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  justify-content: space-evenly;
}

</style>