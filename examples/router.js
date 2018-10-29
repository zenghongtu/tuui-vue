import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import(/* webpackChunkName: "test" */ './docs/button.md'),
    },
    {
      path: '/box',
      name: 'box',
      component: () => import(/* webpackChunkName: "test" */ './docs/box.md'),
    },
    {
      path: '/content',
      name: 'content',
      component: () => import(/* webpackChunkName: "test" */ './docs/content.md'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import(/* webpackChunkName: "test" */ './docs/test.md'),
    },
  ],
});
