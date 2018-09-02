<template>
  <div class="mb-6">
    <div class="flex">
      <div>
        <p>
          {{ technology.name }}
        </p>
      </div>
      <div class="flex ml-auto mr-32">
        <div v-for="skillLevel in technology.skill_level" :key="skillLevel">
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
    },
    props: {
      technology: {
        required: false
      },
    },
  }
</script>