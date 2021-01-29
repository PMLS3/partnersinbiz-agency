<template>
  <transition name="backInDown" appear @click="addComponent('')" id="">
    <div><h1>Hello</h1></div>
  </transition>
</template>
<script>
export default {
  name: '',
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
