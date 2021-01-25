<!-- =========================================================================================
    File Name: ButtonFilled.vue
    Description: Filled buttons(Buttons with background color)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card title="Filled" code-toggler>
    <p>
      To define the type of button the directive is used <code>type</code> with
      the value of some type of button like it can be: <code>filled</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(62, 201, 214)"
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >RGB</vs-button
      >
      <vs-button
        disabled
        type="filled"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Disabled</vs-button
      >
    </div>

    <template slot="codeContainer">
      &#x3C;vs-button color=&#x22;primary&#x22;
      type=&#x22;filled&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;success&#x22;
      type=&#x22;filled&#x22;&#x3E;Success&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;danger&#x22;
      type=&#x22;filled&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;warning&#x22;
      type=&#x22;filled&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;dark&#x22;
      type=&#x22;filled&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;rgb(62, 201, 214)&#x22;
      type=&#x22;filled&#x22;&#x3E;RGB&#x3C;/vs-button&#x3E; &#x3C;vs-button
      disabled type=&#x22;filled&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
    </template>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
