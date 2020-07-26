<template>
  <div>
    <swiper class="item">
      <swiper-item v-for="item in topImages" :key="item.background">
        <img :src="item" >
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  name:"DetailSwiper",
  data(){
    return {
    }
  },
  methods:{},
  props:{
    topImages:{
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
  .item{
    height: 300px;
    overflow: hidden;
  }
</style>