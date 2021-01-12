<!-- =========================================================================================
    File Name: ButtonIconOnly.vue
    Description: Button with only icon
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon Only" code-toggler>
    <p>
      You can have a button with only the icon you want with the property
      <code>icon</code> and not add any internal value to the button
    </p>

    <vs-alert
      color="primary"
      icon="new_releases"
      active="true"
      class="mt-5 mb-3"
    >
      <span
        >You can use the radius property to determine the border-radius of the
        button, there are many cases in which we need it to be round for
        example.</span
      >
    </vs-alert>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-search"
        @click="
          addComponent('primary', 'border', 'feather', 'icon-search', false)
        "
      ></vs-button>
      <vs-button
        color="warning"
        type="filled"
        icon-pack="feather"
        icon="icon-archive"
        @click="
          addComponent('warning', 'filled', 'feather', 'icon-archive', false)
        "
      ></vs-button>
      <vs-button
        color="success"
        type="flat"
        icon-pack="feather"
        icon="icon-camera"
        @click="
          addComponent('success', 'flat', 'feather', 'icon-camera', false)
        "
      ></vs-button>
      <vs-button
        color="dark"
        type="line"
        icon-pack="feather"
        icon="icon-calendar"
        @click="addComponent('dark', 'line', 'feather', 'icon-calendar', false)"
      ></vs-button>
      <vs-button
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-user-plus"
        @click="
          addComponent('danger', 'gradient', 'feather', 'icon-user-plus', false)
        "
      ></vs-button>
      <vs-button
        disabled
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-search"
        @click="
          addComponent('primary', 'border', 'feather', 'icon-search', false)
        "
      ></vs-button>
      <vs-button
        radius
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-search"
        @click="
          addComponent('primary', 'border', 'feather', 'icon-search', true)
        "
      ></vs-button>
      <vs-button
        radius
        color="warning"
        type="filled"
        icon-pack="feather"
        icon="icon-archive"
        @click="
          addComponent('warning', 'filled', 'feather', 'icon-archive', true)
        "
      ></vs-button>
      <vs-button
        radius
        color="success"
        type="flat"
        icon-pack="feather"
        icon="icon-camera"
        @click="addComponent('success', 'flat', 'feather', 'icon-camera', true)"
      ></vs-button>
      <vs-button
        radius
        color="dark"
        type="line"
        icon-pack="feather"
        icon="icon-calendar"
        @click="addComponent('dark', 'line', 'feather', 'icon-calendar', true)"
      ></vs-button>
      <vs-button
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-user-plus"
        @click="
          addComponent('danger', 'gradient', 'feather', 'icon-user-plus', true)
        "
      ></vs-button>
      <vs-button
        disabled
        radius
        color="primary"
        type="border"
        icon-pack="feather"
        icon="icon-search"
        @click="
          addComponent('primary', 'border', 'feather', 'icon-search', true)
        "
      ></vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type, icon_pack, icon, radius) {
      let payload = []

      payload.push({
        title: 'buttons',

        inline: {
          color: color,
          type: type,
          icon_pack: icon_pack,
          icon: icon,
          radius: radius
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
