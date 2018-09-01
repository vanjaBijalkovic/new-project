<template>
    <div class="bg-orange-lightest h-screen border-grey-light border pr-2">
      <div>
        <action-component :text="getMessage(true)"></action-component>
        <action-component :text="getMessage(false)"></action-component>
      </div>
      <div class="mt-6">
        <search-component></search-component>
      </div>
      <div class="mt-10">
        <details-component :title="getMessage(true)"></details-component>
      </div>
    </div>
</template>

<script>
  import ActionComponent from '../shared/action-component.vue'
  import SearchComponent from '../shared/search-component.vue'
  import DetailsComponent from './partials/details-component.vue'

  export default {
    components: {
      ActionComponent,
      SearchComponent,
      DetailsComponent
    },
    methods: {
      getMessage(state) {
        return state ? 
          'Sofware Development' :
          'Data Base'
      } 
    }
  }
</script>