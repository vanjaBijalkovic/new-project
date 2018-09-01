import VueRouter from 'vue-router'
import LoginComponent from './assets/components/auth/login-component.vue'
import IndexComponent from'./assets/components/index-component.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: IndexComponent
  }
];

export default new VueRouter({routes});