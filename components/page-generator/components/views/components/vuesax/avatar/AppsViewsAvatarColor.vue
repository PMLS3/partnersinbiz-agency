<!-- =========================================================================================
    File Name: AvatarColor.vue
    Description: Change color of avatars
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Color" code-toggler>
    <p>
      You can change the Avatar's color by using the property
      <code>color</code>. If needed you could also change the text's color with
      the property <code>text-color</code>
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
      <vs-avatar
        color="primary"
        text="primary"
        @click="addComponent('primary')"
      />
      <vs-avatar
        color="success"
        text="success"
        @click="addComponent('success')"
      />
      <vs-avatar color="danger" text="danger" @click="addComponent('danger')" />
      <vs-avatar
        color="warning"
        text="warning"
        @click="addComponent('warning')"
      />
      <vs-avatar
        color="dark"
        text="dark"
        @click="addComponent('dark', 'border')"
      />
      <vs-avatar
        color="rgb(200, 21, 129)"
        text="RGB"
        @click="addComponent('rgb(200, 21, 129)')"
      />
      <vs-avatar color="#18cd5b" text="HEX" @click="addComponent('#18cd5b')" />
      <vs-avatar
        color="#26302a"
        text-color="rgb(246, 190, 16)"
        text="HEX RGB"
        @click="addComponent('#26302a', 'rgb(246, 190, 16)')"
      />
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, text_color) {
      let payload = []

      payload.push({
        title: 'avatar',
        content: {
          title: color
        },
        inline: {
          color: color,
          text_color: text_color
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
