<!-- =========================================================================================
    File Name: AvatarDefault.vue
    Description: Rendering of default avatar
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>
      Often you need to add an user's avatar to your app. In order to make this
      we have the component <code>vs-avatar</code>
    </p>
    <p>
      To add an internal text value such as <code>Luis</code> use the
      <code>text</code> property
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <span
        >If the text has more than 5 letters, only the first letter will be
        shown as in the second avatar, the name is <code>Luis Daniel</code> and
        only the letters LD will be shown if the word contains spaces the
        initial of each one is added.</span
      >
    </vs-alert>

    <div class="demo-alignment mt-5">
      <vs-avatar @click="addComponent()" />
      <vs-avatar text="Luis Daniel" @click="addComponent('Luis Daniel')" />
      <vs-avatar text="Luisd" @click="addComponent('Luisd')" />
      <vs-avatar
        src="https://i.imgur.com/ezM6SJ5.png"
        @click="addComponent('', 'https://i.imgur.com/ezM6SJ5.png')"
      />
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(text, src) {
      let payload = []

      payload.push({
        title: 'avatar',
        content: {
          title: text ? text : 'Avatar',
          src: src
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
