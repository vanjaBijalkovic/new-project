<template>
  <div class="flex">
    <div v-for="index in 5" :key="index">
      <box-component></box-component>
    </div>
  </div>
</template>

<script>
  import BoxComponent from './box-component.vue'

  export default {
    components: {
      BoxComponent
    }
  }
</script>

<style scoped>

</style>