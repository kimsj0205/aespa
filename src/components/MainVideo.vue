<template>
  <div class="video">
    <div class="youtube_area">
          <div id="player">
          <iframe
            width=100%
            height=100%
            :src="`https://www.youtube.com/embed/${state.videoId}?autoplay=1&mute=1&controls=0&loop=1&hd=1&iv_load_policy=3&modestbranding=1&playlist=5kwdU60Xqh8`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";
export default  defineComponent({
  setup() {
    const state = reactive({
      videoId: '5kwdU60Xqh8',
    });
    return {
      state,
    };
  },
  
})
</script>
<style lang="scss" scoped>
  #player{
    height:calc(100vh - 130px);
  }
</style>