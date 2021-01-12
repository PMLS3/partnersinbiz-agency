<!-- =========================================================================================
  File Name: SidebarGroupCollapsed.vue
  Description: give sidebaritems group using vs-sidebar-group
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Group Collapsed" code-toggler>

    <p>You can have groups of sub menus with the component <code>vs-sidebar-group</code> that as a required parameter we have the <code>title</code>, you can add as many groups as you need, including internally from the same component</p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>By default the component is closed but if you need to initialize open you can use the property <code>open</code></p>
    </vs-alert>

    <div class="mt-5">

      <div id="parentx-demo-4">
        <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
        <vs-sidebar parent="body" default-index="1" color="primary" class="sidebarx sidebarpage" spacer v-model="active">

          <div class="header-sidebar" slot="header">
            <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
            <h4>
              My Name
              <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
            </h4>
          </div>

          <vs-sidebar-group title="Aplication">
            <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>

            <vs-sidebar-group title="Store">
              <vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>
              <vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>
              <vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>
            </vs-sidebar-group>

            <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>
            <vs-sidebar-item index="3" icon="https"> Security </vs-sidebar-item>
            <vs-sidebar-item index="4" icon="help"> Help </vs-sidebar-item>
          </vs-sidebar-group>

          <vs-divider icon="person" position="left"> User </vs-divider>

          <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>
          <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>

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
