<template>
  <div class="ml-1">
    <div class="h-6 w-6 bg-grey-light border-grey-darkest border-2"
      :class="{'bg-teal-light' : boxActive}"
      @click="selectSkillLevel"></div>
  </div>
</template>

<script>
  export default {
    props: {
      boxActive: {
        required: true 
      },
      skillLevel: {
        required: true
      }
    },
    methods: {
      selectSkillLevel() {
        this.$emit('on-skill-level-selected', this.skillLevel)
      }
    },
  }
</script>
