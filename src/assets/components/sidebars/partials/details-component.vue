<template>
  <div class="py-2 ml-10">
    <div class="text-base">
      {{ componentTitle }}
    </div>
    <div class="py-10 mr-4">
      <div class="flex justify-between"
        v-for="technology in technologies" :key="technology.id">
        <p class="text-sm m-2">
          {{ technology.name }}
        </p>
        <div class="flex m-1">
          <boxes-component 
            :technology="technology"
            :category="category"
            :skill="skill">
          </boxes-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BoxesComponent from '../../shared/boxes-component.vue'
  import { mapState } from 'vuex'
  
  export default {
    components: {
      BoxesComponent
    },
    props: {
      technologies: {
        type: Array,
        required: false
      },
      category: {
        required: false
      },
      skill: {
        required: false
      }
    },
    computed: {
      componentTitle() {
        return this.category.name; 
      },
      ...mapState(['user'])
    }
  }
</script>
