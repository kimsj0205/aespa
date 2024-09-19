<template>
  <div class="movie_item">
    <div class="youtube_area">
      <div id="player">
      <iframe
        width=846
        height=485
        :src="`https://www.youtube.com/embed/${MovieItemList.videoId}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer;"
        allowfullscreen
      />
  </div>
    </div>
    <div class="movie-text">
      <h3>{{ MovieItemList.title }}</h3>
      <p>{{ MovieItemList.ex }}</p>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";

export default  defineComponent({
  props:{
    MovieItemList:{
      type:Object,
      required :true,
      default:{}
    }
  }
})
</script>
<style lang="scss" scoped>
.movie_item{
  width:100%;
  height:calc(100vh - 220px);
  display:flex;
  justify-content: space-around;
  padding:100px 200px ;
  box-sizing: border-box;
  background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(../assets/movie1_bg.jpg);
  background-attachment: fixed;
  .movie-text{
    padding:10px;
    display:flex;
    width:30%;
    color:#fff;
    justify-content: center;
    flex-direction: column;
    h3{
      font-size:80px;
    }
    p{
      word-break: keep-all;
      font-size:16px;
      line-height:30px;
    }
  }
  &:nth-of-type(3){
    background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/movie2_bg.jpg);
    flex-direction: row-reverse;
  }
  &:nth-of-type(4){
    background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/movie3_bg.jpg);
  }
  &:nth-of-type(5){
    background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/movie4_bg.jpg);
    flex-direction: row-reverse;
  }
  &:nth-of-type(6){
    background-image:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(../assets/movie5_bg.jpg);
  }
}
</style>