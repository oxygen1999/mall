<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>


      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item.background"
                      class="title-item" :class="{active:index === currentIndex}"
                      @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name:"DetailNavBar",
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back();
    }
  },
  props:{},
  components:{
    NavBar,
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .title{
    display: flex;
    font-size: 12px;
  }
  .title-item{
    flex:1;
  }
  .active{
    color: var(--color-high-text);
    /* color: aqua; */
  }
  .back{
    margin-top: 7px;
  }
</style>