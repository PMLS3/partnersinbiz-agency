<template>
  <vx-card>
    <div slot="no-body">
      <img
        :src="schema.content.img"
        alt="content-img"
        class="responsive card-img-top"
      />
    </div>
    <h5 class="mb-2">{{ schema.content.title }}</h5>
    <p class="text-grey">{{ schema.content.subtitle }}</p>
    <p class="text-grey">{{ schema.content.subtitle_2 }}</p>
    <div class="flex justify-between flex-wrap">
      <vs-button
        class="mt-4 mr-2 shadow-lg"
        type="gradient"
        color="#7367F0"
        gradient-color-secondary="#CE9FFC"
        >Download</vs-button
      >
      <vs-button class="mt-4" type="border" color="#b9b9b9">View All</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema', 'index', 'mainIndex'],
}
</script>

<style scoped></style>
