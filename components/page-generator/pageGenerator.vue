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

  methods: {},
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/vuexy/pages/profile.scss';
</style>
