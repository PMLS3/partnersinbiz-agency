<template>
  <vx-card>
    <img
      :src="schema.content.img"
      alt="content-img"
      class="responsive rounded-lg"
    />
    <div class="my-6">
      <h5 class="mb-2">{{ schema.content.title }}</h5>
    </div>
    <div class="mb-4">
      <div class="flex justify-between">
        <small class="font-semibold">{{
          schema.content.current_progress
        }}</small>
        <small class="text-grey">{{ schema.content.progress_goal }}</small>
      </div>
      <vs-progress
        :percent="schema.content.progress_done_per"
        class="block mt-1 shadow-md"
      ></vs-progress>
    </div>
    <div class="flex justify-between flex-wrap">
      <vs-button
        class="mt-4 mr-2 shadow-lg"
        type="gradient"
        color="#7367F0"
        gradient-color-secondary="#CE9FFC"
        >{{ schema.content.btn_left_text }}</vs-button
      >
      <vs-button class="mt-4" type="border" color="#b9b9b9">{{
        schema.content.btn_right_text
      }}</vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema', 'index', 'mainIndex'],
}
</script>
