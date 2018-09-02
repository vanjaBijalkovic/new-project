<template>
  <div>
    <button @click="selected()"
      class="w-5/6 bg-white hover:bg-grey-lightest ml-10 mr-1 text-xs py-2 px-4 border border-grey-light rounded shadow mt-2">
      {{ category.name }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      category: {
        required: true
      }   
    },
    computed: {
      buttonText() {
        return this.text;
      }
    },
    methods: {
      selected() {
        this.$emit('category-selected', this.category.id)
      }
    },
  }
</script>