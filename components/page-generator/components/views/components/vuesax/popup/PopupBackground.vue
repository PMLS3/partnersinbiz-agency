<!-- =========================================================================================
    File Name: PopupBackground.vue
    Description: Change background when popup opens
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Background" code-toggler>
    <p>
      You can change the background of the property with the property
      <code>background-color</code> or if you want to change the color of the
      popup you can use the property <code>background-color-popup</code>
    </p>

    <div class="demo-alignment" @click="addComponent()">
      <input v-model="colorx" type="color" name="" value="" />
      <vs-button
        text-color="rgba(0,0,0,0.5)"
        :color="colorx"
        @click="popupActive = true"
        type="filled"
        >Open background popup</vs-button
      >

      <vs-popup
        background-color="rgba(152,152,152,.7)"
        :background-color-popup="colorx"
        class=""
        title="Background"
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
      colorx: '#def1d1',
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
          background_color: 'rgba(152,152,152,.7)',
          background_color_popup: this.colorx
        },

        class: 'p-2'
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
