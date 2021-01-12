<!-- =========================================================================================
    File Name: ListBasic.vue
    Description: A basic list of items with title and subtitle
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Basic" code-toggler>
    <p>
      A basic list of items with <code>title</code> and <code>subtitle</code>
    </p>

    <div class="demo-alignment">
      <vs-list>
        <vs-list-item title="One text"></vs-list-item>
        <vs-list-item
          title="Another text"
          subtitle="A little text"
        ></vs-list-item>
        <vs-list-item title="Some more text"></vs-list-item>
        <vs-list-item
          title="Even more text"
          subtitle="Another little text"
        ></vs-list-item>
      </vs-list>
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      isDeleted: false
    }
  },
  methods: {
    addComponent() {
      let payload = []

      payload.push({
        title: 'list',
        content: {
          name: 'List',
          items: [
            {
              title: 'One Text'
            },
            {
              title: 'Another',
              subtitle: 'A little Text'
            },
            {
              title: 'Some more',
              subtitle: 'Whooo'
            }
          ]
        },
        inline: {},
        class: [],
        style: {}
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
