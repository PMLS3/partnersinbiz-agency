<template>
  <div>
    <vs-row
      vs-align="center"
      vs-type="flex"
      vs-justify="space-around"
      vs-w="12"
    >
      <vs-col
        :key="index"
        v-for="(pdf, index) in pdfs"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="3"
      >
        <vs-row vs-w="12">
          <vs-icon
            icon="info"
            color="rgb(70, 150, 0)"
            size="small"
            @click="popup(pdf)"
          ></vs-icon>
          <vs-col vs-w="12">
            <vs-icon
              icon-pack="material-icons"
              icon="perm_media"
              size="75px"
              color="primary"
              @click="openSite(pdf)"
            />
          </vs-col>
          <vs-col vs-w="12">
            <small>{{ pdf.name }}</small>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-popup class="holamundo" :title="title" :active.sync="popupActivo">
      <div v-html="explain"></div>
    </vs-popup>
  </div>
</template>

<script>
export default {
  props: ['pdfs'],
  data() {
    return {
      popupActivo: false,
      title: '',
      explain: '',
    }
  },
  created() {
    console.log(this.pdfs)
  },

  methods: {
    popup(pdf) {
      this.popupActivo = true
      this.title = pdf.name
      this.explain = pdf.html
    },
    openSite(site) {
      console.log('whooooo')
      console.log('site', site)
      window.open(site.image[0], '_blank')
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
