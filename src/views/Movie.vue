<template>
  <div class="movie">
    <MovieMain/>
    <MovieSub/>
    <ScrollDown/>
  </div>
</template>
<script>
import ScrollDown from '@/components/ScrollDown.vue';
import MovieMain from '../components/MovieMain.vue';
import MovieSub from '../components/MovieSub.vue';

export default {
  components:{
    MovieMain,
    MovieSub,
    ScrollDown
  }
}
</script>
<style lang="scss" scoped>

</style>