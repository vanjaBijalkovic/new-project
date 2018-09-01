<template>
  <div class="m-16">
    <div v-for="index in 2" :key="index">
      <skills-component></skills-component>
    </div>
  </div>
</template>

<script>
  import SkillsComponent from './skills/skills-component.vue'

  export default {
    components: {
      SkillsComponent
    }
    
  }
</script>