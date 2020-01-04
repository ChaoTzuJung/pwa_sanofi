import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '@/pages/Calculator.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
