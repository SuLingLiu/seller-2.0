// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from '@/router/index.js';
import VueResource from 'vue-resource';
import 'flex.css';
import '@/common/less/index.less';

Vue.use(VueResource);
FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app-box')

router.afterEach((to, from, next) => {
  document.title = to.name;
});

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');