<template>
  <div class="flex items-center" @click="openUp()">
    <img :src="params.data.header[0]" style="height: 60px" />
    <vs-popup class="p" title="Footer" :active.sync="popupActivo">
      <img :src="params.data.header[0]" />
    </vs-popup>
  </div>
</template>

<script>
export default {
  name: 'CellRendererImage',
  data() {
    return {
      popupActivo: false
    }
  },

  methods: {
    openUp() {
      this.popupActivo = true
    }
  }
}
</script>
