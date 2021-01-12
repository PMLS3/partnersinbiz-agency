<template>
  <vx-card @click="edit()">
    <div slot="no-body">
      <img
        :src="card_1.img"
        alt="content-img"
        class="responsive card-img-top"
      />
    </div>
    <h5 class="mb-2">{{ card_1.title }}</h5>
    <p class="text-grey">{{ card_1.subtitle }}</p>
    <p class="text-grey">{{ card_1.subtitle_2 }}</p>
    <div class="flex justify-between flex-wrap">
      <vs-button
        class="mt-4 mr-2 shadow-lg"
        type="gradient"
        color="#7367F0"
        gradient-color-secondary="#CE9FFC"
        >Downloads</vs-button
      >
      <vs-button class="mt-4" type="border" color="#b9b9b9">View All</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'basicCard',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'basicCard',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
