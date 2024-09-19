<template>
  <div class="movie-main">
    <h3>MOVIE</h3>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
  .movie-main{
    background:url(../assets/movie_main_bg.jpg) no-repeat top/cover;
    filter: grayscale(80%);
    width:100%;
    height:calc(100vh - 130px);
    h3{
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
      font-size:100px;
      color:#fff;

    }
  }
</style>