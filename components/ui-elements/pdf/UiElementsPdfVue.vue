<template>
  <div>
    <h1>{{ pdf.title }}</h1>
    {{ pdf.url[0].url }}
    <pdf @loaded="onLoad" :src="pdf.url[0].url" :page="num" ref="mypdf"></pdf>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import panzoom from 'panzoom'
export default {
  props: ['pdf'],
  data() {
    return {
      num: 1,
    }
  },
  components: {
    pdf,
  },
  methods: {
    onLoad() {
      panzooom(this.$refs.mypdf)
    },
  },
}
</script>
