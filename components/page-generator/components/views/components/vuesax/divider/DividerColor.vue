<!-- =========================================================================================
    File Name: DividerColor.vue
    Description: Change Divider line color
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>
      You can change the color of the divider line with the property
      <code>color</code>, you can use the main colors or
      <strong>RGB</strong> and <strong>HEX</strong>.
    </p>

    <vs-alert icon="warning" active="true" color="warning" class="mt-5">
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <div class="op-block mt-5">
      <vs-divider color="Default" @click="addComponent('Default')">
        Default
      </vs-divider>
      <vs-divider color="primary" @click="addComponent('primary')">
        Primary
      </vs-divider>
      <vs-divider color="success" @click="addComponent('success')">
        Success
      </vs-divider>
      <vs-divider color="danger" @click="addComponent('danger')">
        Danger
      </vs-divider>
      <vs-divider color="warning" @click="addComponent('warning')">
        Warning
      </vs-divider>
      <vs-divider color="dark" @click="addComponent('dark')"> Dark </vs-divider>
      <vs-divider
        color="rgb(29, 222, 194)"
        @click="addComponent('rgb(29, 222, 194)')"
      >
        RGB
      </vs-divider>
      <vs-divider color="#ad289f" @click="addComponent('#ad289f')">
        HEX
      </vs-divider>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(color) {
      let payload = []

      payload.push({
        title: 'divider',
        content: {
          title: 'Divider'
        },
        inline: {
          color: color
        }
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
