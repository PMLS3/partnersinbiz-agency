<template>
  <div>
    <h1>{{pdf}}</h1>
    <pdf @loaded="onLoad" :src="pdf.downloadURL" :page="num" ref="mypdf"></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";
import panzoom from "panzoom";
export default {
  props: ["pdf"],
  data() {
    return {
      num: 1
    };
  },
  components: {
    pdf
  },
  methods: {
    onLoad() {
      panzooom(this.$refs.mypdf);
    }
  }
};
</script>