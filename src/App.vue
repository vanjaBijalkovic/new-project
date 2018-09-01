<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { user } from './assets/constants/authentication.js'
  export default {
    created() {
        this.$router.push({ name: 'home' });
    }    
  }
</script>