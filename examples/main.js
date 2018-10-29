import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/bulma.sass';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

import demoBlock from './components/demo-block.vue';
import TUUI from '../packages/index';

Vue.component('demo-block', demoBlock);
Vue.use(TUUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
