import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VueI18n from 'vue-i18n';
import * as messages from '@/i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt, faArrowUp, faEnvelope, faAt } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
/* tslint:disable:no-var-requires */
const fontawesome = require('@fortawesome/vue-fontawesome');
const VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false;

library.add(
  faMapMarkerAlt,
  faDotCircle,
  faArrowUp,
  faGithub,
  faGithubAlt,
  faGithubSquare,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faEnvelope,
  faAt,
);
Vue.component('FontAwesomeIcon', fontawesome.FontAwesomeIcon);
Vue.use(VueI18n);

Vue.use(VueScrollTo, {
  easing: 'ease-in-out',
  offset: -20,
});

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
