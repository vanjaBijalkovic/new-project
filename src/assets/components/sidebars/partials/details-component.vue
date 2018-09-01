<template>
  <div class="py-2 ml-10">
    <div class="text-base">
      {{ componentTitle }}
    </div>
    <div class="py-10 mr-4">
      <div class="flex justify-between"
        v-for="index in 5" :key="index">
        <p class="text-sm m-2">
          Java
        </p>
        <div class="flex m-1">
          <boxes-component></boxes-component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BoxesComponent from '../../shared/boxes-component.vue'
  export default {
    components: {
      BoxesComponent
    },
    data() {
      return {
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
    },
    computed: {
      componentTitle() {
        return this.title; 
      }
    },
  }
</script>
