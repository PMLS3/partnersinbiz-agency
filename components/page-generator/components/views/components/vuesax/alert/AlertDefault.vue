<!-- =========================================================================================
    File Name: AlertDefault.vue
    Description: Rendering of default alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>
      To add a notification use the <code>vs-alert</code> component. For the
      main parameter, pass the active property that determines if the
      <code>alert</code> is visible or not
    </p>

    <vs-alert active="true" class="mt-5" @click="addComponent()">
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
          description: this.description
        },
        inline: {
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
