<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Images" code-toggler>
    <p>
      You can create an image gallery easily with the components vs-images y
      vs-image
    </p>

    <vs-images>
      <vs-image
        :key="index"
        :src="`https://picsum.photos/400/400?image=2${index}`"
        v-for="(image, index) in 9"
      />
      <vs-image
        :key="index"
        :src="`https://picsum.photos/400/400?image=1${index}`"
        v-for="(image, index) in 7"
      />
    </vs-images>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type) {
      let payload = []

      payload.push({
        title: 'buttons',
        content: {
          title: 'Button'
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
