<template>
  <div>
    <div class="flex my-10">
      <div class="w-64">
        {{ category.name }}
      </div>
      <div class="ml-32 w-full">
        <div v-for="technology in technologies" :key="technology.id">
          <technology-component v-if="isInSelectedCategory(technology)" 
            :technology="technology">
          </technology-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TechnologyComponent from '../../../shared/technology-component.vue'
import { mapState } from 'vuex';

  export default {
    components: {
      TechnologyComponent
    },
    props: {
      category: {
        required: false
      }
    },
    computed: {
      technologies() {
        return this.user.technologies 
      },
      ...mapState(['user'])
    },
    methods: {
      isInSelectedCategory(technology) {
        return technology.category_id === this.category.id
      }
    },
  }
</script>
