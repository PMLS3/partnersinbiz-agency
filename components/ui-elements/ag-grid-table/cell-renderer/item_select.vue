<!-- =========================================================================================
  File Name: items_select.vue
  Description: Cell renderer for Item selection, sends item selected plus the rowIndex for updates
  Component Name: Items Select
  ---------------------------------------------

========================================================================================== -->

<template>
  <div style="z-index: 50000">
    <v-select
      label="item"
      class="w-full "
      v-model="item"
      :options="items"
    ></v-select>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  name: 'CellRendererItemSelect',
  components: {
    vSelect
  },
  data() {
    return {
      item: ''
    }
  },
  computed: {
    items() {
      return this.$store.state.crm.items
    }
  },
  watch: {
    item: function() {
      let payload = {
        index: this.params.rowIndex,
        item: this.item
      }

      this.$store.commit('form/SELECTED_ITEM', payload)
    }
  }
}
</script>
