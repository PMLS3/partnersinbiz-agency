<template>
  <div class="con-example-images">
    <div v-for="(pdf, index) in pdfs" :key="index" class="image-container">
      <vx-card
        :title="pdf.name"
        title-color="primary"
        content-color="primary"
        class="mt-3"
      >
        <p class="mb-3" v-html="pdf.html"></p>
        <vs-button @click="openSite(pdf)">Open Document</vs-button>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pdfs'],

  methods: {
    openSite(site) {
      window.open(site.downloadURL, '_blank')
    },
  },
}
</script>

<style scoped>
.image-container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
