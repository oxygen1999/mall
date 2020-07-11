<template>
    <div class="tab-bar-item" @click="itemClick">
        <slot v-if="!isActive" name="item-icon"></slot>
        <slot v-else  name="item-icon-active"></slot>
        <div :style="activeStyle"><slot  name="item-text"></slot></div>
        <!-- <img src="../../assets/img/tabbar/homeNew.png">  
        <div>首页</div> -->
    </div>

</template>

<script>
export default {
    name:'tabBarItem',
  data(){
    return {
        // isActive:true,
    }
  },
  methods:{
      itemClick(){
          this.$router.replace(this.path);
      }
  },
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
  },
  components:{},
  watch:{},
  computed:{
      isActive(){
        //   $route 当前活跃的对象
        // 当前活跃的路径是否包含该路径，活跃的为true，不活跃为false
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
          return this.isActive ? {color: this.activeColor}:{}
      }
  },
  created(){},
  mounted(){}
}
</script>
<style  scoped>
  
  .tab-bar-item{
    /* 水平排列 */
    flex:1;
    text-align: center;
    /* 高度一般为49px */
    height: 49px;

    font-size: 10px;

  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
 
</style>