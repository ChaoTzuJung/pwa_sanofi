import Vue from 'vue';
import vClickOutside from 'v-click-outside';
import Loading from 'vue-loading-overlay';

import App from './App.vue';
import router from './router';
import store from './store';

// NOTE: 無法用在 .js 使用 alias @ 這是因為eslint-loader不能解析@的緣故
import './assets/global.scss';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(vClickOutside);
Vue.component('Loading', Loading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
