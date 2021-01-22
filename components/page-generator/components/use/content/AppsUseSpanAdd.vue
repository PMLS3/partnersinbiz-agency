<template>
  <!-- <nuxt-link :to="schema.content.href"> -->
  <span :class="schema.class" :style="schema.style" :slot="schema.slot">
    <!-- <div
      class="profile-actions pointer-events-auto flex"
      style="position: absolute; margin-top: 1px; margin-right: 2px; position:absolute; top:0;  left:0; z-index: 200"
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
    </div> -->
    <component-generator
      v-if="schema.options"
      v-for="(field, index) in schema.options"
      :key="index"
      :schema="field"
    ></component-generator>
  </span>
  <!-- </nuxt-link> -->
</template>

<script>
export default {
  name: 'spanAdd',
  props: ['schema'],
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
        component_show: 'spanAdd',
        schema: this.schema,
        index: 0,
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    },
  },
}
</script>
