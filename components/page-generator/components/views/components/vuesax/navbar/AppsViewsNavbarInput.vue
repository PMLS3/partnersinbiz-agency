<!-- =========================================================================================
    File Name: NavbarInput.vue
    Description: Navbar with input
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Input" code-toggler>
    <p>
      You may need an entry in the menu to simply use the
      <code>vs-input</code> component, for example if you need a search engine
    </p>

    <div class="mt-5">
      <vs-navbar
        v-model="activeItem"
        class="p-2"
        @click="addComponent()"
      >
        <div slot="title">
          <vs-navbar-title>
            <span>Vuexy</span>
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
        <vs-input
          icon-pack="feather"
          icon="icon-search"
          placeholder="Search"
          class="input-rounded-full"
          icon-no-border
          v-model="search"
          size="small"
        />
      </vs-navbar>
    </div>
  </vx-card>
</template>

<script>
export default {
  data: () => ({
    activeItem: 0,
    search: ''
  })
}
</script>
