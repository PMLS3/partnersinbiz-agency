<!-- =========================================================================================
    File Name: NavbarType.vue
    Description: change navbar type - styles
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Type" code-toggler>
    <p>
      If you want you can change the style of the buttons and the navbar by
      changing the property <code>type</code>
    </p>

    <div class="mt-5">
      <vs-select class="selectExample mb-5" label="Figuras" v-model="type">
        <vs-select-item
          :key="index"
          :value="item.value"
          :text="item.text"
          v-for="(item, index) in types"
        />
      </vs-select>

      <vs-navbar
        :type="type"
        v-model="activeItem"
        class="p-2"
        @click="addComponent()"
      >
        <div slot="title">
          <vs-navbar-title>
            <span>Type {{ type }}</span>
          </vs-navbar-title>
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
    activeItem: 0,
    type: 'gradient',
    types: [
      {
        value: null,
        text: 'Default'
      },
      {
        value: 'flat',
        text: 'Flat'
      },
      {
        value: 'fund',
        text: 'Fund'
      },
      {
        value: 'border',
        text: 'border'
      },
      {
        value: 'gradient',
        text: 'Gradient'
      },
      {
        value: 'shadow',
        text: 'Shadow'
      }
    ]
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
        inline: {
          type: this.type
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
