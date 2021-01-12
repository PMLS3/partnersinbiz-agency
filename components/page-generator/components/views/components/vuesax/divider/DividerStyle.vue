<!-- =========================================================================================
    File Name: DividerStyle.vue
    Description: Change style of divider line
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Style" code-toggler>
    <p>
      You can change line's style with the property <code>border-style</code>.
      The allowed values are equivalent to the
      <code>border-style</code> property in CSS.
    </p>

    <vx-list :list="styleTypes" class="mt-3 mb-5"></vx-list>

    <div class="op-block">
      <vs-divider
        border-style="dotted"
        color="primary"
        @click="addComponent('dotted', 'primary')"
        >dotted</vs-divider
      >
      <vs-divider
        border-style="dashed"
        color="success"
        @click="addComponent('dashed', 'success')"
        >dashed</vs-divider
      >
      <vs-divider
        border-style="solid"
        color="danger"
        @click="addComponent('solid', 'danger')"
        >solid</vs-divider
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      styleTypes: [
        '<strong>dotted</strong> - Defines a dotted border',
        '<strong>dashed</strong> - Defines a dotteddashed border',
        '<strong>solid</strong> - Defines a solid border(default)'
      ]
    }
  },
  methods: {
    addComponent(border, color) {
      let payload = []

      payload.push({
        title: 'divider',
        content: {
          title: border
        },
        inline: {
          color: color,
          border_style: border
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
