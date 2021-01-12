<!-- =========================================================================================
    File Name: ButtonGradient.vue
    Description: Give gradient to button background
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Gradient" code-toggler>
    <p>
      To add a type of button with edges we change the value of
      <code>type</code> by: <code>gradient</code>
    </p>

    <div class="demo-alignment">
      <vs-button type="gradient" @click="addComponent('primary', 'gradient')"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="gradient"
        @click="addComponent('success', 'gradient')"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="gradient"
        @click="addComponent('danger', 'gradient')"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="gradient"
        @click="addComponent('warning', 'gradient')"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="gradient"
        @click="addComponent('dark', 'gradient')"
        >Dark</vs-button
      >
      <vs-button
        color="#3dd495"
        gradient-color-secondary="rgb(130, 207, 23)"
        type="gradient"
        @click="addComponent('#3dd495', 'gradient')"
        >Dark</vs-button
      >
      <vs-button
        type="gradient"
        @click="addComponent('primary', 'gradient', true)"
        >Disabled</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type, disabled) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          color: color,
          type: type,
          colorx2: '#3EC9D6'
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
