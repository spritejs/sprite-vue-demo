import { Vue } from 'sprite-vue';
// import Vue from 'vue';
import Router from 'vue-router';
import Sprite from '@/components/Sprite';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sprite',
      component: Sprite,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
