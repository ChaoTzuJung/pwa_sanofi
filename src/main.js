import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import Loading from 'vue-loading-overlay';
import * as firebase from 'firebase';
import { askForPermissionToReceiveNotifications } from 'utils/firebase';

import App from './App.vue';
import router from './router';
import store from './store';

// NOTE: 無法用在 .js 使用 alias @ 這是因為eslint-loader不能解析@的緣故
import './assets/global.scss';
import './service-worker';
import detectNotch from './configs/detectNotch';
import detectDevice from './configs/detectDevice';

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.component('Loading', Loading);
detectNotch();
detectDevice();

const config = {
  apiKey: 'AIzaSyCkPP8sZvfYG7spBQTEiCmPaPu7UY_TNHw',
  authDomain: 'pwa-native.firebaseapp.com',
  databaseURL: 'https://pwa-native.firebaseio.com',
  projectId: 'pwa-native',
  storageBucket: 'pwa-native.appspot.com',
  messagingSenderId: '873819253197',
  appId: '1:873819253197:web:0217aaf231329d121afc84',
  measurementId: 'G-MZJXXWCJYL',
};

firebase.initializeApp(config);

askForPermissionToReceiveNotifications();

/* eslint-disable global-require */
// if (window.isPwa && window.isMobileDevice) {
//   require('./assets/pwa.scss');
// }

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
