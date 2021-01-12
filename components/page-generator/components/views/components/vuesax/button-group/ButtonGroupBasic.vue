<!-- =========================================================================================
  File Name: ButtonGroupBasic.vue.vue
  Description: Buttons Group Basic
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Basic" code-toggler>
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <div class="btn-group" @click="addComponent('btn-group')">
      <vs-button>First</vs-button>
      <vs-button>Second</vs-button>
      <vs-button>Third</vs-button>
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
              title: 'First'
            }
          },
          {
            title: 'buttons',
            content: {
              title: 'Second'
            }
          },
          {
            title: 'buttons',
            content: {
              title: 'Third'
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
