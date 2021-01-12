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
    <div class="flex justify-between flex-wrap">
      <vs-button
        class="mt-4 mr-2 shadow-lg"
        type="gradient"
        color="#7367F0"
        gradient-color-secondary="#CE9FFC"
        >{{ card_4.btn_1_text }}</vs-button
      >
      <vs-button class="mt-4" type="border" color="#b9b9b9">{{
        schema.content.btn_2_text
      }}</vs-button>
    </div>
    <template slot="footer">
      <vs-divider />
      <div class="flex justify-between">
        <span class="flex items-center">
          <feather-icon
            :icon="schema.content.footer_text_1_icon"
            svgClasses="h-5 w-5 text-warning stroke-current"
          />
          <span class="ml-2">{{ schema.content.footer_text_1 }}</span>
        </span>
        <span class="flex items-center">
          <feather-icon
            :icon="schema.content.footer_text_2_icon"
            svgClasses="h-5 w-5 text-primary stroke-current"
          />
          <span class="ml-2">{{ schema.content.footer_text_2 }}</span>
        </span>
      </div>
    </template>
  </vx-card>
</template>

<script>
export default {
  name: 'buttons',
  props: ['schema', 'index', 'mainIndex']
}
</script>

<style></style>
