<template>
  <div>
    {{ amountVal }}
  </div>
</template>

<script>
export default {
  name: 'CellRendererAmount',

  computed: {
    amountVal() {
      let val = 0
      if (this.params) {
        if (this.params.data.qty && this.params.data.price) {
          val = this.params.data.qty * this.params.data.price
        }
      }

      return val
    }
  }
}
</script>
