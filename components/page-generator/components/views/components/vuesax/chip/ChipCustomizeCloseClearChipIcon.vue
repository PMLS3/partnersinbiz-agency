<!-- =========================================================================================
    File Name: ChipCustomizeCloseClearChipIcon.vue
    Description: Change icon used for close and clear button
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Customize Close and Clear Chips Icons" code-toggler>
    <p>
      You can change the icons used for the close button and the clear button
      when using multiple chips with the <code>vs-chips</code> component.
    </p>
    <p>
      For the main parameter, pass the <code>close-icon</code> property, which
      is the close icon that appears on each chip. You can change the Clear
      Chips button with the <code>remove-icon</code> property
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

    <div class="mt-5">
      <div class="op-block mb-5">{{ chips }}</div>
      <vs-chips
        color="rgb(145, 32, 159)"
        placeholder="New Element"
        v-model="chips"
        icon-pack="feather"
        remove-icon="icon-trash-2"
      >
        <vs-chip
          :key="`${chip}-${index}`"
          @click="remove(chip)"
          v-for="(chip, index) in chips"
          closable
          icon-pack="feather"
          close-icon="icon-trash-2"
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
