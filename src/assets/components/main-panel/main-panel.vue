<template>
  <div class="m-16">
    <div v-for="skill in user.skills" :key="skill.id">
      <skills-component 
        :skill="skill">
      </skills-component>
    </div>
  </div>
</template>

<script>
  import SkillsComponent from './skills/skills-component.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      SkillsComponent
    },
    computed: mapState(['user'])
  }
</script>