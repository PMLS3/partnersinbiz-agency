<!-- =========================================================================================
    File Name: AlertTitle.vue
    Description: Alert with title
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Title" code-toggler>
    <p>Add a title to the alert with the property <code>title</code></p>

    <vs-alert
      @click="addComponent('primary', 'border')"
      title="Lorem ipsum dolor sit amet"
      color="rgb(231, 154, 23)"
      active="true"
      class="mt-5 text-warning"
    >
      Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I
      love wafer.
    </vs-alert>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      description:
        'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
    }
  },
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'alert',
        content: {
          title: 'lorem ipsom',
          description: this.description
        },
        inline: {
          color: 'rgb(231, 154, 23)',
          active: true
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
