<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
        {{ task.title }}
      </p>

      <img class="w-6 h-6 rounded-full ml-3" :src="task.url" alt="Avatar" />
    </div>
    <div v-html="task.desc">{{ task.desc }}</div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ task.date }}</span>
      <badge v-if="task.type" :color="task.color" @click="$emit('add-more')">{{
        task.type
      }}</badge>
    </div>
  </div>
</template>
<script>
import Badge from './badge.vue'
export default {
  components: {
    Badge
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: 'purple',
        'Feature Request': 'teal',
        Backend: 'blue',
        QA: 'green',
        default: 'teal'
      }
      return mappings[this.task.type] || mappings.default
    }
  }
}
</script>
