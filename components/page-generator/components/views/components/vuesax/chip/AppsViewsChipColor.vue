<!-- =========================================================================================
    File Name: ChipColor.vue
    Description: Change background color of chips using color prop
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>Change the background color of the chip</p>

    <vs-alert icon="warning" active="true" color="warning" class="my-3">
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <div class="demo-alignment">
      <vs-chip color="primary">
        Basic Chip
      </vs-chip>
      <vs-chip color="success">
        <vs-avatar text="LD" />
        Avatar Text
      </vs-chip>
      <vs-chip color="danger">
        <vs-avatar />
        Avatar Icon
      </vs-chip>
      <vs-chip color="warning">
        <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
        Avatar Image
      </vs-chip>
      <vs-chip
        @click="isDeleted = true"
        v-if="!isDeleted"
        closable
        color="dark"
      >
        Closable chip
      </vs-chip>
      <vs-chip
        @click="isDeleted2 = true"
        v-if="!isDeleted2"
        closable
        color="#24c1a0"
        close-icon="close"
      >
        <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />
        Closable chip
      </vs-chip>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      isDeleted: false,
      isDeleted2: false
    }
  },
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
