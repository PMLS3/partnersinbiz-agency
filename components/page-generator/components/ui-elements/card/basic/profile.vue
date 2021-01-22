<template>
  <vx-card class="p-2">
    <div class="text-center">
      <h4>{{ schema.content.name }}</h4>
      <p class="text-grey">{{ schema.content.profession }}</p>
    </div>
    <vs-avatar
      class="mx-auto my-6 block"
      size="80px"
      :src="schema.content.userImg"
    />
    <div class="flex justify-between text-center">
      <span>
        <p class="text-xl font-semibold">
          {{ schema.content.user_meta_1_title }}
        </p>
        <small class="text-grey">{{ schema.content.user_meta_1_label }}</small>
      </span>
      <span>
        <p class="text-xl font-semibold">
          {{ schema.content.user_meta_2_title }}
        </p>
        <small class="text-grey">{{ schema.content.user_meta_2_label }}</small>
      </span>
      <span>
        <p class="text-xl font-semibold">
          {{ schema.content.user_meta_3_title }}
        </p>
        <small class="text-grey">{{ schema.content.user_meta_3_label }}</small>
      </span>
    </div>
    <vs-button
      type="gradient"
      class="w-full mt-6"
      color="#7367F0"
      gradient-color-secondary="#CE9FFC"
      >{{ schema.content.btn_text }}</vs-button
    >
  </vx-card>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema', 'index', 'mainIndex'],
}
</script>
