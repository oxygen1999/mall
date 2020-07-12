<template>
 <swiper>
      <!-- 现在v-for得使用必须要加:key -->
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
// 导入Swiper SwiperItem
import {Swiper,SwiperItem} from 'components/common/swiper' 
export default {
  name:"HomeSwiper",
  data(){
    return {
    }
  },
  methods:{},
  props:{
    banners:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  watch:{},
  computed:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>