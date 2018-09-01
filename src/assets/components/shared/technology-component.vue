<template>
  <div class="mb-6">
    <div class="flex">
      <div>
        <p>
          Java
        </p>
      </div>
      <div class="flex ml-auto mr-32">
        <div v-for="index in 4" :key="index">
          <small-box></small-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SmallBox from './small-box-component.vue'

  export default {
    components: {
      SmallBox
    }
  }
</script>

<style scoped>

</style>