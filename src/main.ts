import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VueI18n from 'vue-i18n';
import * as messages from '@/i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
/* tslint:disable:no-var-requires */
const fontawesome = require('@fortawesome/vue-fontawesome');

Vue.config.productionTip = false;

library.add(faMapMarkerAlt, faDotCircle);
Vue.component('FontAwesomeIcon', fontawesome.FontAwesomeIcon);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
