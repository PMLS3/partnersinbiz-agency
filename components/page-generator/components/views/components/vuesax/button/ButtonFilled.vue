<!-- =========================================================================================
    File Name: ButtonFilled.vue
    Description: Filled buttons(Buttons with background color)
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Filled" code-toggler>
    <p>
      To define the type of button the directive is used <code>type</code> with
      the value of some type of button like it can be: <code>filled</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="filled"
        @click="addComponent('primary', 'filled')"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="filled"
        @click="addComponent('success', 'filled')"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="filled"
        @click="addComponent('danger', 'filled')"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="filled"
        @click="addComponent('warning', 'filled')"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="filled"
        @click="addComponent('dark', 'filled')"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(62, 201, 214)"
        type="filled"
        @click="addComponent('rgb(62, 201, 214)', 'filled')"
        >RGB</vs-button
      >
      <vs-button type="filled" @click="addComponent('primary', 'filled', true)"
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
          type: type
          // disabled: disabled
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
