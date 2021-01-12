<!-- =========================================================================================
    File Name: ListAvatar.vue
    Description: You can add avatar to list also
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Avatar" code-toggler>
    <p>
      You can implement an avatar in the list with the
      <code>slot="avatar"</code> by putting a [vs-avatar] component
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>
        Vuesax uses the Google Material Icons font library by default. For a
        list of all available icons, visit the official
        <a href="https://material.io/icons/" target="_blank"
          >Material Icons page</a
        >.
      </p>
      <p>
        FontAwesome and other fonts library are supported. Simply use the
        icon-pack with fa or fas. You still need to include the Font Awesome
        icons in your project.
      </p>
    </vs-alert>

    <div class="demo-alignment">
      <vs-list>
        <vs-list-header title="Users" color="danger"></vs-list-header>

        <vs-list-item title="Steve Jobes" subtitle="Top Contributor">
          <template slot="avatar">
            <vs-avatar />
          </template>
        </vs-list-item>

        <vs-list-item title="Matt" subtitle="11 Points">
          <template slot="avatar">
            <vs-avatar vs-text="Vuexy" />
          </template>
        </vs-list-item>

        <vs-list-header title="Profile photo" color="warning"></vs-list-header>

        <vs-list-item
          title="Xian Famous Foods"
          subtitle="A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers."
        >
          <template slot="avatar">
            <vs-avatar vs-text="Vue" />
          </template>
        </vs-list-item>
      </vs-list>
    </div>
  </vx-card>
</template>
