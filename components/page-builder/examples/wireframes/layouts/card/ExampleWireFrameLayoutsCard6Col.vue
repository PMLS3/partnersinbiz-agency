<template>
  <div
    class="flex flex-wrap lg:flex-no-wrap items-center justify-between w-full"
    @click="addComponent('layout-box-6col')"
    id="layout-box-6col"
  >
    <!-- Code block starts -->
    <div
      class="flex flex-col lg:flex-row w-full lg:w-1/2 items-start lg:items-center mr-0 lg:mr-8 mb-8 lg:mb-0 rounded bg-white shadow"
    >
      <div
        class="w-full lg:w-1/2 h-64 border-b lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l rounded-l bg-gray-100"
      ></div>
      <div class="w-full lg:w-1/2 h-64"></div>
    </div>
    <!-- Code block starts -->
    <!-- Code block ends -->
    <div
      class="flex flex-col lg:flex-row w-full lg:w-1/2 items-start lg:items-center rounded bg-white shadow"
    >
      <div class="w-full lg:w-1/2 h-64"></div>
      <div
        class="w-full lg:w-1/2 h-64 border-t lg:border-t-0 lg:border-b-0 lg:border-r lg:border-l rounded-r bg-gray-100"
      ></div>
    </div>
    <!-- Code block ends -->
  </div>
</template>

<script>
export default {
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
