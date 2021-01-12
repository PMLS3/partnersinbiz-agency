<!-- =========================================================================================
  File Name: ButtonGroupToolbar.vue.vue
  Description: Buttons Group Toolbar
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Toolbar" code-toggler>
    <p class="mb-4">
      Use flex container on button groups to create button toolbar.
    </p>

    <div
      class="flex flex-wrap"
      @click="addComponent('flex flex-wrap', 'btn-group mr-4 mt-4')"
    >
      <div class="btn-group mr-4 mt-4">
        <vs-button>1</vs-button>
        <vs-button>2</vs-button>
        <vs-button>3</vs-button>
        <vs-button>4</vs-button>
      </div>

      <div class="btn-group mt-4 mr-4">
        <vs-button>5</vs-button>
        <vs-button>6</vs-button>
        <vs-button>7</vs-button>
      </div>

      <div class="btn-group mt-4">
        <vs-button>8</vs-button>
      </div>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(main_div, div_class) {
      let payload = []
      payload.push({
        title: 'divi',
        class: main_div,
        options: [
          {
            title: 'divi',

            class: div_class,

            options: [
              {
                title: 'buttons',
                content: {
                  title: '1'
                }
              },
              {
                title: 'buttons',
                content: {
                  title: '2'
                }
              },
              {
                title: 'buttons',
                content: {
                  title: '3'
                }
              }
            ]
          },
          {
            title: 'divi',
            class: div_class,
            options: [
              {
                title: 'buttons',
                content: {
                  title: '4'
                }
              },
              {
                title: 'buttons',
                content: {
                  title: '5'
                }
              },
              {
                title: 'buttons',
                content: {
                  title: '6'
                }
              }
            ]
          },
          {
            title: 'divi',

            class: div_class,

            options: [
              {
                title: 'buttons',
                content: {
                  title: '8'
                }
              }
            ]
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
