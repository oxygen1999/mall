<template>
  <div id="home">
    <!-- <h1>购物街</h1> -->
    <nav-bar class="home-nav">
      <div slot="center">欢乐购</div>
    </nav-bar>

    <scroll class="content"
              ref="scroll" 
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore">
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view />
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"  v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
// 导入首页导航栏组件
import NavBar from "components/common/navbar/NavBar";
// 导入轮播组件
// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// 写了index.js文件，这里就不需要再按上述导入，可以按照下面这个方法导入,index.js中做了导出
// import {Swiper,SwiperItem} from 'components/common/swiper'
// 我又做了一层封装，放置home.vue中内容过多不便于维护
import HomeSwiper from "./childComps/HomeSwiper";
// 导入推荐展示组件 RecommendView
import RecommendView from "./childComps/RecommendView";
// 导入FeatureView
import FeatureView from "./childComps/FeatureView";


import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'


// 导入请求数据getHomeMultidata
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      // result:null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false,

    };
  },
  props: {},
  components: {
    NavBar,
    // 注册一下 Swiper SwiperItem，后面抽离了swiper 不再注册
    // Swiper,
    // SwiperItem,
    // 抽离之后注册一下HomeSwiper
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  watch: {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 首页组件创建完成，发送网络请求

    // 1.请求多个数据 与methods使用相同的名字需要使用this。
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 事件监听相关方法
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
      // console.log('11')
    },
    contentScroll(position){
      // console.log(position)
      this.isShowBackTop = -position.y > 1000
    },
    loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()
      },

    // -----网络请求相关方法
    getHomeMultidata() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        // 获取recommends数据
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        // 存放数据
        this.goods[type].list.push(...res.data.list);
        // 页码加1
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      });
    }
  },
  mounted() {}
};
</script>
<style  scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;;
}
.home-nav {
  /* 背景颜色值 */
  background-color: var(--color-tint-one);
  /* 文字颜色值 */
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  /* 会根据top的值，自动将position的值改为fixed 移动端适用很好，但是ie这些就不兼容了 */
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content{
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}


/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
</style>