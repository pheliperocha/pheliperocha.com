import clickOutside from '../directives/click-ouside';
import { VueConstructor } from 'vue';

const GlobalDirectives = {
  install(Vue: VueConstructor) {
    Vue.directive('click-outside', clickOutside);
  }
};

export default GlobalDirectives;
