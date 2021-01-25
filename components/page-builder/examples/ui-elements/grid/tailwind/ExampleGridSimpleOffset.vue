<!-- =========================================================================================
    File Name: GridSimpleOffset.vue
    Description: Add offset to columns
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <vx-card title="Simple Offsets" code-toggler>
    <p>
      Use auto margin utilities like <code>ml-auto</code> and
      <code>mr-auto</code> to offset columns in a row
    </p>

    <div class="mt-5" @click="addComponent('offset')" id="offset">
      <div class="flex flex-wrap">
        <div class="w-1/3 ml-auto bg-grid-color h-12 flex">
          <span class="flex m-auto">
            <span class="sm:inline hidden mr-2">w-1/3</span>
            <span>ml-auto</span>
          </span>
        </div>
        <div class="w-1/3 mr-auto bg-grid-color-secondary h-12 flex">
          <span class="flex m-auto">
            <span class="sm:inline hidden mr-2">w-1/3</span>
            <span>mr-auto</span>
          </span>
        </div>
      </div>
    </div>

    <template slot="codeContainer">
      &lt;div class=&quot;flex flex-wrap&quot;&gt; &lt;div class=&quot;w-1/3
      ml-auto bg-grid-color h-12&quot;&gt;&lt;/div&gt; &lt;div class=&quot;w-1/3
      mr-auto bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt; &lt;/div&gt;
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
