<template>
  <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'tabBar',
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
#tab-bar{
    display:flex;
    /* 添加背景色 */
    background-color: #f6f6f6;
    /* 将之放置下方 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 1px rgba(100, 100,100, .2);
    
    z-index: 15;
  }
   
</style>