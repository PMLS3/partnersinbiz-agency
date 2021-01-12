<!-- =========================================================================================
    File Name: ChipIcon.vue
    Description: Add a nice icon to the chip
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon" code-toggler>
    <p>Add a nice icon to the chip</p>

    <div class="demo-alignment">
      <vs-chip>
        <vs-avatar icon-pack="feather" icon="icon-user" />
        <span>Icon Default</span>
      </vs-chip>
      <vs-chip color="primary">
        <vs-avatar icon-pack="feather" icon="icon-send" />
        <span>Icon send</span>
      </vs-chip>
      <vs-chip color="success">
        <vs-avatar icon-pack="feather" icon="icon-mail" />
        <span>Icon markunread</span>
      </vs-chip>
      <vs-chip color="danger">
        <vs-avatar icon-pack="feather" icon="icon-slash" />
        <span>Icon block</span>
      </vs-chip>
      <vs-chip color="warning">
        <vs-avatar icon-pack="feather" icon="icon-battery" />
        <span>Icon battery_alert</span>
      </vs-chip>
      <vs-chip color="dark">
        <vs-avatar icon-pack="feather" icon="icon-edit" />
        <span>Icon edit</span>
      </vs-chip>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(type) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          color: this.colorx,
          colorx2: this.colorx2,
          type: type
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
