import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routes.js'
import Vuex from 'vuex';
import store from './assets/store/store.js'

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
