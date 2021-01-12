<!-- =========================================================================================
    File Name: DividerTextPosition.vue
    Description: Divider text with horizontal alignment
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Text Position" code-toggler>
    <p>You can guide the text in 5 ways with property <code>position</code>:</p>
    <vx-list
      :list="[
        'left',
        'left-center',
        'center(default)',
        'right-center',
        'right'
      ]"
      class="mt-3"
    ></vx-list>

    <div class="op-block mt-5">
      <vs-divider position="left" @click="addComponent('left')">
        Left
      </vs-divider>
      <vs-divider position="left-center" @click="addComponent('left-center')">
        Left-Center
      </vs-divider>
      <vs-divider position="center" @click="addComponent('center')">
        Center(default)
      </vs-divider>
      <vs-divider position="right-center" @click="addComponent('right-center')">
        Right-Center
      </vs-divider>
      <vs-divider position="right" @click="addComponent('right')"
        >Right</vs-divider
      >
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(position) {
      let payload = []

      payload.push({
        title: 'divider',
        content: {
          title: position
        },
        inline: {
          position: position
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
