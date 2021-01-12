<template>
  <vx-card class="overlay-card overflow-hidden">
    <template slot="no-body">
      <img
        :src="schema.content.overlay_img"
        alt="user-profile-cover"
        class="responsive"
      />
      <div class="card-overlay text-white flex flex-col justify-between">
        <h4 class="text-white mb-4">{{ schema.content.title }}</h4>
        <p>{{ schema.content.text }}</p>
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
