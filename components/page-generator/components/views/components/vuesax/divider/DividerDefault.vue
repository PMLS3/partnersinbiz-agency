<!-- =========================================================================================
    File Name: DividerDefault.vue
    Description: Rendering of default divider
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler @click="addComponent()">
    <p>
      You can add a line to divide with the component <code>vs-divider</code>
    </p>

    <div class="op-block mt-5">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      <vs-divider />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      isDeleted: false
    }
  },
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'divider',
        content: {
          title: 'Divider'
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
