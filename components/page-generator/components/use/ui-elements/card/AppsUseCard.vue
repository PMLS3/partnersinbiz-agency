<template>
  <!-- <nuxt-link :to="schema.content.href"> -->
  <vs-card :class="schema.class" :style="schema.style">
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
      v-if="schema.children"
      v-for="(field, index) in schema.children"
      :key="index"
      :schema="field"
    ></component-generator>
  </vs-card>
  <!-- </nuxt-link> -->
</template>

<script>
// import componentGenerator from '@/components/component-generator/index'

export default {
  name: 'vcard',
  props: ['schema'],
  components: {
    // componentGenerator
  },
  methods: {
    add() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        place: this.schema.place,
        index: 1
      }

      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
    edit() {
      let payload = {
        active_card: true,
        component_show: 'grid',
        schema: this.schema,
        index: 0
      }
      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>

<style></style>
