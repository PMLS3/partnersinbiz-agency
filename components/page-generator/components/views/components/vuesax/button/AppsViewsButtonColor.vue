<!-- =========================================================================================
    File Name: ButtonColor.vue
    Description: Change color of buttons
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>
      There are cases in which we need something more personalized like a
      specific color, you can change the color of the button with the property
      <code>color</code> giving it as a value the color
    </p>

    <vs-alert icon="warning" active="true" color="warning" class="mt-5">
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span
        >If you need a gradient type button, to assign the color you have to use
        the property <code>gradient-color-secondary</code></span
      >
    </vs-alert>

    <div class="demo-alignment">
      <input type="color" v-model="colorx" name="" value="" />
      <input type="color" v-model="colorx2" name="" value="" />
      <vs-button :color="colorx" type="filled" @click="addComponent('filled')"
        >Color</vs-button
      >
      <vs-button :color="colorx" type="border" @click="addComponent('border')"
        >Color</vs-button
      >
      <vs-button :color="colorx" type="flat" @click="addComponent('flat')"
        >Color</vs-button
      >
      <vs-button :color="colorx" type="line" @click="addComponent('line')"
        >Color</vs-button
      >
      <vs-button
        :color="colorx"
        :gradient-color-secondary="colorx2"
        type="gradient"
        @click="addComponent('gradient')"
        >Color</vs-button
      >
      <vs-button :color="colorx" type="relief" @click="addComponent('relief')"
        >Color</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      colorx: '#9ecc38',
      colorx2: '#3EC9D6'
    }
  },
  methods: {
    addComponent(type) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          color: this.colorx,
          colorx2: this.colorx2,
          type: type
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder',
        place: []
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
