<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Border" code-toggler>
    <p>
      To add a type of button with edges we change the value of
      <code>border</code>
    </p>

    <div class="demo-alignment">
      <vs-button
        color="primary"
        type="border"
        @click="addComponent('primary')"
        id="primary"
        >Primary</vs-button
      >
      <vs-button
        color="success"
        type="border"
        @click="addComponent('success')"
        id="success"
        >Success</vs-button
      >
      <vs-button
        color="danger"
        type="border"
        @click="addComponent('danger')"
        id="danger"
        >Danger</vs-button
      >
      <vs-button
        color="warning"
        type="border"
        @click="addComponent('warning')"
        id="warning"
        >Warning</vs-button
      >
      <vs-button
        color="dark"
        type="border"
        @click="addComponent('dark')"
        id="dark"
        >Dark</vs-button
      >
      <vs-button
        color="rgb(11, 189, 135)"
        type="border"
        @click="addComponent('RGB')"
        id="RGB"
        >RGB</vs-button
      >
      <vs-button
        disabled
        type="border"
        @click="addComponent('Disabled')"
        id="Disabled"
        >Disabled</vs-button
      >
    </div>

    <template slot="codeContainer">
      &#x3C;vs-button color=&#x22;primary&#x22;
      type=&#x22;border&#x22;&#x3E;Primary&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;success&#x22;
      type=&#x22;border&#x22;&#x3E;Success&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;danger&#x22;
      type=&#x22;border&#x22;&#x3E;Danger&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;warning&#x22;
      type=&#x22;border&#x22;&#x3E;Warning&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;dark&#x22;
      type=&#x22;border&#x22;&#x3E;Dark&#x3C;/vs-button&#x3E; &#x3C;vs-button
      color=&#x22;rgb(11, 189, 135)&#x22;
      type=&#x22;border&#x22;&#x3E;RGB&#x3C;/vs-button&#x3E; &#x3C;vs-button
      disabled type=&#x22;border&#x22;&#x3E;Disabled&#x3C;/vs-button&#x3E;
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
