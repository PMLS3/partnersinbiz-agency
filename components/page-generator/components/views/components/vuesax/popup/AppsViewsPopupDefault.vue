<!-- =========================================================================================
    File Name: PopupDefault.vue
    Description: Rendering of default pagination
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>To implement the popup we have the component <code>vs-popup</code></p>

    <div class="demo-alignment " @click="addComponent()">
      <vs-button @click="popupActive = true" color="primary" type="filled"
        >Open Default popup</vs-button
      >

      <vs-popup
        class="holamundo"
        title="Lorem ipsum dolor sit amet"
        :active.sync="popupActive"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </vs-popup>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      popupActive: false
    }
  },
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'popup',
        content: {
          title: 'My Popup',
          quil:
            ' <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>'
        },

        class: 'holamundo'
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
