<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Div" code-toggler @click="addComponent()">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <div class="btn-group"></div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent() {
      let payload = []
      payload.push({
        title: 'divi',
        content: {
          name: 'Div',
        },
        children: [],
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder',
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    },
  },
}
</script>
