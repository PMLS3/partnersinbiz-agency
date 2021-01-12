<!-- =========================================================================================
    File Name: NavbarDefault.vue
    Description: Rendering of default Navbar
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Default" code-toggler>
    <p>
      To add a navbar we have the component <code>vs-navbar</code>, there is a
      series of sub components to determine internal elements
      <code>vs-navbar-title</code>, <code>vs-spacer</code>
    </p>

    <div class="mt-5">
      <vs-navbar v-model="activeItem" class="p-2" @click="addComponent()">
        <div slot="title">
          <vs-navbar-title><span>Vuexy</span></vs-navbar-title>
        </div>

        <vs-navbar-item index="0">
          <a href="#">Home</a>
        </vs-navbar-item>

        <vs-navbar-item index="1">
          <a href="#">News</a>
        </vs-navbar-item>

        <vs-navbar-item index="2">
          <a href="#">Update</a>
        </vs-navbar-item>
      </vs-navbar>
    </div>
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    activeItem: 0
  }),
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'navbar',
        content: {
          title: 'Company',
          items: [
            { title: 'Home', href: '#' },
            { title: 'News', href: '#' },
            { title: 'Update', href: '#' }
          ]
        },

        class: 'p-2'
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
