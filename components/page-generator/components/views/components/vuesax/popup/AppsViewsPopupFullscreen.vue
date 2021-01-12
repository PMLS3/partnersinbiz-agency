<!-- =========================================================================================
    File Name: PopupFullscreen.vue
    Description: Open popup in fullscreen
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Fullscreen" code-toggler>
    <p>
      the popup can be full screen you just have to add the property
      <code>fullscreen</code>
    </p>

    <div class="demo-alignment" @click="addComponent()">
      <vs-button @click="popupActive = true" color="primary"
        >Open fullscreen popup</vs-button
      >
      <vs-popup fullscreen title="fullscreen" :active.sync="popupActive">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
        inline: {
          fullscreen: true
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
