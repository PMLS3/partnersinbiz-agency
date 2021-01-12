<!-- =========================================================================================
    File Name: BreadcrumbSlot.vue
    Description: Breadcrumb with slot to get more control over breadcrumb
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Slot" code-toggler>
    <p>
      A default Vue slot that can be used instead of passing in an array of
      object. This allows for greater control of the breadcrumbs
    </p>

    <div class="demo-alignment">
      <vs-breadcrumb>
        <li>
          <router-link to="/">Home</router-link
          ><span class="vs-breadcrum--separator">/</span>
        </li>
        <li>
          <router-link to="/apps/chat">Chat</router-link
          ><span class="vs-breadcrum--separator">/</span>
        </li>
        <li aria-current="page" class="active">Infos</li>
      </vs-breadcrumb>
    </div>
  </vx-card>
</template>

<script>
export default {
  methods: {
    addComponent(color, type) {
      let payload = []

      payload.push({
        title: 'breadcrumb',
        content: {
          name: 'BreadCrumb'
        },
        inline: {
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
