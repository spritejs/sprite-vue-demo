import { Vue } from 'sprite-vue';
import Router from 'vue-router';
import Sprite from '@/components/Sprite';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Sprite',
      component: Sprite,
    },
  ],
});
