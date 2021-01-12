<!-- =========================================================================================
    File Name: ChipAddRemove.vue
    Description: Add and Remove chips using vs-chips
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Add and Remove Items" code-toggler>
    <p>
      You can add and remove chips with the <code>vs-chips</code> component. For
      the main parameter, pass the <code>items</code> property, which is an
      array representing each chip
    </p>

    <div class="mt-5">
      <div class="op-block mb-5">{{ chips }}</div>
      <vs-chips
        color="rgb(145, 32, 159)"
        placeholder="New Element"
        v-model="chips"
      >
        <vs-chip
          :key="`${chip}-${index}`"
          @click="remove(chip)"
          v-for="(chip, index) in chips"
          closable
        >
          {{ chip }}
        </vs-chip>
      </vs-chips>
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
