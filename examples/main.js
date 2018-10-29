import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/bulma.sass';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router.config';


import demoBlock from './components/demo-block.vue';
import TUUI from '../packages/index';

Vue.use(VueRouter);
Vue.use(TUUI);
Vue.component('demo-block', demoBlock);

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'hash',
  // base: __dirname,
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
