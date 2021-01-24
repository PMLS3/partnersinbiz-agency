<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Basic Grids" code-toggler>
    <p>
      Use the existing
      <a href="https://tailwindcss.com/docs/flexbox-display" rel="nofollow"
        >Flexbox</a
      >
      and
      <a href="https://tailwindcss.com/docs/width" rel="nofollow"
        >percentage width</a
      >
      utilities to construct basic grids
    </p>

    <div class="mt-5">
      <!-- Full width column -->
      <div class="flex mb-4" @click="addComponent('w-full')" id="w-full">
        <div class="flex w-full h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex" @click="addComponent('w-full')"
            >w-full</span
          >
        </div>
      </div>

      <!-- Two columns -->
      <div class="flex mb-4" @click="addComponent('w-1/2')" id="w-1/2">
        <div class="flex w-1/2 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/2</span>
        </div>
        <div class="flex w-1/2 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/2</span>
        </div>
      </div>

      <!-- Three columns -->
      <div class="flex mb-4" @click="addComponent('w-1/3')" id="w-1/3">
        <div class="flex w-1/3 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
      </div>

      <!-- Four columns -->
      <div class="flex mb-4" @click="addComponent('w-1/4')" id="w-1/4">
        <div class="flex w-1/4 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
      </div>

      <!-- Five columns -->
      <div class="flex mb-4" @click="addComponent('w-1/5')" id="w-1/5">
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
      </div>

      <!-- Six columns -->
      <div class="flex" @click="addComponent('w-1/6')" id="w-1/6">
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
      </div>
    </div>
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
