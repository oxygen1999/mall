<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name:"Scroll",
  data(){
    return {
      scroll:null
    }
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time);
    },
    finishPullUp() {
        this.scroll.finishPullUp()
      }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  components:{},
  watch:{},
  computed:{},
  created(){},
  mounted(){
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{  
      click:true,
      //不要写死，有的不需要全部监听
      // probeType:3,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    })
    // 2.监听滚动位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    // 监听上拉事件
    this.scroll.on('pullingUp',()=>{
      // console.log("上拉加载")
      this.$emit('pullingUp')
    })
    
  }
}
</script>
<style scoped>
</style>