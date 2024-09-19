import { createRouter, createWebHashHistory } from 'vue-router';
import Container from '@/views/Container.vue';
import Movie from '@/views/Movie.vue';
import PhotoPage from '@/views/PhotoPage.vue';
import Schedule from '@/views/Schedule.vue';

const routes = [
  {
    path: '/',
    component: Container
  },
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/photo',
    component: PhotoPage
  },
  {
    path: '/schedule',
    component: Schedule
  },

]

const router = createRouter({
  history : createWebHashHistory('/'),
  routes
});

export default router;