<!-- =========================================================================================
    File Name: ButtonLineDown.vue
    Description: Buttons with underline
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Line Down" code-toggler>
    <p>
      To add a type of button with edges we change the value of
      <code>type</code> by: <code>line</code>
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span
        >you can change the position of the line up with the property
        line-position="top". You can also change the way the line appears on
        mouse hover with the property line-origin using the allowed values:
        <strong>left, center(default) or right</strong></span
      >
    </vs-alert>

    <div class="demo-alignment">
      <vs-button type="line">Primary</vs-button>
      <vs-button
        type="line"
        line-origin="left"
        color="success"
        @click="addComponent('success', 'line', 'left', '')"
        >Success</vs-button
      >
      <vs-button
        type="line"
        line-origin="right"
        color="danger"
        @click="addComponent('danger', 'line', 'right', '')"
        >Danger</vs-button
      >
      <vs-button
        type="line"
        line-position="top"
        line-origin="left"
        color="warning"
        @click="addComponent('warning', 'line', 'top', 'left')"
        >Warning</vs-button
      >
      <vs-button
        type="line"
        line-position="top"
        line-origin="right"
        color="dark"
        @click="addComponent('dark', 'line', 'top', 'right')"
        >Dark</vs-button
      >
      <vs-button
        type="line"
        disabled
        @click="addComponent('success', 'line', 'left', '')"
        >Disabled</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type, line_origin, line_position) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          radius: radius,
          color: color,
          type: type,
          icon_pack: icon_pack,
          line_origin: line_origin,
          line_position: line_position
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
