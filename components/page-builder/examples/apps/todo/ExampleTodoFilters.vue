<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div class="todo__filters-container">
    <!-- all -->
    <div class="px-6 py-4">
      <div
        tag="span"
        class="flex cursor-pointer"
        :class="{ 'text-primary': todoFilter == 'all' }"
        @click="updateFilter('all')"
      >
        <feather-icon
          icon="LayersIcon"
          :svgClasses="[
            { 'text-primary stroke-current': todoFilter == 'all' },
            'h-6 w-6'
          ]"
        ></feather-icon>
        <span class="text-lg ml-3">All</span>
      </div>
    </div>

    <vs-divider></vs-divider>

    <!-- starred -->
    <div class="px-6 py-4">
      <h5>Filters</h5>

      <template v-for="filter in todoFilters">
        <div
          tag="span"
          class="flex mt-6 cursor-pointer"
          :class="{ 'text-primary': todoFilter == filter.filter }"
          @click="updateFilter(filter.filter)"
          :key="filter.filter"
        >
          <feather-icon
            :icon="filter.icon"
            :svgClasses="[
              { 'text-primary stroke-current': todoFilter == filter.filter },
              'h-6 w-6'
            ]"
          ></feather-icon>
          <span class="text-lg ml-3">{{ filter.filterName }}</span>
        </div>
      </template>
    </div>

    <vs-divider></vs-divider>

    <div class="px-6 py-4">
      <h5>Labels</h5>
      <div class="todo__lables-list">
        <div
          tag="span"
          class="todo__label flex items-center mt-6 cursor-pointer"
          v-for="(tag, index) in taskTags"
          :key="index"
          @click="updateFilter(tag.value)"
        >
          <div
            class="ml-1 h-3 w-3 rounded-full mr-4"
            :class="'border-2 border-solid border-' + tag.color"
          />
          <span
            class="text-lg"
            :class="{ 'text-primary': todoFilter == tag.value }"
            >{{ tag.text }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoFilters: [
        { filterName: 'Starred', filter: 'starred', icon: 'StarIcon' },
        { filterName: 'Important', filter: 'important', icon: 'InfoIcon' },
        { filterName: 'Completed', filter: 'completed', icon: 'CheckIcon' },
        { filterName: 'Trashed', filter: 'trashed', icon: 'TrashIcon' }
      ],
      todoFilter: 'all'
    }
  },
  computed: {
    taskTags() {
      return this.$store.state.example.taskTags
    }
  },
  methods: {
    updateFilter(filter) {
      this.todoFilter = filter
      this.$store.dispatch('example/fetchTasks', { filter })
      this.$store.commit('example/UPDATE_TODO_FILTER', filter)
    }
  }
}
</script>
