<template>
  <div
    class="py-6 lg:py-8"
    @click="addComponent('heading-bread')"
    id="heading-bread"
  >
    <div
      class="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between"
    >
      <div>
        <p class="flex items-center text-indigo-700 text-xs">
          <span>Portal</span>
          <span class="mx-2">&gt;</span>
          <span>Dashboard</span>
          <span class="mx-2">&gt;</span>
          <span>KPIs</span>
        </p>
        <h4 class="text-2xl font-bold leading-tight text-gray-800">
          Dashboard
        </h4>
      </div>
      <div class="mt-6 md:mt-0">
        <button
          class="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 px-5 py-2 text-sm"
        >
          Back
        </button>
        <button
          class="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
        >
          Edit Profile
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
