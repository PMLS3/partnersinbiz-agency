<!-- =========================================================================================
  File Name: BreadcrumbAlignment.vue
  Description: Align breadcrumb to left, right or center

========================================================================================== -->

<template>
  <vx-card title="Alignment" code-toggler>
    <p>
      Use <code>align</code> to either align the breadcrumb to the left, center
      or right
    </p>

    <div class="mt-5">
      <vs-breadcrumb
        :items="items"
        align="left"
        class="op-block mb-2"
        @click="addComponent(items, 'left', 'op-block mb-2')"
      ></vs-breadcrumb>
      <vs-breadcrumb
        :items="items"
        align="center"
        class="op-block mb-2"
        @click="addComponent(items, 'center', 'op-block mb-2')"
      ></vs-breadcrumb>
      <vs-breadcrumb
        :items="items"
        align="right"
        class="op-block mb-2"
        @click="addComponent(items, 'right', 'op-block mb-2')"
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
    addComponent(items, align, classSet) {
      let payload = []

      payload.push({
        title: 'breadcrumb',
        content: {
          items: items
        },
        inline: {
          align: align
        },
        class: classSet
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
