<template>
  <!-- <vs-button
    @click="edit()"
    :href="schema.content.href"
    :class="schema.class"
    :style="schema.style"
    :disabled="schema.inline.disabled"
    :size="schema.inline.size"
    :radius="schema.inline.radius"
    :color="schema.inline.color"
    :gradient-color-secondary="schema.inline.colorx2"
    :type="schema.inline.type"
    :icon-pack="schema.inline.icon_pack"
    :icon="schema.inline.icon"
    :icon-after="schema.inline.icon_after"
    :text-color="schema.inline.text_color"
    :line-position="schema.inline.line_position"
    :line-origin="schema.inline.line_origin"
    >{{ schema.content.title }}</vs-button
  > -->

  <vs-images :hover="hover" alternating not-border-radius not-margin>
    <vs-image
      :key="index"
      :src="`https://picsum.photos/400/400?image=3${index}`"
      v-for="(image, index) in 9"
    />
    <vs-image
      :key="index"
      :src="`https://picsum.photos/400/400?image=4${index}`"
      v-for="(image, index) in 7"
    />
  </vs-images>
</template>

<script>
export default {
  name: 'imagesAdd',
  props: ['schema'],

  methods: {
    edit() {
      let payload = {
        active_card: true,
        component_show: 'imagesAdd',
        schema: this.schema,
        index: 0
      }

      this.$store.commit('page_builder/COMPONENTS_EDIT', payload)
    }
  }
}
</script>
