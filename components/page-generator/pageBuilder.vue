<template>
  <div>
    <client-only>
      <components-edit @askParentToAddToList="addToList" />
      {{ component_list }}
      <mainGrid :schema="component_list" />
    </client-only>
  </div>
</template>

<script>
// import editComp from "@/components/page-generator/components_edit/index.vue"
import componentsEdit from '@/components/page-generator/components_edit/index'
// import mainGrid from '@/components/page-generator/components/grid/mainGrid'
import mainGrid from '@/components/page-generator/page_view/grid/mainGrid'

export default {
  props: {
    list2: {
      type: Array,
      required: true
    }
  },
  components: {
    componentsEdit,
    mainGrid
  },
  computed: {
    component_list() {
      return this.$store.state.page_builder.component_list
    }
  },

  methods: {
    addToList(data) {
      this.$emit('askParentToAddToList', data)
    }
  }
}
</script>

<style></style>
