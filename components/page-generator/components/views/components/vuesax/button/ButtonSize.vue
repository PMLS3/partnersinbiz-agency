<!-- =========================================================================================
    File Name: ButtonSize.vue
    Description: Change size of button
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Size" code-toggler>
    <p>
      To define the size of button the directive is used <code>size</code>.
      there are three type of size: <code>large</code>, <code>default</code>,
      <code>small</code>. It is not important to specify the size when the
      button is of type <code>default</code>
    </p>

    <div class="demo-alignment">
      <vs-button size="large">Large</vs-button>
      <vs-button>Default</vs-button>
      <vs-button size="small">Small</vs-button>
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
          title: size
        },
        inline: {
          disabled: disabled,
          radius: radius,
          color: color,
          type: type,
          icon_pack: icon_pack,
          colorx2: '#3EC9D6',
          icon: icon
        },
        class: '',
        style: {}
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
