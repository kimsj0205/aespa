<template>
  <div>
    <div class="PhotoItem">
      <button @click="closePopup()">X</button>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }"
        :navigation="true"
        :modules="modules"
      >
      <swiper-slide v-for="i in giselle" :key="i">
        <div class="img-box">
          <img :src="`${i.src}`" />
        </div>
      </swiper-slide>
      </swiper>
  </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
// import required modules
import { EffectFlip,Navigation } from 'swiper/modules';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    title:{
      type:Array,
      default:''
    }
  },  
  data(){
    return {
      isActive: false,
      disActive: true,
      giselle:[
      {id : '1', src: require('../assets/giselle1.jpg')},
      {id : '2', src: require('../assets/giselle2.jpg')},
      {id : '3', src: require('../assets/giselle3.jpg')},
      {id : '4', src: require('../assets/giselle4.jpg')},
      {id : '5', src: require('../assets/giselle5.jpg')},
      {id : '6', src: require('../assets/giselle6.jpg')},
      {id : '7', src: require('../assets/giselle7.jpg')},
      {id : '8', src: require('../assets/giselle8.jpg')},
      ],
    }
  },
  setup() {
    return {
      modules: [EffectFlip, Navigation],
    };
  },
  methods:{
      closePopup: function(){
        this.$emit('close-popup')
      },
      openImg : function(){
        title === title ? this.isActive : !this.isActive
      }
    },
  }
</script>
<style lang="scss" scoped>
div{
  height:100%;
  .PhotoItem{
    height:100%;
    button{
      z-index:50;
      position:fixed;
      color:#fff;
      background:blue;
      padding:10px;
      font-size:20px;
      top:10px;
      right:30px;
    }
    .swiper {
        height:100%;
        margin:0;
        padding:0;
        padding: 20px;
        box-sizing: border-box;
        background-color:#00000083
    }
    
    .swiper-slide{
      background-position: center;
      background-size: cover;
      height:100%;
      .img-box{
        height:100%; 
      }
        img {
          padding-top:10px;
          border:10px solid #ffffff;
          height:100%;
          padding:calc(20 / 1800* 100* var(--unit));
          display: block;
          margin:0 auto;
          object-fit:contain;
          box-sizing:border-box
      }
    }
  }
}

</style>