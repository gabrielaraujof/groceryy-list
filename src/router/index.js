import Vue from 'vue';
import Router from 'vue-router';
import Lists from '@/pages/Lists';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lists',
      component: Lists,
    },
  ],
});
