<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:"NavBar",
  data(){
    return {
    }
  },
  methods:{},
  props:{},
  components:{},
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .nav-bar{
    /* 采用flex三栏布局 */
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    
  }
  .left, .right{
    width: 60px;
    /* background-color: red; */
    /* background-color: rgb(46, 220, 194);  */

  }
  .center{
    flex:1;
    /* background-color: rgb(46, 220, 194); 换个位置设置背景颜色*/
  }

</style>