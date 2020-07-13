<template>
  <div id='home'>
    <!-- <h1>购物街</h1> -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>







    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li> 
    </ul>
  </div>
</template>

<script>
// 导入首页导航栏组件
import NavBar from 'components/common/navbar/NavBar';
// 导入轮播组件
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// 写了index.js文件，这里就不需要再按上述导入，可以按照下面这个方法导入,index.js中做了导出
// import {Swiper,SwiperItem} from 'components/common/swiper'
// 我又做了一层封装，放置home.vue中内容过多不便于维护
import HomeSwiper from './childComps/HomeSwiper'
// 导入推荐展示组件 RecommendView
import RecommendView from './childComps/RecommendView'
// 导入FeatureView
import FeatureView from './childComps/FeatureView'

import TabControl from 'components/content/tabControl/TabControl'

// 导入请求数据getHomeMultidata
import {getHomeMultidata,getHomeGoods} from 'network/home';




export default {
  name:"Home",    
  data(){
    return {
      // result:null,
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'news':{page:0,list:[]},
        'sellnp':{page:0,list:[]},
      }
    }
  },
  methods:{},
  props:{},
  components:{
    NavBar,
    // 注册一下 Swiper SwiperItem，后面抽离了swiper 不再注册
    // Swiper,
    // SwiperItem,
    // 抽离之后注册一下HomeSwiper
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
  },
  watch:{},
  computed:{},
  created(){
    // 首页组件创建完成，发送网络请求

    // 1.请求多个数据
    getHomeMultidata().then(res=>{
      // console.log(res);
      // this.result = res;
      this.banners = res.data.banner.list;
      // 获取recommends数据
      this.recommends = res.data.recommend.list;

      // 2.请求商品数据
      getHomeGoods('pop',1).then(res=>{
        console.log(res);
      })
    })
  },
  mounted(){}
}
</script>
<style  scoped>
  #home{
    padding-top:44px ;
  }
  .home-nav{
    /* 背景颜色值 */
    background-color: var(--color-tint-one);
    /* 文字颜色值 */
    color:#fff;

    position: fixed;
    left: 0;
    right: 0;
    top:0;
    z-index: 9;
  }

  .tab-control{
    /* 会根据top的值，自动将position的值改为fixed 移动端适用很好，但是ie这些就不兼容了 */
    position: sticky;
    top: 44px;
  }
</style>