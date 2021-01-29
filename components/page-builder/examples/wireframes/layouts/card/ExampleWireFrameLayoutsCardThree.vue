<template>
  <div
    class="flex flex-wrap sm:flex-no-wrap items-center justify-between w-full"
    @click="addComponent('layout-box-three')"
    id="layout-box-three"
  >
    <div
      class="w-full sm:w-1/3 h-64 rounded-t sm:rounded-l sm:rounded-t-none shadow bg-white"
    ></div>
    <div class="w-full sm:w-1/3 h-64 shadow bg-white"></div>
    <div
      class="w-full sm:w-1/3 h-64 rounded-b sm:rounded-b-none shadow bg-white"
    ></div>
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
