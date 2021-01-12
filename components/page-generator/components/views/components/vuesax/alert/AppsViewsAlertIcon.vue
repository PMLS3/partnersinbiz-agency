<!-- =========================================================================================
    File Name: AlertIcon.vue
    Description: Change icon in alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Icon" code-toggler>
    <p>
      You can add to the alert a descriptive icon with the property
      <code>icon</code> and as a value the icon name of the icon in the
      currently selected icon pack. (Default is
      <a href="https://material.io/icons/" target="_blank" rel="nofollow"
        >Material Icons</a
      >)
    </p>

    <vs-alert
      active="true"
      class="mt-5"
      icon-pack="feather"
      icon="icon-star"
      @click="addComponent('feather', 'icon-star')"
    >
      Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I
      love wafer.
    </vs-alert>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      description:
        'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
    }
  },
  methods: {
    addComponent(icon_pack, icon) {
      let payload = []

      payload.push({
        title: 'alert',
        content: {
          description: description
        },
        inline: {
          active: true,
          icon_pack: icon_pack,
          icon: icon
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
