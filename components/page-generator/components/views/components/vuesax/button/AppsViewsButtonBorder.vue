<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Border" code-toggler>
    <p>
      To add a type of button with edges we change the value of
      <code>border</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="border"
        @click="addComponent('primary', 'border')"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="border"
        @click="addComponent('success', 'border')"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="border"
        @click="addComponent('danger', 'border')"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="border"
        @click="addComponent('warning', 'border')"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="border"
        @click="addComponent('dark', 'border')"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(11, 189, 135)"
        type="border"
        @click="addComponent('rgb(11, 189, 135)', 'border')"
        >RGB</vs-button
      >
      <vs-button type="border" @click="addComponent('success', 'border')"
        >Disabled</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type) {
      let vm = this
      let payload = []
      let place = this.$store.state.page_builder.place

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          color: color,
          type: type
        },
        place: place
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
