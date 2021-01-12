<!-- =========================================================================================
    File Name: NavbarCollapse.vue
    Description: Rendering of Navbar collapsed
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Collapse" code-toggler>
    <p>
      <code>collapse</code> property determines if the component starts hidden
      and with the option of clicking on the menu to open or show the options
    </p>

    <div class="mt-5" @click="addComponent()">
      <vs-navbar collapse v-model="activeItem" class="p-2">
        <div slot="title">
          <vs-navbar-title><span>Company</span></vs-navbar-title>
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
    addComponent(color, type) {
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
        inline: {
          closable: true
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
