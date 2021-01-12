<!-- =========================================================================================
  File Name: SidebarRight.vue
  Description: Rendering of sidebar on right side(RTL)
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Open on the right" code-toggler>

    <p>You can also choose where you'd like the sidebar to appear, right or left? By default, a sidebar will be located on the left of the screen but sometimes, a right-screened sidebar is really useful!</p>

    <vs-alert icon="warning" active="true" color="warning" class="mb-1">
      <span>A <code>static</code> sidebar will not appear on the right.</span>
    </vs-alert>

    <div class="mt-5">

      <div id="parentx-demo-5">
        <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
        <vs-sidebar position-right parent="body" default-index="1" color="primary" class="sidebarx sidebarpage" spacer v-model="active">

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
