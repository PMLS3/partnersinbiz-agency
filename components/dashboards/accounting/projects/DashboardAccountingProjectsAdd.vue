<template>
  <div>
    <FormsTypesProjects />
    <FormsTypesTasksMulti />
    <FormsTypesPersonsMulti />
  </div>
</template>

<script>
export default {
  name: 'Projects',

  components: {
    // Projects: () =>
    //   process.client
    //     ? import('@/components/forms/forms/projects/index.vue')
    //     : null,
    // Tasks: () =>
    //   process.client
    //     ? import('@/components/forms/forms/tasks/multi.vue')
    //     : null,
    // Persons: () =>
    //   process.client
    //     ? import('@/components/forms/forms/person/multi.vue')
    //     : null
  },
}
</script>

<style></style>
