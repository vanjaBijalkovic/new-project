<template>
  <div class="w-full mt-4">
    <admin-panel></admin-panel>
  </div>
</template>

<script>
  import AdminPanel from './admin/admin-panel.vue'
  import store from '../store/store';

  export default {
    name: 'home',
    components: {
      AdminPanel
    },
    created() {
      store.dispatch('getUser');
    }
  }
</script>