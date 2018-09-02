<template>
  <div class="flex">
    <div v-for="index in 5" :key="index">
      <box-component :box-active="isBoxActive(index)" 
        :skill-level="index"
        @on-skill-level-selected="skillLevelSelected">
      </box-component>
    </div>
  </div>
</template>

<script>
  import BoxComponent from './box-component.vue'
  import { categories } from '../../constants/categories';
  import { technologies } from '../../constants/technologies';
  import { mapState } from 'vuex';

  export default {
    components: {
      BoxComponent
    },
    props: {
      technology: {
        required: false 
      },
      category: {
        required: true
      },
      skill: {
        required: false
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      isBoxActive(index) {
        const tech = this.getUserTechnologyIfExist();

        return tech && tech.id ? tech.skill_level >= index : false
      },
      getUserTechnologyIfExist() {
        return this.user.technologies.find(techno => techno.id === this.technology.id);
      },
      skillLevelSelected(event) {
        this.technology.skill_level = event;
        this.udpateUser();
      },
      udpateUser() {
        this.prepareUserDataForUpdate();
        this.$store.dispatch('updateUser', this.user);
      },
      prepareUserDataForUpdate() {
        var foundIndex = this.user.technologies.findIndex(t => t.id == this.technology.id);
        var foundCategoryIndex = this.user.categories.findIndex(c => c.id == this.category.id);
        var foundSkillIndex = this.user.skills.findIndex(s => s.id == this.skill.id);

        if (foundIndex >= 0) {
          this.user.technologies[foundIndex] = this.technology;
        } else if (foundIndex < 0 && foundCategoryIndex >=0) {
          this.user.technologies.push(this.technology);
        } else if (foundIndex < 0 && foundCategoryIndex < 0 && foundSkillIndex >= 0) {
          this.user.technologies.push(this.technology);
          this.user.categories.push(this.category);
        } else {
          this.user.technologies.push(this.technology);
          this.user.categories.push(this.category);
          this.user.skills.push(this.skill);
        }
      }
    }
  }
</script>
