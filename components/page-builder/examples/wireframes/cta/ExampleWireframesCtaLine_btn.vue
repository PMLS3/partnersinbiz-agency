<template>
  <section
    class="text-gray-700 body-font"
    @click="addComponent('cta-line')"
    id="cta-line"
  >
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <h1
          class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900"
        >
          Slow-carb next level shoindxgoitch ethical authentic, scenester
          sriracha forage.
        </h1>
        <button
          class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
        >
          Button
        </button>
      </div>
    </div>
  </section>
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
