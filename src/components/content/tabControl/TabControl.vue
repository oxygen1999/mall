<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.background" 
          class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  data(){
    return {
      currentIndex:0,
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{},
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .tab-control{
    display: flex;
    font-size: 14px;
    text-align: center;
    background-color: rgb(222, 241, 228);
  }

  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>