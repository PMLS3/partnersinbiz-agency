<template>
  <hr
    :class="schema.class"
    :style="schema.style"
    @click="open_pop = !open_pop"
  />
</template>

<script>
export default {
  name: 'HR',
  props: ['schema', 'index', 'mainIndex'],

  components: {
    ComponentCreatorEditor: () =>
      import(
        '@/components/page-builder/component-creator/ComponentCreatorEditor.vue'
      ),
  },
  data() {
    return {
      open_pop: false,
    }
  },
}
</script>
