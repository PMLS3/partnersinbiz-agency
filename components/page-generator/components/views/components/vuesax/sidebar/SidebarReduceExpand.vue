<!-- =========================================================================================
  File Name: SidebarReduceExpand.vue
  Description: Creating reduce and expanding sidebar
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Reduce and Expand" code-toggler>

    <p>You can have a reduced sidebar with the <code>reduce</code> property which by default makes the sidebar look reduced and when hover expands, if you do not want the functionality to expand when hovering you can remove it with the <code>reduce-not-hover-expand</code> property</p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>You can remove the bounce animation by opening the sidebar with the prop <code>reduce-not-rebound</code></p>
    </vs-alert>

    <div class="mt-5">

      <div id="parentx-demo-6">
        <vs-button @click="active=!active, notExpand = false" color="success" type="gradient" class="mr-4">Open Sidebar Reduce-expand</vs-button>
        <vs-button @click="active=!active, notExpand = true" color="success" type="gradient" class="mt-4">Open Sidebar Reduce-only</vs-button>

        <vs-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1" color="success" class="sidebarx sidebarpage" spacer v-model="active">
          <div class="header-sidebar" slot="header">
            <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
          </div>

          <vs-sidebar-group open title="Application">
            <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce"> Toggle Sidebar </vs-sidebar-item>
            <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>

            <vs-sidebar-group title="Store">
              <vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>
              <vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>
              <vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>
            </vs-sidebar-group>

            <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>
            <vs-sidebar-item index="3" icon="https"> Security </vs-sidebar-item>
            <vs-sidebar-item index="4" icon="help"> Help
            </vs-sidebar-item>
          </vs-sidebar-group>

          <vs-divider icon="person" position="left"> User </vs-divider>

          <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>

          <div class="footer-sidebar" slot="footer">
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
    active: false,
    notExpand: false,
    reduce: true
  })
}
</script>
