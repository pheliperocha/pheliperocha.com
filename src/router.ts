import Vue from 'vue';
import Router from 'vue-router';
import Header from './layout/Header.vue';
import Footer from './layout/Footer.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        header: Header,
        default: Home,
        footer: Footer,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
