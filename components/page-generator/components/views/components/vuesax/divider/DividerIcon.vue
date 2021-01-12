<!-- =========================================================================================
    File Name: DividerIcon.vue
    Description: Divider with icon
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon" code-toggler>
    <p>
      To add an icon within the division we have the property <code>icon</code>
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>
        Vuesax uses the Google Material Icons font library by default. For a
        list of all available icons, visit the official
        <a href="https://material.io/icons/" target="_blank"
          >Material Icons page</a
        >.
      </p>
      <p>
        FontAwesome and other fonts library are supported. Simply use the
        icon-pack with fa or fas. You still need to include the Font Awesome
        icons in your project.
      </p>
    </vs-alert>

    <div class="op-block mt-5">
      <vs-divider
        icon-pack="feather"
        icon="icon-arrow-down"
        position="left"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
      <vs-divider
        icon-pack="feather"
        icon="icon-star"
        position="left-center"
        color="primary"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
      <vs-divider
        icon-pack="feather"
        icon="icon-check"
        position="center"
        color="success"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
      <vs-divider
        icon-pack="feather"
        icon="icon-x-circle"
        position="right-center"
        color="danger"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
      <vs-divider
        icon-pack="feather"
        icon="icon-alert-triangle"
        position="right"
        color="warning"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
      <vs-divider
        icon-pack="feather"
        icon="icon-clock"
        position="center"
        color="dark"
        @click="addComponent('icon-arrow-down', 'left', 'success')"
      ></vs-divider>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(icon, position, color) {
      let payload = []

      payload.push({
        title: 'divider',

        inline: {
          color: color,
          icon: icon,
          icon_pack: 'feather',
          position: position
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
