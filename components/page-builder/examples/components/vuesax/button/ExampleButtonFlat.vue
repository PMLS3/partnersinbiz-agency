<!-- =========================================================================================
    File Name: ButtonFlat.vue
    Description: Flat buttons (no border, no background)
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <vx-card title="Flat" code-toggler>
    <p>
      To add a type of button with edges just change the prop
      <code>type</code> to <code>flat</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(11, 189, 135)"
        type="flat"
        @click="addComponent('w-1/6')"
        id="w-1/6"
        >RGB</vs-button
      >
      <vs-button disabled type="flat" @click="addComponent('w-1/6')" id="w-1/6"
        >Disabled</vs-button
      >
    </div>

    <template slot="codeContainer">
      &#x3C;vs-button color=&#x22;primary&#x22;
      type=&#x22;flat&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;success&#x22;
      type=&#x22;flat&#x22;&#x3E;Success&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;danger&#x22;
      type=&#x22;flat&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;warning&#x22;
      type=&#x22;flat&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;dark&#x22;
      type=&#x22;flat&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;rgb(11, 189, 135)&#x22;
      type=&#x22;flat&#x22;&#x3E;RGB&#x3C;/vs-button&#x3E; &#x3C;vs-button
      disabled type=&#x22;flat&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
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
