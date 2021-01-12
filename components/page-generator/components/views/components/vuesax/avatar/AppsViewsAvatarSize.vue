<!-- =========================================================================================
    File Name: AvatarSize.vue
    Description: Change size of avatars
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="size" code-toggler>
    <p>
      You can change the size of the Avatar with the property size the allowed
      values are:
    </p>
    <vx-list :list="['large', 'small', 'Custom measures']"></vx-list>

    <vs-alert color="primary" icon="new_releases" active="true" class="mb-1">
      <span
        >In the example the last avatar has the custom size of
        <code>70px</code> the added value will be the avatar's
        <strong>height</strong> and <strong>width</strong></span
      >
    </vs-alert>

    <div class="demo-alignment mt-5">
      <vs-avatar size="small" @click="addComponent('small', '', '')" />
      <vs-avatar
        text="Luis Daniel"
        @click="addComponent('', 'Luis Daniel', '')"
      />
      <vs-avatar
        size="large"
        src="https://i.imgur.com/ezM6SJ5.png"
        @click="addComponent('large', '', 'https://i.imgur.com/ezM6SJ5.png')"
      />
      <vs-avatar
        size="70px"
        src="https://i.imgur.com/ezM6SJ5.png"
        @click="addComponent('70px', '', 'https://i.imgur.com/ezM6SJ5.png')"
      />
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(size, text, src) {
      let payload = []

      payload.push({
        title: 'avatar',
        content: {
          title: text,
          src: src
        },
        inline: {
          size: size
        }
      })

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder'
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
