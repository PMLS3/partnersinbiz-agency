<template>
  <div
    class="max-w-8xl mx-auto container py-8"
    @click="addComponent('nav-pagfirst')"
    id="nav-pagfirst"
  >
    <ul class="flex justify-center items-center">
      <li>
        <span
          class="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none mr-3"
          >First</span
        >
      </li>
      <li>
        <span
          class="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none"
          >1</span
        >
      </li>
      <li>
        <span
          class="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none"
          >2</span
        >
      </li>
      <li>
        <span
          class="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none"
          >...</span
        >
      </li>
      <li>
        <span
          class="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none"
          >6</span
        >
      </li>
      <li>
        <span
          class="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none"
          >7</span
        >
      </li>
      <li>
        <span
          class="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none ml-3"
          >Last</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FirstLast',
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
