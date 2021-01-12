<!-- =========================================================================================
  File Name: BreadcrumbColor.vue
  Description: Change the color of active link in breadcrumb
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>
      Use the <code>color</code> directive like for any other component that
      supports it to customize the breadcrumbs links color
    </p>

    <vs-alert icon="warning" active="true" color="warning" class="mt-5">
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <div class="demo-alignment">
      <input v-model="colorx" type="color" name="" value="" />
      <vs-breadcrumb
        :color="colorx"
        :items="items"
        @click="addComponent(items, colorx)"
      ></vs-breadcrumb>
    </div>
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    colorx: '#3DC9B3',
    items: [
      {
        title: 'Dashboard',
        url: '#'
      },
      {
        title: 'Link 1',
        url: '#'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ]
  }),
  methods: {
    addComponent(items, color) {
      let payload = []

      payload.push({
        title: 'breadcrumb',
        content: {
          items: items
        },
        inline: {
          color: color
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
