<!-- =========================================================================================
    File Name: PaginationProgrammaticIncDec.vue
    Description: Programmatic Inc/Dec page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
  <vx-card title="Programmatic Inc/Dec" code-toggler>

    <p>You can also update page number from outside of pagination component.</p>

    <div class="my-5">
      <p class="mb-3">Current Page: {{ currentx }}</p>
      <vs-button @click="currentx++">Increment</vs-button>
      <vs-button class="ml-4 mb-4" @click="currentx--">Decrement</vs-button>
      <vs-pagination :total="20" v-model="currentx"></vs-pagination>
    </div>

  
  </vx-card>
</template>


<script>
export default {
  data: () => ({
    currentx: 5
  })
}
</script>
