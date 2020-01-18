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
    path: '/patient',
    name: 'patient',
    component: () => import(/* webpackChunkName: "patient" */ '@/pages/Patient.vue'),
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "report" */ '@/pages/Report.vue'),
    children: [
      {
        path: '',
        redirect: 'text-report',
      },
      {
        path: 'text-report',
        name: 'text-report',
        component: () => import(/* webpackChunkName: "text-report" */ '@/components/Report/TextReportContent.vue'),
      },
      {
        path: 'full-report',
        name: 'full-report',
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
  routes,
});

export default router;
