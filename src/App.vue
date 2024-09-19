<template>
  <div>
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Container from './views/Container.vue';
import Movie from '@/views/Movie.vue';
import PhotoPage from '@/views/PhotoPage.vue';
import Schedule from '@/views/Schedule.vue';
import Footer from './components/Footer.vue';


import '@/scss/custom.scss'

export default {
  name: 'App',
  components: {
    Header,
    PhotoPage,
    Movie,
    Schedule ,
    Container,
    Footer,
  }
}
</script>

<style>

</style>
