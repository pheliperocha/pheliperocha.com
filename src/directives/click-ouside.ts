import { VNodeDirective } from 'vue';

export default {
  bind: (el: any, binding: VNodeDirective, vnode: any) => {
    const clickOutsideEvent = (event: any) => {
      if (!(el === event.target || el.contains(event.target))) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', clickOutsideEvent);
  },
  unbind: (el: any) => {
    document.body.removeEventListener('click', el.clickOutsideEvent);
  }
};
