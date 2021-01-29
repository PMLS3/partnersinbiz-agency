<template>
  <!-- <nuxt-link :to="schema.content.href"> -->
  <span
    :class="schema.class"
    :style="schema.style"
    :slot="schema.slot"
    @click="open_pop = !open_pop"
  >
    {{ schema.innerText }}
    <vs-popup
      classContent="popup-example"
      :title="schema.title"
      :active.sync="open_pop"
    >
      <ComponentsCreatorEditorButtons
        :schema="schema"
        :index="index"
        :mainIndex="mainIndex"
      />
    </vs-popup>
    <ComponentCreatorEditor
      v-for="(field, ind) in schema.children"
      :key="ind"
      :schema="field"
    />
  </span>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  name: 'spanAdd',
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
