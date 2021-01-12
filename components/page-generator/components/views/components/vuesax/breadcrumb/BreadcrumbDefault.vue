<!-- =========================================================================================
    File Name: BreadcrumbDefault.vue
    Description: Default breadcrumb
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>
      Use the <code>items</code> in order to programatically generate the
      breadcrumb links
    </p>

    <div class="demo-alignment">
      <vs-breadcrumb
        :items="[
          { title: 'Dashboard', url: '/' },
          { title: 'Link 1', url: '/blog' },
          { title: 'Link 2', disabled: true },
          { title: 'Active', active: true }
        ]"
        @click="
          addComponent([
            { title: 'Dashboard', url: '#' },
            { title: 'Link 1', url: '#' },
            { title: 'Link 2', disabled: true },
            { title: 'Active', active: true }
          ])
        "
      ></vs-breadcrumb>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(items) {
      let payload = []

      payload.push({
        title: 'breadcrumb',
        content: {
          items: items
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
