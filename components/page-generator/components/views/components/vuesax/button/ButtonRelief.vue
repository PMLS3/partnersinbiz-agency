<!-- =========================================================================================
    File Name: ButtonRelief.vue
    Description: Button with edges
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Relief" code-toggler>
    <p>
      To add a type of button with edges we change the value of
      <code>type</code> by: <code>relief</code>
    </p>

    <div class="demo-alignment">
      <vs-button type="relief">Primary</vs-button>
      <vs-button color="success" type="relief">Success</vs-button>
      <vs-button color="danger" type="relief">Danger</vs-button>
      <vs-button color="warning" type="relief">warning</vs-button>
      <vs-button color="dark" type="relief">dark</vs-button>
      <vs-button color="rgb(187, 138, 200)" type="relief">Color</vs-button>
      <vs-button disabled type="relief">Disabled</vs-button>
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
          radius: radius,
          color: color,
          type: type,
          icon_pack: icon_pack,
          colorx2: '#3EC9D6',
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
