import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      keepAlive: false,
      level: 0,
    },
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue'),
  },
  {
    path: '/calculator',
    name: 'calculator',
    meta: {
      keepAlive: true,
      level: 1,
    },
    component: () => import(/* webpackChunkName: "calculator" */ '@/pages/Calculator.vue'),
  },
  {
    path: '/patient',
    name: 'patient',
    meta: {
      keepAlive: true,
      level: 2,
    },
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/Patient.vue'),
  },
  {
    path: '/report',
    name: 'report',
    meta: {
      keepAlive: true,
      level: 3,
    },
    component: () => import(/* webpackChunkName: "report" */ '@/pages/Report.vue'),
    children: [
      {
        path: '',
        redirect: 'text-report',
      },
      {
        path: 'text-report',
        name: 'text-report',
        meta: {
          keepAlive: true,
          level: 3,
        },
        component: () => import(/* webpackChunkName: "text-report" */ '@/components/Report/TextReportContent.vue'),
      },
      {
        path: 'full-report',
        name: 'full-report',
        meta: {
          keepAlive: true,
          level: 3,
        },
        component: () => import(/* webpackChunkName: "full-report" */ '@/components/Report/FullReportContent.vue'),
      },
      {
        path: '*',
        redirect: 'text-report',
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  if (to.meta.level > from.meta.level) {
    store.commit('CHANGE_DIRECTION', { direction: 'right' });
  } else if (to.meta.level < from.meta.level) {
    store.commit('CHANGE_DIRECTION', { direction: 'left' });
  } else {
    store.commit('CHANGE_DIRECTION', { direction: '' });
  }
  return next();
});
