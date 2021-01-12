<!-- =========================================================================================
    File Name: ProgressInterminate.vue
    Description: Interminate progreebar
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Interminate" code-toggler>
    <p>
      You can have a progress bar with indeterminate value with the property
      indeterminate
    </p>

    <div class="mt-5">
      <vs-progress
        indeterminate
        color="primary"
        @click="addComponent()"
      ></vs-progress>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'progress',

        inline: {
          color: 'primary',
          indeterminate: true
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
