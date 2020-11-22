<template>
  <!-- <vx-card :title="title" class="mt-base">
    <ul class="page-suggestions-list">
      <li
        class="page-suggestion flex items-center mb-4"
        v-for="page in suggestedPages"
        :key="page.index"
      >
        <div class="mr-3">
          <vs-avatar class="m-0" :src="page.img" size="35px" />
        </div>
        <div class="leading-tight">
          <p class="font-medium">{{ page.title | capitalize }}</p>
          <span class="text-xs">{{ page.type | capitalize }}</span>
        </div>
        <div class="ml-auto">
          <div class="flex">
            <feather-icon
              icon="StarIcon"
              svgClasses="h-4 w-4"
              class="mr-2 cursor-pointer"
            ></feather-icon>
          </div>
          <span class="flex bg-primary rounded p-2 text-white"><feather-icon icon="UserPlusIcon" svgClasses="w-4 h-4"></feather-icon></span>
        </div>
      </li>
    </ul>
  </vx-card> -->
  <div><h1>Here</h1></div>
</template>

<script>
export default {
  name: "UiMiscSuggestionsPage",
  props: {
    title: { type: String, default: "Suggested Pages" },
    suggestedPages: { type: Array, default: [] }
  }
};
</script>
