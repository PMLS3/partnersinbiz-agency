<!-- =========================================================================================
    File Name: GridWrappingColumns.vue
    Description: flexbox flex-wrap in action
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Wrapping Columns" code-toggler>
    <p>
      Add <code>flex-wrap</code> to your column container to allow columns to
      wrap when they run out of room
    </p>

    <div class="mt-5" @click="addComponent('flex-wrap')" id="flex-wrap">
      <div class="flex flex-wrap -mb-4">
        <div class="flex w-1/3 h-12 mb-4 bg-grid-color-secondary">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-grid-color">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-grid-color-secondary">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-grid-color">
          <span class="flex m-auto">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 mb-4 bg-grid-color-secondary">
          <span class="flex m-auto">w-1/3</span>
        </div>
      </div>
    </div>

    <template slot="codeContainer">
      &lt;div class=&quot;flex flex-wrap -mb-4&quot;&gt; &lt;div
      class=&quot;w-1/3 mb-4 bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;w-1/3 mb-4 bg-grid-color h-12&quot;&gt;&lt;/div&gt;
      &lt;div class=&quot;w-1/3 mb-4 bg-grid-color-secondary
      h-12&quot;&gt;&lt;/div&gt; &lt;div class=&quot;w-1/3 mb-4 bg-grid-color
      h-12&quot;&gt;&lt;/div&gt; &lt;div class=&quot;w-1/3 mb-4
      bg-grid-color-secondary h-12&quot;&gt;&lt;/div&gt; &lt;/div&gt;
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
