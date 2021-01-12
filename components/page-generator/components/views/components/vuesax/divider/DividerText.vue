<!-- =========================================================================================
    File Name: DividerText.vue
    Description: Divider with text added between the line
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Text" code-toggler>
    <p>
      You can add a text between the line to delimit two elements and have a
      description for the user
    </p>

    <div class="op-block mt-5">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
      sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
      <vs-divider @click="addComponent()"> My Text </vs-divider>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'divider',
        content: {
          title: 'My Text'
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
