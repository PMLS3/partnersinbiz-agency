<template>
  <vx-card title="p" code-toggler @click="addComponent()">
    <p class="mb-4">
      Add <code>btn-group</code> class to wrapper to make all contained button
      acts as grouped buttons.
    </p>

    <div class="btn-group"></div>
  </vx-card>
</template>

<script>
export default {
  name: 'pTag',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'pTag',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
