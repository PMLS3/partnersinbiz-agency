<!-- =========================================================================================
    File Name: ButtonTextColor.vue
    Description: Change color of text displayed on button
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Text Color" code-toggler>
    <p>
      You can change the font color of buttons, need only set the prop
      <code>text-color</code> with your color
    </p>

    <div class="demo-alignment">
      <vs-button type="border" text-color="#7367F0">Primary</vs-button>
      <vs-button type="border" text-color="#28C76F">Success</vs-button>
      <vs-button type="border" text-color="#EA5455">Danger</vs-button>
      <vs-button type="border" text-color="rgb(255,159,67)">Warning</vs-button>
      <vs-button type="border" class="demo-text-dark" text-color="rgb(30,30,30)"
        >Dark</vs-button
      >
      <vs-button type="border" text-color="tomato">Color</vs-button>
      <vs-button disabled text-color="rgb(0, 0, 0)">Disabled</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(disabled, radius, color, type, icon_pack, icon) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          disabled: disabled,
          radius: radius,
          color: color,
          type: type,
          colorx2: '#3EC9D6',
          icon_pack: icon_pack,
          icon: icon
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
