<template>
  <div>
    <div class="flex my-10">
      <p class="font-semibold">Techicals Skills</p>
      <a class="ml-10 no-underline text-purple" href="#">Change</a>
    </div>
    <div>
      <skill-details></skill-details>
      <skill-details></skill-details>
    </div>
  </div>
</template>

<script>
  import SkillDetails from './skill-details-component.vue'

  export default {
    components: {
      SkillDetails
    }
    
  }
</script>

<style scoped>

</style>