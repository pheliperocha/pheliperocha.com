import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import VueI18n from 'vue-i18n';
import * as messages from '@/i18n';

Vue.config.productionTip = false;

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
