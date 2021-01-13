<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div id="ag-grid-demo">
    <vx-card>
      <!-- TABLE ACTION ROW -->
      <div class="flex flex-wrap items-center justify-between">
        <!-- ITEMS PER PAGE -->
        <div class="mb-4 mr-4 md:mb-0 ag-grid-table-actions-left">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div
              class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg"
            >
              <span class="mr-2"
                >{{
                  currentPage * paginationPageSize - (paginationPageSize - 1)
                }}
                -
                {{
                  itemData.length - currentPage * paginationPageSize > 0
                    ? currentPage * paginationPageSize
                    : itemData.length
                }}
                of {{ itemData.length }}</span
              >
              <feather-icon icon="ChevronDownIcon" svg-classes="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                <span>50</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                <span>100</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                <span>150</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
        <div
          class="flex flex-wrap items-center justify-between ag-grid-table-actions-right"
        >
          <vs-input
            v-model="searchQuery"
            class="mb-4 mr-4 md:mb-0"
            placeholder="Search..."
            @input="updateSearchQuery"
          />
          <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()"
            >Export as CSV</vs-button
          >

          <vs-button class="mb-4 md:mb-0" @click="getSelectedRows()"
            >Send to playlist</vs-button
          >
        </div>
      </div>
      <ag-grid-vue
        ref="agGridTable"
        :grid-options="gridOptions"
        class="my-4 ag-theme-material w-100 ag-grid-table"
        :column-defs="columnDefs"
        :default-col-def="defaultColDef"
        :row-data="itemData"
        row-selection="multiple"
        col-resize-default="shift"
        :animate-rows="true"
        :floating-filter="true"
        :pagination="true"
        :pagination-page-size="paginationPageSize"
        :suppress-pagination-panel="true"
        :enable-rtl="$vs.rtl"
      >
      </ag-grid-vue>
      <vs-pagination
        v-model="currentPage"
        :total="totalPages"
        :max="maxPageNumbers"
      />
    </vx-card>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'

import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'

export default {
  components: {
    AgGridVue,
  },
  props: {
    columnDefs: { type: Array, required: true },
    itemData: { type: Array, required: true },
  },
  data() {
    return {
      searchQuery: '',
      gridOptions: {},
      maxPageNumbers: 7,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true,
      },
    }
  },
  computed: {
    paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 50
    },
    totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages()
      else return 0
    },
    currentPage: {
      get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1
        else return 1
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1)
      },
    },
  },
  watch: {
    '$store.state.windowWidth'(val) {
      if (val <= 576) {
        this.maxPageNumbers = 4
        this.gridOptions.columnApi.setColumnPinned('email', null)
      } else this.gridOptions.columnApi.setColumnPinned('email', 'left')
    },
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
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val)
    },
    getSelectedRows() {
      const selectedNodes = this.gridApi.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      const selectedDataStringPresentation = selectedData.map((node) => node)
      console.log(selectedDataStringPresentation)
      let payload = selectedDataStringPresentation
      this.$store.commit('form/SELECTED_MUSIC', payload)
      this.$store.dispatch('form/selectMusic', payload)
    },
  },
}
</script>
