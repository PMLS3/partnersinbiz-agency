<!-- =========================================================================================
  File Name: SidebarParent.vue
  Description: Rendering of sidebar in parent
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Parent" code-toggler class="overflow-hidden">

    <p>You can change the parent of the sidebar with the property <code>parent</code> that as a value requires an element of the DOM (<strong>#idx, .classx</strong>) or a reference of Vuejs as <code>$refs.myrefContent</code></p>

    <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
      <p>By default the parent of the sidebar is the body</p>
    </vs-alert>

    <vs-alert color="primary" icon="new_releases" active="true" class="mb-5">
      <p>You can remove dark background(overlay) by setting <code>hidden-background</code> prop to <code>true</code></p>
    </vs-alert>

    <div slot="no-body-bottom">

      <div id="parentx-demo-2" style="height: 500px;" class="relative">
        <vs-button @click="active=!active" color="primary" type="filled" class="ml-6">Open Sidebar</vs-button>
        <vs-sidebar parent="#parentx-demo-2" :hidden-background="true"  default-index="1" color="primary" class="sidebarx sidebarpage sidebar-demo-parent bordered-sidebar" spacer v-model="active">

          <div class="header-sidebar" slot="header">
            <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
            <h4>
              My Name
              <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
            </h4>
          </div>

          <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>
          <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>

          <vs-divider icon="person" position="left"> User </vs-divider>

          <vs-sidebar-item index="3" icon="verified_user"> Configurations </vs-sidebar-item>
          <vs-sidebar-item index="4" icon="account_box"> Profile </vs-sidebar-item>
          <vs-sidebar-item index="5"> Card </vs-sidebar-item>

          <div class="footer-sidebar" slot="footer">
            <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
            <vs-button icon="settings" color="primary" type="border"></vs-button>
          </div>
        </vs-sidebar>
      </div>
    </div>

    
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    active: false
  })
}
</script>
