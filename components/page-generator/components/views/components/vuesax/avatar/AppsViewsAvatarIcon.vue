<!-- =========================================================================================
    File Name: AvatarIcon.vue
    Description: Change icon of avatar
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon" code-toggler>
    <p>
      You can change the main icon of the Avatar with the property
      <code>icon</code>
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>
        Vuesax uses the <strong>Google Material Icons</strong> font library by
        default. For a list of all available icons, visit the official
        <a href="https://material.io/icons/" target="_blank"
          >Material Icons page</a
        >. Other icon libraries can be used by providing the class for the
        respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5
        uses fas, far, or fal.
      </p>

      <p>
        This icon is only displayed when there is no property as
        <code>text</code> or <code>src</code>
      </p>
    </vs-alert>

    <div class="demo-alignment mt-5">
      <vs-avatar
        icon-pack="feather"
        icon="icon-user"
        @click="addComponent('', 'feather', 'icon-user')"
      />
      <vs-avatar
        color="primary"
        icon-pack="feather"
        icon="icon-calendar"
        @click="addComponent('primary', 'feather', 'icon-calendar')"
      />
      <vs-avatar
        color="success"
        icon-pack="feather"
        icon="icon-inbox"
        @click="addComponent('success', 'feather', 'icon-inbox')"
      />
      <vs-avatar
        color="danger"
        icon-pack="feather"
        icon="icon-camera"
        @click="addComponent('danger', 'feather', 'icon-camera')"
      />
      <vs-avatar
        color="warning"
        icon-pack="feather"
        icon="icon-award"
        @click="addComponent('warning', 'feather', 'icon-award')"
      />
      <vs-avatar
        color="dark"
        icon-pack="feather"
        icon="icon-code"
        @click="addComponent('dark', 'feather', 'icon-code')"
      />
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, icon, icon_pack) {
      let payload = []

      payload.push({
        title: 'avatar',

        inline: {
          color: color,
          icon: icon,
          icon_pack: icon_pack
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
