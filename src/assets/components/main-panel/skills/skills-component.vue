<template>
  <div>
    <div class="flex my-10">
      <p class="font-semibold">{{ skill.name }}</p>
      <a class="ml-10 no-underline text-purple" 
        @click="selectSkill()">Change</a>
    </div>
    <div v-for="category in categories" :key="category.id">
      <skill-details v-if="isInSelectedSkill(category)" 
        :category="category">
      </skill-details>
    </div>
  </div>
</template>

<script>
  import SkillDetails from './partials/skill-details-component.vue'
import { mapState } from 'vuex';

  export default {
    components: {
      SkillDetails
    },
    props: {
      skill: {
        required: false
      }
    },
    computed: {
      categories() {
        return this.user.categories; 
      },
      ...mapState(['user'])
    },
    methods: {
      selectSkill() {
        this.$store.dispatch('getSkill', this.skill.id);
        this.$store.dispatch('getCategories');
        this.$store.dispatch('getTechnologies');
      },
      isInSelectedSkill(category) {
        return category.skillId === this.skill.id
      }
    },
  }
</script>