<template>
  <div id='home'>
    <!-- <h1>购物街</h1> -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:"Home",    
  data(){
    return {
    }
  },
  methods:{},
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
<style  scoped>
  .home-nav{
    background-color: var(--color-tint-one);
    color:#fff;
  }
</style>