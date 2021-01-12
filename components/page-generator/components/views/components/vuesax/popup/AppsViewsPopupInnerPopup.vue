<!-- =========================================================================================
    File Name: PopupInnerPopup.vue
    Description: create inner popup
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Inner Popup" code-toggler>
    <p>You can add one popup inside another</p>

    <div class="demo-alignment" @click="addComponent()">
      <vs-button @click="popupActive2 = true" color="primary" type="filled"
        >Open Popup</vs-button
      >

      <vs-popup
        classContent="popup-example"
        title="Lorem ipsum dolor sit amet"
        :active.sync="popupActive2"
      >
        <vs-input
          class="inputx mb-3"
          placeholder="Placeholder"
          v-model="value1"
        />
        <vs-input
          disabled
          class="inputx mb-3"
          placeholder="Disabled"
          v-model="value2"
        />
        <vs-button @click="popupActive3 = true" color="primary" type="filled"
          >Open Inner Popup</vs-button
        >

        <vs-popup title="Inner popup" :active.sync="popupActive3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </vs-popup>
      </vs-popup>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      popupActive2: false,
      popupActive3: false
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
