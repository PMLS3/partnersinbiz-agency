<!-- =========================================================================================
    File Name: ChipDefault.vue
    Description: Rendering of default chip
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>Helps you represent simple data with colorful options</p>

    <div class="demo-alignment">
      <vs-chip @click="addComponent('Basic Chip')">Basic Chip</vs-chip>
      <vs-chip>
        <vs-avatar text="LD" />
        Avatar Text
      </vs-chip>
      <vs-chip>
        <vs-avatar />
        Avatar Icon
      </vs-chip>
      <vs-chip>
        <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />
        Avatar Image
      </vs-chip>
      <vs-chip @click="isDeleted = true" v-if="!isDeleted" closable>
        Closable chip
      </vs-chip>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      isDeleted: false
    }
  },
  methods: {
    addComponent(name) {
      let payload = []

      payload.push({
        title: 'chip',
        content: {
          name: name
        },
        inline: {},
        class: [],
        style: {}
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
