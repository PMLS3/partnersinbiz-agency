<!-- =========================================================================================
    File Name: ChipTransparent.vue
    Description: Transparent chip variant
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Transparent" code-toggler>
    <p>You can create transparent chip using <code>transparent</code> prop.</p>

    <div class="demo-alignment">
      <vs-chip
        transparent
        color="primary"
        @click="addComponent('primary', false)"
      >
        Basic Chip
      </vs-chip>
      <vs-chip
        transparent
        color="success"
        @click="addComponentText('primary', false, 'LD')"
      >
        <vs-avatar text="LD" />
        Avatar Text
      </vs-chip>
      <vs-chip
        transparent
        color="danger"
        @click="addComponent('danger', false)"
      >
        <vs-avatar />
        Avatar Icon
      </vs-chip>
      <vs-chip
        transparent
        color="warning"
        @click="
          addComponentAvatar(
            'warning',
            false,
            'https://randomuser.me/api/portraits/men/4.jpg'
          )
        "
      >
        <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
        Avatar Image
      </vs-chip>
      <vs-chip
        transparent
        closable
        color="dark"
        @click="addComponent('primary', false)"
      >
        Closable chip
      </vs-chip>
      <vs-chip
        transparent
        closable
        color="#24c1a0"
        close-icon="close"
        @click="addComponent('primary', false)"
      >
        <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />
        Closable chip
      </vs-chip>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(color, transparent) {
      let payload = []

      payload.push({
        title: 'chip',
        content: {
          title: 'Chip'
        },
        inline: {
          color: color,
          closable: true,
          transparent: transparent,
          close_icon: 'close'
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    },
    addComponentAvatar(color, transparent, src) {
      let payload = []

      payload.push({
        title: 'chip',
        content: {
          title: 'Chip',
          src: src
        },
        inline: {
          color: color,
          transparent: transparent
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    },
    addComponent(color, transparent, text) {
      let payload = []

      payload.push({
        title: 'chip',
        content: {
          title: 'Chip',
          text: text
        },
        inline: {
          color: color,
          transparent: transparent
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
