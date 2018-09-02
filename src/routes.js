import VueRouter from 'vue-router'
import IndexComponent from'./assets/components/index-component.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: IndexComponent
  }
];

export default new VueRouter({routes});