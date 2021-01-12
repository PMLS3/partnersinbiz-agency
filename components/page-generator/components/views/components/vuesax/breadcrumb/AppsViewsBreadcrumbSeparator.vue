<!-- =========================================================================================
    File Name: BreadcrumbSeparator.vue
    Description: Change separator using separator directive
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Separator" code-toggler>
    <p>
      You can change the separator dividing the links by either passing a string
      to the <code>separator</code> directive like so "<strong>•</strong>",
      "<strong>-</strong>", "<strong>|</strong>" etc..., or by passing in one of
      the material icons text "<strong>chevron_right</strong>"
    </p>

    <vs-alert icon="warning" active="true" color="warning" class="mt-5">
      <span
        >In order to differeciate a custom separator "<strong>•</strong>" from
        an icon "<strong>chevron_right</strong>", we verify the string length.
        If the length is <strong>greater than 1</strong> it will be considered a
        material icon.</span
      > </vs-alert
    ><br />

    <div>
      <vs-breadcrumb
        :items="items"
        separator="•"
        @click="addComponent(items, '•')"
      ></vs-breadcrumb>
      <vs-breadcrumb
        :items="items"
        separator="-"
        @click="addComponent(items, '-')"
      ></vs-breadcrumb>
      <vs-breadcrumb
        :items="items"
        separator="|"
        @click="addComponent(items, '|')"
      ></vs-breadcrumb>
      <vs-breadcrumb
        :items="items"
        :separator="$vs.rtl ? 'chevron_left' : 'chevron_right'"
        @click="
          addComponent(items, `${$vs.rtl ? 'chevron_left' : 'chevron_right'}`)
        "
      ></vs-breadcrumb>
    </div>
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    colorx: '#3DC9B3',
    items: [
      {
        title: 'Dashboard',
        url: '/'
      },
      {
        title: 'Link 1',
        url: '/blog'
      },
      {
        title: 'Link 2',
        disabled: true
      },
      {
        title: 'Active',
        active: true
      }
    ]
  }),
  methods: {
    addComponent(items, separator) {
      let payload = []

      payload.push({
        title: 'breadcrumb',
        content: {
          name: 'BreadCrumb',
          items: items
        },
        inline: {
          separator: separator
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
