<!-- =========================================================================================
    File Name: AlertClosable.vue
    Description: Create closable alert
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Closable" code-toggler>
    <p class="mb-2">
      You can show and hide the alert by means of <code>active.sync</code> and a
      Boolean bind as value
    </p>
    <p>
      The property to determine if the alert can be closed is
      <code>closable</code>
    </p>

    <vs-button
      @click="active1 = !active1"
      color="primary"
      type="filled"
      class="mt-5 mr-4 mb-4"
      >{{ !active1 ? 'Open Alert' : 'Close Alert' }} 1</vs-button
    >
    <vs-button
      @click="active2 = !active2"
      color="primary"
      type="filled"
      class="mb-5"
      >{{ !active2 ? 'Open Alert' : 'Close Alert' }} 2</vs-button
    >

    <vs-alert
      :active.sync="active1"
      closable
      icon-pack="feather"
      close-icon="icon-x"
      @click="addComponent('feather', 'icon-x')"
    >
      Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I
      love wafer.
    </vs-alert>

    <p class="my-5">
      You can also change the icon used for the close buton on the alerts
    </p>

    <div class="mt-5"></div>
    <vs-alert
      :active.sync="active2"
      closable
      close-icon="icon-x-circle"
      icon-pack="feather"
      @click="addComponent('feather', 'icon-x-circle')"
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
      active1: true,
      active2: true,
      description:
        'Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake.'
    }
  },
  methods: {
    addComponent(icon_pack, close_icon) {
      let payload = []

      payload.push({
        title: 'alert',
        content: {
          description: this.description
        },
        inline: {
          active: true,
          icon_pack: icon_pack,
          close_icon: close_icon
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
