<!-- =========================================================================================
    File Name: ButtonIcon.vue
    Description: Add icon to button
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon" code-toggler>
    <p>You can add an icon to the button with the property <code>icon</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span
        >Vuesax uses the Google Material Icons font library by default. For a
        list of all available icons, visit the official
        <a href="https://material.io/icons/" target="_blank"
          >Material Icons page</a
        >. Other icon libraries can be used by providing the class for the
        respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5
        uses fas, far, or fal.</span
      >
    </vs-alert>

    <vs-alert
      color="primary"
      icon="new_releases"
      active="true"
      class="mt-5 mb-3"
    >
      <span
        >You can change the position of the icon so that it is after the text
        with the property <code>icon-after</code></span
      >
    </vs-alert>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-home"
        @click="addComponent('primary', 'border', 'feather', 'icon-home')"
        >Home</vs-button
      >
      <vs-button
        color="warning"
        type="filled"
        icon-pack="feather"
        icon="icon-star"
        @click="addComponent('primary', 'border', 'feather', 'icon-star')"
        >Star</vs-button
      >
      <vs-button
        color="success"
        type="flat"
        icon-pack="feather"
        icon="icon-check"
        @click="addComponent('primary', 'border', 'feather', 'icon-check')"
        >Done</vs-button
      >
      <vs-button
        color="dark"
        type="line"
        icon-pack="feather"
        icon="icon-menu"
        icon-after
        @click="addComponent('primary', 'border', 'feather', 'icon-menu')"
        >menu</vs-button
      >
      <vs-button
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-heart"
        icon-after
        @click="
          addComponent('primary', 'border', 'feather', 'icon-heart', true)
        "
        >favorite</vs-button
      >
      <vs-button
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-home"
        @click="
          addComponent('primary', 'border', 'feather', 'icon-home', false, true)
        "
        >Disabled</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type, icon_pack, icon, icon_after, disabled) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          disabled: disabled,
          color: color,
          type: type,
          icon_pack: icon_pack,
          icon: icon,
          icon_after: icon_after
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
