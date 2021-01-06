<!-- =========================================================================================
  File Name: items_add.vue
  Description: Template Customizer
  Component Name: Items Add
  ---------------------------------------------

  Add more that one item
TODO delete items, discount on items
========================================================================================== -->
<template lang="html">
  <div>
    <client-only>
      <vs-row>
        <p>Items are</p>
        <v-select
          label="item"
          v-model="tax_type"
          :options="tax_types"
        ></v-select>
      </vs-row>
      <vs-row class="mt-5">
        <v-select label="item" v-model="item" :options="items"></v-select>
        <vs-button @click="AddItem()">Add another item </vs-button>
      </vs-row>
      <ag-grid-vue
        ref="agGridTable"
        :gridOptions="gridOptions"
        class="my-4 ag-theme-material w-100 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="info"
        :pinnedBottomRowData="pinnedBottomRowData"
        rowSelection="multiple"
        colResizeDefault="shift"
        :enableRtl="$vs.rtl"
      >
      </ag-grid-vue>
    </client-only>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import vSelect from 'vue-select'

import CellRendererAmount from '@/components/tables/ag-grid-table/cell-renderer/amount.vue'
import CellRendererItemSelect from '@/components/tables/ag-grid-table/cell-renderer/item_select.vue'

export default {
  name: 'Items-Add',
  components: {
    AgGridVue,
    vSelect,

    CellRendererAmount,
    CellRendererItemSelect
  },
  data: () => ({
    item: '',
    info: [],
    tax_type: '',
    tax_types: ['Tax Inclusive', 'Tax Exlusive'],
    // pinnedBottomRowData: null,
    gridOptions: {},
    gridApi: null,
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true
    }
  }),
  watch: {
    info: {
      handler(val) {
        this.$store.commit('form/ITEMS_SET', this.info)
      },
      deep: true
    },
    '$store.state.windowWidth'(val) {
      if (val <= 576) {
        this.maxPageNumbers = 4
        this.gridOptions.columnApi.setColumnPinned('email', null)
      } else this.gridOptions.columnApi.setColumnPinned('email', 'left')
    },
    selected_item() {
      let index = this.selected_item.index
      let item = this.selected_item.item

      this.info[index].qty = 1
      this.info[index].price = item.price
    }
  },

  computed: {
    totalAmount() {
      let t_amount = 0
      for (let i = 0; i < this.info.length; i++) {
        let s_amount = this.info[i].price * this.info[i].qty
        t_amount = t_amount + s_amount
      }
      return t_amount
    },
    totalQty() {
      let t_amount = 0
      for (let i = 0; i < this.info.length; i++) {
        let s_amount = Number(this.info[i].qty)
        t_amount = Number(t_amount) + Number(s_amount)
      }
      return t_amount
    },
    totalPrice() {
      let t_amount = 0
      for (let i = 0; i < this.info.length; i++) {
        let s_amount = this.info[i].price * this.info[i].qty
        t_amount = t_amount + s_amount
      }

      let ave_amount = t_amount / this.totalQty
      let ave_a
      if (ave_amount) {
        ave_a = ave_amount.toFixed(2)
      } else {
        ave_a = 0
      }
      return ave_a
    },
    pinnedBottomRowData() {
      //   return [
      //     {
      //       qty: this.totalQty,
      //       price: this.totalPrice,
      //       tax: 10,
      //       amount: this.totalAmount
      //     }
      //   ]
    },
    items() {
      return this.$store.state.crm.items
    },
    selected_item() {
      return this.$store.state.form.selected_item
    },
    columnDefs() {
      let items = this.item_list
      return [
        {
          headerName: 'Description',
          field: 'desc',
          width: 250,
          filter: true
        },
        {
          headerName: 'Name',
          field: 'item',
          filter: true,
          width: 175,
          pinned: 'left'
        },
        {
          headerName: 'Quantity',
          field: 'qty',
          width: 175
        },
        {
          headerName: 'Price',
          field: 'price',
          width: 175
        },
        {
          headerName: 'Tax',
          field: 'tax',
          width: 175
        },
        {
          cellRendererFramework: 'CellRendererAmount',
          headerName: 'Amount',
          field: 'amount',
          width: 175
        },
        {
          headerName: 'Edit/Delete',
          field: 'i_name',
          width: 175
        }
      ]
    }
  },
  mounted() {
    this.gridApi = this.gridOptions.api

    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */
    if (this.$vs.rtl) {
      const header = this.$refs.agGridTable.$el.querySelector(
        '.ag-header-container'
      )
      header.style.left =
        '-' + String(Number(header.style.transform.slice(11, -3)) + 9) + 'px'
    }
  },
  methods: {
    editSelectedRows() {
      const selectedNodes = this.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map(node => node.data)
      const selectedDataStringPresentation = selectedData.map(node => node)
      console.log('adfa', selectedDataStringPresentation)
    },
    AddItem() {
      let addDetails = {
        qty: 1,
        amount: 0
      }
      let payload = { ...this.item, ...addDetails }
      this.info.push(payload)
    }
  }
}
</script>
