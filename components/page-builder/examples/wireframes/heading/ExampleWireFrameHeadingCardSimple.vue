<template>
  <div
    class="py-6 bg-gray-200"
    @click="addComponent('heading-simple')"
    id="heading-simple"
  >
    <div class="container mx-auto w-5/6 sm:w-2/3 h-full">
      <div
        class="w-full bg-white py-5 flex items-center justify-between px-5 sm:px-10 shadow rounded-t"
      >
        <div class="mb-0">
          <h2 class="text-gray-800 text-lg font-bold">Job Postings</h2>
        </div>
        <button
          class="font-normal bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none rounded text-white px-6 py-2 text-sm"
        >
          Create New
        </button>
      </div>
    </div>
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
