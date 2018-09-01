<template>
  <div>
    <div class="flex my-10">
      <p>
        Sofware Development
      </p>
      <div class="ml-32 w-full">
        <technology-component></technology-component>
        <technology-component></technology-component>
      </div>
    </div>
  </div>
</template>

<script>
  import TechnologyComponent from '../../../shared/technology-component.vue'

  export default {
    components: {
      TechnologyComponent
    }
  }
</script>

<style scoped>

</style>