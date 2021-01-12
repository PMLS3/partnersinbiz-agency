<!-- =========================================================================================
  File Name: ButtonGroupSize.vue.vue
  Description: Buttons Group Size
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Sizing" code-toggler>
    <p class="mb-4">
      You can use <code>size</code> prop of button component to change the size
      of button group.
    </p>

    <div class="btn-group" @click="addComponent('btn-group', 'large')">
      <vs-button size="large">First</vs-button>
      <vs-button size="large">Second</vs-button>
      <vs-button size="large">Third</vs-button>
    </div>

    <div class="btn-group my-4" @click="addComponent('btn-group my-4', '')">
      <vs-button>First</vs-button>
      <vs-button>Second</vs-button>
      <vs-button>Third</vs-button>
    </div>

    <div class="btn-group" @click="addComponent('btn-group', 'small')">
      <vs-button size="small">First</vs-button>
      <vs-button size="small">Second</vs-button>
      <vs-button size="small">Third</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(div_class, size) {
      let payload = []
      payload.push({
        title: 'divi',
        class: div_class,
        options: [
          {
            title: 'buttons',
            content: {
              title: 'First'
            },
            inline: {
              size: size
            }
          },
          {
            title: 'buttons',
            content: {
              title: 'Second'
            },
            inline: {
              size: size
            }
          },
          {
            title: 'buttons',
            content: {
              title: 'Third'
            },
            inline: {
              size: size
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
