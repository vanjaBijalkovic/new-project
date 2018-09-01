<template>
  <div>
    <button class="w-5/6 bg-white hover:bg-grey-lightest ml-10 mr-1 text-xs py-2 px-4 border border-grey-light rounded shadow mt-2">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        required: true
      }   
    },
    computed: {
      buttonText() {
        return this.text;
      }
    }
  }
</script>