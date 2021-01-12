<!-- =========================================================================================
    File Name: ButtonRouter.vue
    Description: pass string or object to directive 'to'. Button + vue-router
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Router" code-toggler>
    <p>
      You can send a string or object to directive to. This directive wrap a
      $router.push() vue method, you can use all programmatic navigation on vue
      router.
    </p>

    <div class="demo-alignment">
      <vs-button color="primary" type="filled" to="/components/list"
        >String literal</vs-button
      >
      <vs-button
        color="warning"
        type="filled"
        :to="{ path: '/components/list' }"
        >Object Path</vs-button
      >
      <vs-button color="success" type="filled" :to="{ name: 'todo' }"
        >Named Router</vs-button
      >
      <vs-button
        color="dark"
        type="filled"
        :to="{ path: '/pages/search', query: { q: 'modern admin' } }"
        >With Query</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(disabled, radius, color, type, icon_pack, icon) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
        },
        inline: {
          radius: radius,
          color: color,
          colorx2: '#3EC9D6',
          type: type,
          icon_pack: icon_pack,
          icon: icon
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder',
        place: []
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
