<!-- =========================================================================================
    File Name: AlertExample.vue
    Description: Example of validation using alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Example" code-toggler>
    <p>
      An example would be to have an input and when a condition is met show the
      <strong>vs-alert</strong>
    </p>

    <vs-input
      label="Enter only numbers"
      placeholder="0123456789"
      v-model="value1"
      class="my-4"
    />
    <vs-alert
      :active="inputValid"
      color="danger"
      icon-pack="feather"
      icon="icon-info"
    >
      <span>the value is <b>invalid</b> you can only enter numbers</span>
    </vs-alert>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      description:
        'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
    }
  },
  computed: {
    inputValid() {
      if (/^\d+$/.test(this.value1)) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    addComponent(color, type) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          name: 'Button'
        },
        inline: {
          color: color,
          type: type
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
