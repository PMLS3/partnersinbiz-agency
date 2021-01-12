<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS

========================================================================================== -->

<template>
  <div style="width: 100%">
    <ComponentGenerator
      v-for="(field, index) in schema"
      :key="index"
      :schema="field"
    />
  </div>
</template>

<script>
export default {
  name: 'mainGrid',

  components: {},
  data() {
    return {
      popup: false,
      field: {},
      index: 0,
      styleData: {
        border: '1px solid black',
        'min-height': '50px',
        position: 'relative',
      },
    }
  },
  props: ['schema'],

  methods: {
    add(field, index) {
      this.field = field
      this.index = index

      let payload = {
        active_card: true,
        component_show: 'grid',
        index: index,
        mainIndex: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
    edit(field, index) {
      let payload = {
        active_card: true,
        component_show: 'grid',
        schema: field,
        index: index,
        mainIndex: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
<style lang="scss">
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
