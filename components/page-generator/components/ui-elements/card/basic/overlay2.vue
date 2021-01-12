<template>
  <vx-card class="overlay-card overflow-hidden">
    <template slot="no-body">
      <img
        :src="schema.content.overlay_img"
        alt="user-profile-cover"
        class="responsive blur-1"
      />
      <div class="card-overlay text-white">
        <div class="flex flex-col justify-between h-full">
          <div class="text-center mt-8 w-full">
            <h3 class="text-white mb-2 tracking-wide">{{ schema.content.weather }}</h3>
            <p class="mb-6">{{ schema.content.place_name }}</p>
            <div class="flex justify-around">
              <feather-icon
                :icon="schema.content.weather_icon"
                svgClasses="w-24 h-24 text-white"
              />
              <h2 class="text-white text-big">
                {{ schema.content.temperature }} <sup class="text-2xl">o</sup>
              </h2>
            </div>
          </div>
          <div class="text-center w-full">
            <div
              class="flex justify-between px-8 mb-8 text-xl"
              v-for="meta in schema.content.meta"
              :key="meta.label"
            >
              <span>{{ meta.label }}</span>
              <span>{{ meta.value }}</span>
            </div>
          </div>
        </div>
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
