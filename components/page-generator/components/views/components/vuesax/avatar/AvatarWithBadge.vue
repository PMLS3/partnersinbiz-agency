<!-- =========================================================================================
    File Name: AvatarWithBadge.vue
    Description: Display avatar with badge
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="With Badge" code-toggler>
    <p>
      You can add a notification label to the avatar, either a reference point
      or a number with the property <code>badge</code>
    </p>
    <p>
      You could also change the badge's color by using the property
      <code>badge-color</code>. You are able to use the
      <router-link to="/ui-elements/colors">Main Colors</router-link> or
      <strong>RGB</strong> and <strong>HEX</strong> colors.
    </p>

    <vs-alert icon="warning" active="true" color="warning" class="mt-5">
      <span
        >Only <strong>RGB</strong> and <strong>HEX</strong> colors are
        supported.</span
      >
    </vs-alert>

    <div class="demo-alignment mt-5">
      <vs-avatar badge @click="addComponent(1)" />
      <vs-avatar
        :badge="badge1"
        text="Luisdaniel"
        @click="addComponent(1, '', Luisdaniel)"
      />
      <vs-avatar
        badge-color="rgb(140, 23, 164)"
        :badge="badge2"
        text="Luisd"
        @click="addComponent(5, 'rgb(140, 23, 164)', 'Luisd')"
      />
      <vs-button color="primary" type="filled" @click="increment">
        Increment Badge counter
      </vs-button>
    </div>
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    badge1: 2,
    badge2: 10
  }),
  methods: {
    increment() {
      this.badge1++
      this.badge2++
    },
    addComponent(badge, badge_color, text, color, type) {
      let payload = []

      payload.push({
        title: 'avatar',
        content: {
          title: text,
          badge: badge
        },
        inline: {
          badge_color: badge_color,
          color: color,
          type: type
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
