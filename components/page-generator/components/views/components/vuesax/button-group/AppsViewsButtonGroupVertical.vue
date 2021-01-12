<!-- =========================================================================================
  File Name: ButtonGroupVertical.vue.vue
  Description: Buttons Group in vertical variant
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Vertical Variant" code-toggler>
    <p class="mb-4">
      You can create vertical variant of button group using
      <code>btn-group-vertical</code> class
    </p>

    <div class="btn-group-vertical" @click="addComponent('btn-group-vertical')">
      <vs-button>Top</vs-button>
      <vs-button>Middle</vs-button>
      <vs-button>Bottom</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(div_class) {
      let payload = []
      payload.push({
        title: 'divi',

        class: div_class,

        options: [
          {
            title: 'buttons',
            content: {
              name: 'First'
            }
          },
          {
            title: 'buttons',
            content: {
              name: 'Second'
            }
          },
          {
            title: 'buttons',
            content: {
              name: 'Third'
            }
          }
        ]
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
