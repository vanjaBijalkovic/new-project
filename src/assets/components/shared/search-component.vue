<template>
  <div class="mt-2 mb-2">
    <input class="w-5/6 ml-10 py-2 px-4 border-grey-light border focus:bg-white border-transparent focus:border-blue-light ..." 
      placeholder="Search skills"
      v-model="filterKey"
      @keyup.enter="emitSearchTerm">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        filterKey: ''
      }
    },
    methods: {
      emitSearchTerm() {
        this.$emit('on-search-finish', this.filterKey);
      }
    },
  }
</script>