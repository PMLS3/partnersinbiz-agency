<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS

========================================================================================== -->

<template>
  <vs-col
    :vs-type="schema.inline.type"
    :vs-justify="schema.inline.justify"
    :vs-align="schema.inline.align"
    :vs-lg="schema.inline.size.lg"
    :vs-sm="schema.inline.size.sm"
    :vs-xs="schema.inline.size.xs"
    :class="schema.class"
    :style="`border: 1px solid black; overflow: hidden; min-height: 50px; position: relative; ${schema.style}`"
  >
    <div
      class="flex pointer-events-auto profile-actions"
      style="
        position: absolute;
        margin-top: 1px;
        margin-right: 2px;
        position: absolute;
        top: 0;
        display: none;
        z-index: 200;
      "
    >
      <vs-button
        icon-pack="feather"
        radius
        icon="icon-edit-2"
        size="small"
        @click="edit()"
      ></vs-button>
      <vs-button
        icon-pack="feather"
        size="small"
        color="success"
        radius
        icon="icon-plus-circle"
        @click="add()"
      ></vs-button>

      <vs-button
        icon-pack="feather"
        size="small"
        color="danger"
        radius
        icon="icon-trash"
      ></vs-button>
    </div>

    <ComponentGenerator
      v-if="schema.children"
      v-for="(field, index) in schema.children"
      :key="index"
      :schema="field"
    />
  </vs-col>
</template>

<script>
export default {
  name: 'grid',

  props: ['schema'],
  components: {},
  methods: {
    add() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        place: this.schema.place,
        index: 1,
      }

      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
    edit() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        schema: this.schema,
        index: 0,
      }
      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
