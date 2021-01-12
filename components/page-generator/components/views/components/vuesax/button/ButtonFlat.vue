<!-- =========================================================================================
    File Name: ButtonFlat.vue
    Description: Flat buttons (no border, no background)
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Flat" code-toggler>
    <p>
      To add a type of button with edges just change the prop
      <code>type</code> to <code>flat</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="flat"
        @click="addComponent('primary', 'flat')"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="flat"
        @click="addComponent('success', 'flat')"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="flat"
        @click="addComponent('danger', 'flat')"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="flat"
        @click="addComponent('warning', 'flat')"
        >Warning</vs-button
      >
      <vs-button color="dark" type="flat" @click="addComponent('dark', 'flat')"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(62, 201, 214)"
        type="flat"
        @click="addComponent('rgb(62, 201, 214)', 'flat')"
        >RGB</vs-button
      >
      <vs-button type="flat" @click="addComponent('primary', 'flat', true)"
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
          disabled: disabled
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
