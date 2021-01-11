<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table Add own Form
    ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <client-only>
    <div id="ag-grid-demo">
      <vx-card>
        <!-- TABLE ACTION ROW -->
        <div class="flex flex-wrap justify-between items-center">
          <!-- ITEMS PER PAGE -->
          <div class="mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
            <vs-dropdown vs-trigger-click class="cursor-pointer">
              <div
                class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
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
              class="mb-4 md:mb-0 mr-4"
              placeholder="Search..."
              @input="updateSearchQuery"
            />
            <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()"
              >Export as CSV</vs-button
            >
            <vs-button class="ml-3 mb-4 md:mb-0" @click="popupActivo = true"
              >New</vs-button
            >
            <vs-button
              class="ml-3 mb-4 md:mb-0"
              @click="gridApi.exportDataAsCsv()"
              >Breakdown</vs-button
            >
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
            <vs-col
              vs-type="flex"
              vs-justify="center"
              vs-align="center"
              vs-w="6"
            >
            </vs-col>
          </vs-row>
        </div>
        <ag-grid-vue
          ref="agGridTable"
          :gridOptions="gridOptions"
          class="my-4 ag-theme-material w-100 ag-grid-table"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :rowData="info"
          rowSelection="multiple"
          colResizeDefault="shift"
          :animateRows="true"
          :pagination="true"
          :paginationPageSize="paginationPageSize"
          :suppressPaginationPanel="true"
          :enableRtl="$vs.rtl"
        >
        </ag-grid-vue>
        <vs-pagination
          v-model="currentPage"
          :total="totalPages"
          :max="maxPageNumbers"
        />
      </vx-card>
      <vs-popup
        class="holamundo"
        title="Lorem ipsum dolor sit amet"
        :active.sync="popupActivo"
        style="z-index: 300; margin-top: 5%;"
      >
        <div class="px-6 pb-12">
          <form-generator :schema="schema" v-model="formData"></form-generator>
          <vs-button @click="addForm">Submit</vs-button>
        </div>
      </vs-popup>

      <vs-popup
        class="holamundo"
        title="Lorem ipsum dolor sit amet"
        :active.sync="popupActivo2"
        style="z-index: 200; margin-top: 5%;"
      >
        <div class="px-6 pb-12">
          <vs-button @click="addForm">Update</vs-button>
        </div>
      </vs-popup>
    </div>
  </client-only>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import contacts from './data.json'
import moment from 'moment'
import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'

export default {
  name: 'gridTable',
  props: ['item', 'schema', 'columnDefs', 'info'],
  components: {
    AgGridVue,
    FormGenerator
  },
  data() {
    return {
      formData: {},
      popupActivo: false,
      popupActivo2: false,

      searchQuery: '',
      gridOptions: {},
      maxPageNumbers: 7,
      // paginationPageSize: 50,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },

      selectedInfo: {}
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
        // this.gridApi.paginationGoToPage(val - 1)
      }
    },
    business() {
      if (process.client) {
        if (localStorage.getItem('mainBusiness')) {
          return JSON.parse(localStorage.getItem('mainBusiness'))
        } else {
          return this.$store.state.business.main_business
        }
      }
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    },
    schema2() {
      let list = []
      for (let i = 0; i < Object.entries(this.selectedInfo).lenght; i++) {}
    }
  },
  watch: {
    '$store.state.windowWidth'(val) {
      if (val <= 576) {
        this.maxPageNumbers = 4
        this.gridOptions.columnApi.setColumnPinned('email', null)
      } else this.gridOptions.columnApi.setColumnPinned('email', 'left')
    }
  },
  created() {
    // let vm = this
    // let ref = this.$fireStore
    //   .collection('apps')
    //   .doc('crm')
    //   .collection(this.business.b_uid)
    //   .doc(this.item)
    //   .collection(this.item)
    // ref.onSnapshot(snapshot => {
    //   snapshot.docChanges().forEach(change => {
    //     if (change.type === 'added') {
    //       let doc = change.doc
    //       let data = doc.data()
    //       data.id = doc.id
    //       vm.info.push(data)
    //     }
    //   })
    // })
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
      const selectedNodes = this.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map(node => node.data)
      const selectedDataStringPresentation = selectedData.map(node => node)

      this.selectedInfo = selectedDataStringPresentation[0]
      this.popupActivo2 = true
    },
    editSelectedRows() {
      const selectedNodes = this.gridOptions.api.getSelectedNodes()
      const selectedData = selectedNodes.map(node => node.data)
      const selectedDataStringPresentation = selectedData.map(node => node)
      console.log('adfa', selectedDataStringPresentation)
    },
    deleteSelectedRows() {
      let vm = this
      if (process.client) {
        const selectedNodes = this.gridOptions.api.getSelectedNodes()
        const selectedData = selectedNodes.map(node => node.data)
        const selectedDataStringPresentation = selectedData.map(node => node)

        for (let i = 0; i < selectedDataStringPresentation.length; i++) {
          vm.$fireStore
            .collection('apps')
            .doc('crm')
            .collection(vm.business.b_uid)
            .doc(vm.item)
            .collection(vm.item)
            .doc(selectedDataStringPresentation[i].id)
            .delete()
            .then(() => {
              vm.successDelete()
            })
            .catch(err => {
              vm.unsuccessUpload(err)
            })

          let noItem = this.info.filter(
            el => el.id !== selectedDataStringPresentation[i].id
          )

          console.log('no Item', noItem)
        }
      }
    },
    addForm() {
      let vm = this
      let form = this.formData
      form.date = moment().format('DD-MM-YYYY')
      form.disp_name = this.user.disp_name
      form.u_uid = this.user.uid

      this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc(this.item)
        .collection(this.item)
        .add(form)
        .then(() => {
          vm.successUpload()
        })
        .catch(err => {
          vm.unsuccessUpload(err)
        })
    },
    successUpload() {
      this.notify({
        color: 'success',
        title: `${this.item} added`,
        text: 'Whoop whoop, been uploaded'
      })
    },
    successDelete() {
      this.notify({
        color: 'success',
        title: `${this.item} Deleted`,
        text: 'Successful deletion'
      })
    },
    unsuccessUpload(er) {
      this.notify({
        color: 'danger',
        title: 'Oh no',
        text: `Error ${er}`
      })
    }
  }
}
</script>
