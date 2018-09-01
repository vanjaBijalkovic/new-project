<template>
  <div  class="container mx-auto flex">
    <div class="w-1/3">
      <left-sidebar></left-sidebar>
    </div>
    <div class="border-grey border-t-2 border-b-2 border-r-2 w-screen">
      <main-panel></main-panel>
    </div>
  </div>
</template>

<script>
  import LeftSidebar from '../sidebars/left-sidebar.vue'
  import MainPanel from '../main-panel/main-panel.vue'
  
  export default {
    components: {
      LeftSidebar,
      MainPanel
    }
  }
</script>