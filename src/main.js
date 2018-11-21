// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { Vue, spritejs } from 'sprite-vue';
import { install } from 'sprite-extend-shapes';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

spritejs.use(install);
console.log(spritejs);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
