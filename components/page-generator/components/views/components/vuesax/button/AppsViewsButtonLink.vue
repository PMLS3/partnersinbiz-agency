<!-- =========================================================================================
    File Name: ButtonLink.vue
    Description: Button with link
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Link" code-toggler>
    <p>You can specify for <code>window.location.href</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span>You can use the <code>target</code> property to window.open()</span>
    </vs-alert>

    <div class="demo-alignment">
      <vs-button color="primary" type="filled" href="https://pixinvent.com/"
        >String literal</vs-button
      >
      <vs-button
        color="primary"
        type="filled"
        :href="{ url: 'https://pixinvent.com/' }"
        >Object Path</vs-button
      >
      <vs-button
        color="primary"
        type="filled"
        target
        href="https://pixinvent.com/"
        >Open New Tab</vs-button
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
          type: type,
          icon_pack: icon_pack,
          icon: icon,
          colorx2: '#3EC9D6'
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
