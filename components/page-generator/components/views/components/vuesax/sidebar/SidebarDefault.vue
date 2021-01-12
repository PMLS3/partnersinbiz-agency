<!-- =========================================================================================
    File Name: SidebarDefault.vue
    Description: Rendering of default sidebar
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Default" code-toggler>

        <p>One of the most common features is to have the hidden sidebar to show it when the user presses a button or makes an action, to add a sidebar we have the component vs-sidebar</p>

        <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
            <p>To add an internal link using <a href="https://router.vuejs.org/" targte="_blank">vue-router</a> you can do them simply by adding the property <a href="https://router.vuejs.org/api/#to">to</a> as if it were a vue-router link.
            <br>
            In case you need an external link or normal html, simply do it with the href property</p>
        </vs-alert>

        <vs-alert color="primary" icon="new_releases" active="true" class="mb-1">
            <p>To make the link is in an active state we have the property <code>v-model</code></p>
        </vs-alert>

        <div class="mt-5">

            <div id="parentx-demo-1">
                <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>
                <vs-sidebar parent="body" default-index="1" color="primary" class="sidebarx sidebarpage" spacer v-model="active">
                    <div class="header-sidebar" slot="header">
                        <vs-avatar size="70px" src="https://randomuser.me/api/portraits/men/85.jpg" />
                        <h4>
                            My Name
                            <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>
                        </h4>
                    </div>
                    <vs-sidebar-item index="1" icon="question_answer">
                        Dashboard
                    </vs-sidebar-item>
                    <vs-sidebar-item index="2" icon="gavel">
                        History
                    </vs-sidebar-item>
                    <vs-divider icon="person" position="left">
                        User
                    </vs-divider>
                    <vs-sidebar-item index="3" icon="verified_user">
                        Configurations
                    </vs-sidebar-item>
                    <vs-sidebar-item index="4" icon="account_box">
                        Profile
                    </vs-sidebar-item>
                    <vs-sidebar-item index="5">
                        Card
                    </vs-sidebar-item>
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

<style lang="scss">
.sidebarpage{
    .vs-sidebar{
        z-index: 52000;
    }
}
</style>
