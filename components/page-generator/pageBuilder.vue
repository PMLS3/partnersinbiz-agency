<template>
  <div>
    <client-only>
      <ComponentsEdit @askParentToAddToList="addToList" class="mt-24" />
      {{ component_list }}
      <PageGeneratorMainGrid :schema="component_list" />
    </client-only>
  </div>
</template>

<script>
// import editComp from "@/components/page-generator/components_edit/index.vue"
// import mainGrid from '@/components/page-generator/components/grid/mainGrid'
// import mainGrid from '@/components/page-generator/page_view/grid/MainGrid'

export default {
  props: {
    list2: {
      type: Array,
      required: true,
    },
  },
  components: {
    // mainGrid,
  },
  computed: {
    component_list() {
      return this.$store.state.page_builder.component_list
    },
  },

  methods: {
    addToList(data) {
      this.$emit('askParentToAddToList', data)
    },
  },
}
</script>
