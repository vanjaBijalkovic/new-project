<template>
    <div class="bg-orange-lightest h-screen border-grey-light border pr-2">
      <div v-if="isSkillSelected">
        <div v-for="category in categories" :key="category.id">
          <action-component 
            :category="category"
            @category-selected="selectCategory($event)">
          </action-component>
        </div>
      </div>
      <div class="mt-6" v-if="isSkillSelected && isCategorySelected">
        <search-component @on-search-finish="onSearchFinish"></search-component>
      </div>
      <div class="mt-10" v-if="isSkillSelected && isCategorySelected">
        <details-component :category="selectCategoryDetails" 
          :technologies="filteredTechnologies"
          :skill="skill">
        </details-component>
      </div>
    </div>
</template>

<script>
  import ActionComponent from '../shared/action-component.vue'
  import SearchComponent from '../shared/search-component.vue'
  import DetailsComponent from './partials/details-component.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      ActionComponent,
      SearchComponent,
      DetailsComponent
    },
    data() {
      return {
        skill: {},
        categories: [],
        technologies: [],
        category: {},
        term: ''
      }
    },
    computed: {
      isSkillSelected() {
        this.skill = this.$store.getters.selectedSkill;
        
        return this.skill.id
      },
      isCategorySelected() {
        return this.category.id
      },
      selectCategoryDetails() {
        return this.category;
      },
      filteredTechnologies() {
        if (this.term) {
          return this.getFilteredTechnologies()
        }
        return this.technologies;
      },
      ...mapState(['user'])
    },
    methods: {
      getCategories(skillId) {
        return this.$store.getters.categories.filter(category => {
          return category.skillId === skillId
        })
      },
      getTechnologies(categoryId) {
        this.technologies = this.$store.getters.technologies.filter(technology => technology.category_id === categoryId)
      },
      selectCategory(categoryId) {
        this.category =  this.categories.find(category => category.id === categoryId);
        this.getTechnologies(categoryId);
      },
      onSearchFinish(event) {
        this.term = event;
      },
      getFilteredTechnologies() {
        return this.technologies.filter(technology => {
          return technology.name.toLowerCase().indexOf(this.term.toLowerCase()) !== -1;         
        })
      }
    },
    watch: {
      skill(newValue, oldValue) {
        this.categories = this.getCategories(newValue.id);
        this.category = {};
        this.technologies = [];
        this.term = '';
      }
    },
  }
</script>