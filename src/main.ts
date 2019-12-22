import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

import VueI18n from 'vue-i18n';
import * as messages from '@/i18n';
/* tslint:disable:no-var-requires */
const VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;

Vue.use(VueI18n);

Vue.use(VueScrollTo, {
  easing: 'ease-in-out',
  offset: -20,
});
Vue.directive('scroll-to', VueScrollTo);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});


Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
