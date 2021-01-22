<template>
  <vx-card class="p-2">
    <vs-avatar
      class="mx-auto mb-6 block"
      size="80px"
      :src="schema.content.userImg"
    />
    <div class="text-center">
      <h4>{{ schema.content.name }}</h4>
      <p class="text-grey">{{ schema.content.profession }}</p>
    </div>
    <div class="mb-4 mt-base">
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
        >{{ card_6.btn_left_text }}</vs-button
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
