<!-- =========================================================================================
    File Name: ProgressColor.vue
    Description: Change color of progress with color prop
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>Nice colors for your progress barss</p>

    <div class="mt-5">
      <div @click="addComponent(100, 'primary')">
        <vs-progress :percent="100" color="primary"></vs-progress>
      </div>
      <vs-progress
        :percent="90"
        color="warning"
        @click="addComponent(90, 'warning')"
      ></vs-progress>
      <vs-progress
        :percent="75"
        color="danger"
        @click="addComponent(75, 'danger')"
      ></vs-progress>
      <vs-progress
        :percent="60"
        color="success"
        @click="addComponent(60, 'success')"
      ></vs-progress>
      <vs-progress
        :percent="45"
        color="dark"
        @click="addComponent(45, 'dark')"
      ></vs-progress>
      <vs-progress
        :percent="30"
        color="rgb(164, 69, 15)"
        @click="addComponent(30, 'rgb(164, 69, 15)')"
      ></vs-progress>
      <vs-progress
        :percent="15"
        color="#24c1a0"
        @click="addComponent(15, '#24c1a0')"
      ></vs-progress>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(percent, color) {
      console.log('percent', percent)
      let payload = []

      payload.push({
        title: 'progressBar',
        content: {
          percent: percent
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
