<template>
  <tab-bar>
      <tab-bar-item path="/home" ><!--activeColor="deepPink"-->
        <img slot="item-icon" src="~assets/img/tabbar/home.svg"> 
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg"> 
        <div slot="item-text">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/category" > <!--activeColor="deepPink"-->
        <img slot="item-icon" src="~assets/img/tabbar/category.svg"
        > 
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg"> 
        
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" ><!--activeColor="deepPink"-->
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
          
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" > <!--activeColor="deepPink"-->
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg"> 
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg"> 
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
const tabBar = () => import('components/common/tabbar/tabBar')
const tabBarItem = () => import('components/common/tabbar/tabBarItem')

export default {
  name:"MainTabBar",
  data(){
    return {
    }
  },
  methods:{},
  props:{},
  components:{
      tabBar,
      tabBarItem,
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>