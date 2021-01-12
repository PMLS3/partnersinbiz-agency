<!-- =========================================================================================
    File Name: ChipClosable.vue
    Description: For making a chip closable
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Closable" code-toggler>
    <p>For making a chip closable</p>

    <div class="demo-alignment">
      <vs-button v-if="chips.length == 0" @click="reset" type="filled"
        >Reset Chips</vs-button
      >
      <vs-chip
        @click="remove(chip)"
        v-for="(chip, index) in chips"
        :key="index"
        closable
      >
        {{ chip }}
      </vs-chip>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      chips: ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy']
    }
  },
  methods: {
    reset() {
      this.chips = ['Dribbble', 'GitHub', 'Behance', 'Vuejs', 'Vuexy']
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    },
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
