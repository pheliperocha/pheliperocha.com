import '@/assets/vendor/nucleo/css/nucleo.css';
import '@/assets/vendor/font-awesome/css/font-awesome.css';
import '@/assets/scss/argon.scss';
import globalComponents from './globalComponents';
import globalDirectives from './globalDirectives';
import VueLazyload from 'vue-lazyload';
import { VueConstructor } from 'vue';

export default {
  install(Vue: VueConstructor) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  }
};
