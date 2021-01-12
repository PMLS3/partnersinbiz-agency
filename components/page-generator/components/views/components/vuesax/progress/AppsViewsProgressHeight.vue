<!-- =========================================================================================
    File Name: ProgressHeight.vue
    Description: Change height of progressbar with height prop
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Height" code-toggler>
    <p>You can change the height of the loading bar with the property height</p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>
        By default the property <code>height</code> is <strong>5</strong>(5px)
      </p>
    </vs-alert>

    <div class="mt-5">
      <vs-progress
        :height="2"
        :percent="100"
        color="primary"
        @click="addComponent(100, 'primary', 2)"
      ></vs-progress>
      <vs-progress
        :height="4"
        :percent="80"
        color="warning"
        @click="addComponent(80, 'warning', 4)"
      ></vs-progress>
      <vs-progress
        :height="8"
        :percent="60"
        color="danger"
        @click="addComponent(60, 'danger', 8)"
      ></vs-progress>
      <vs-progress
        :height="12"
        :percent="40"
        color="success"
        @click="addComponent(40, 'success', 12)"
      ></vs-progress>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(percent, color, height) {
      let payload = []

      payload.push({
        title: 'progress',
        content: {
          percent: percent,
          height: height
        },
        inline: {
          color: color
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
