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
                  info.length - currentPage * paginationPageSize > 0
                    ? currentPage * paginationPageSize
                    : info.length
                }}
                of {{ info.length }}</span
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
          <vs-button class="mb-4 ml-3 md:mb-0" @click="popupActivo = true"
            >New</vs-button
          >
          <!-- <vs-button
            class="mb-4 ml-3 md:mb-0"
            @click="gridApi.exportDataAsCsv()"
            >Export CSV</vs-button
          >-->
        </div>
        <vs-row class="mt-6">
          <vs-col vs-w="6">
            <vs-button
              class="mb-4 mr-4 md:mb-0"
              @click="getSelectedRows()"
              color="primary"
              >View
            </vs-button>

            <vs-button
              class="mb-4 mr-4 md:mb-0"
              @click="deleteSelectedRows()"
              color="danger"
              >Delete
            </vs-button>
          </vs-col>
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6">
          </vs-col>
        </vs-row>
      </div>
      <ag-grid-vue
        ref="agGridTable"
        :grid-options="gridOptions"
        class="my-4 ag-theme-material w-100 ag-grid-table"
        :column-defs="columnDefs"
        :default-col-def="defaultColDef"
        :row-data="info"
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

    <!-- <vs-popup
      class="holamundo"
      title="Add Campaign"
      :active.sync="popupActivo"
      style="z-index: 300; margin-top: 5%"
    >
      <div v-if="item == 'Email-Campaign-Specific'">
        <FormsTypesEmails :campaign_type="campaign_type" />
      </div>
      <div class="px-6 pb-12" v-else>
        <FormGenerator :schema="schema" v-model="formData" />

        <div v-if="item == 'Email-Campaigns'">
          <small
            >Date: Place certain dates the email will be sent to list</small
          >
          <small>
            Sequence: Whenever user is added to campaign their sequence of
            emails will be sent
          </small>
        </div>
        <vs-button @click="addForm" class="mt-8">Submit</vs-button>
      </div>
    </vs-popup> -->
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'

import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'

export default {
  props: {
    columnDefs: { type: Array, default: () => [] },
    schema: { type: Array, default: () => [] },
    info: { type: Array, default: () => [] },
    item: { type: Object, default: () => {} },
  },
  components: {
    AgGridVue,
  },
  data() {
    return {
      formData: {},
      popupActivo: false,
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
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },
    route_id() {
      return this.$store.state.app.route_id
    },

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
    this.$nuxt.$on('successEmit', () => {
      //Do Something
      this.popupActivo = false
    })
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
      const selectedNodes = this.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      const selectedDataStringPresentation = selectedData.map((node) => node)

      this.selectedInfo = selectedDataStringPresentation[0]
      this.popupActivo2 = true
    },
    editSelectedRows() {
      const selectedNodes = this.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map((node) => node.data)
      const selectedDataStringPresentation = selectedData.map((node) => node)
      console.log('adfa', selectedDataStringPresentation)
    },
    deleteSelectedRows() {
      let vm = this
      if (process.client) {
        const selectedNodes = this.gridOptions.api.getSelectedNodes()
        const selectedData = selectedNodes.map((node) => node.data)
        const selectedDataStringPresentation = selectedData.map((node) => node)

        for (let i = 0; i < selectedDataStringPresentation.length; i++) {
          if (vm.item == 'Email-Campaign-Specific') {
            vm.$fireStore
              .collection('apps')
              .doc('Email-Campaigns')
              .collection('app')
              .doc(vm.route_id.value)
              .collection('emails')
              .doc(selectedDataStringPresentation[i].id)
              .delete()
              .then(() => {
                vm.successDelete()
              })
              .catch((err) => {
                console.log('error', err)
                vm.unsuccessUpload(err)
              })

            let noItem = this.info.filter(
              (el) => el.id !== selectedDataStringPresentation[i].id
            )

            console.log('no Item', noItem)
          } else {
            vm.$fireStore
              .collection('apps')
              .doc(vm.item)
              .collection('app')
              .doc(selectedDataStringPresentation[i].id)
              .delete()
              .then(() => {
                vm.successDelete()
              })
              .catch((err) => {
                console.log('error', err)
                vm.unsuccessUpload(err)
              })

            let noItem = this.info.filter(
              (el) => el.id !== selectedDataStringPresentation[i].id
            )

            console.log('no Item', noItem)
          }
        }
      }
    },
    addForm() {
      let vm = this
      let form = this.formData
      $nuxt.$emit('formDatas', form)
      setTimeout(() => {
        this.popupActivo = false
      }, 1000)
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item} added`,
        text: 'Whoop whoop, been uploaded',
      })
    },
    successDelete() {
      this.$vs.notify({
        color: 'success',
        title: `${this.item} Deleted`,
        text: 'Successful deletion',
      })
    },
    unsuccessUpload(er) {
      this.$vs.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`,
      })
    },
  },
}
</script>
