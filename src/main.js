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
  apiKey: 'AIzaSyAk9ziLGf87f-I3NcIEDLn06T7TJWQIKPA',
  authDomain: 'azchao-fitness.firebaseapp.com',
  databaseURL: 'https://azchao-fitness.firebaseio.com',
  projectId: 'azchao-fitness',
  storageBucket: 'azchao-fitness.appspot.com',
  messagingSenderId: '796038450123',
  appId: '1:796038450123:web:5854a72e83624270f0444e',
  measurementId: 'G-1WCWZYQT28',
};

firebase.initializeApp(config);

askForPermissionToReceiveNotifications();

window.addEventListener('offline', () => {
  /* eslint-disable no-console */
  console.log('The network connection has been lost.');
  store.commit('SET_NETWORK_STATUS', { status: false });
});

window.addEventListener('online', () => {
  /* eslint-disable no-console */
  console.log('You are now connected to the network.');
  store.commit('SET_NETWORK_STATUS', { status: true });
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
