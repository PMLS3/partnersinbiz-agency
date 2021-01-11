<!-- =========================================================================================
  File Name: UserList.vue
  Description: User List page
  ----------------------------------------------------------------------------------------
 TODO filter branch, edit customer, delete cutomer, outstanding etc... 
========================================================================================== -->

<template>
  <div id="page-user-list">
    <div v-if="!addCustomers">
      <vx-card
        ref="filterCard"
        title="Filters"
        class="mb-8 user-list-filters"
        actionButtons
        @refresh="resetColFilters"
        @remove="resetColFilters"
      >
        <div class="vx-row">
          <div class="w-full vx-col md:w-1/4 sm:w-1/2">
            <label class="text-sm opacity-75">Role</label>
            <v-select
              :options="roleOptions"
              :clearable="false"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="roleFilter"
              class="mb-4 md:mb-0"
            />
          </div>
          <div class="w-full vx-col md:w-1/4 sm:w-1/2">
            <label class="text-sm opacity-75">Status</label>
            <v-select
              :options="statusOptions"
              :clearable="false"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="statusFilter"
              class="mb-4 md:mb-0"
            />
          </div>
          <div class="w-full vx-col md:w-1/4 sm:w-1/2">
            <label class="text-sm opacity-75">Verified</label>
            <v-select
              :options="isVerifiedOptions"
              :clearable="false"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="isVerifiedFilter"
              class="mb-4 sm:mb-0"
            />
          </div>
          <div class="w-full vx-col md:w-1/4 sm:w-1/2">
            <label class="text-sm opacity-75">Department</label>
            <v-select
              :options="departmentOptions"
              :clearable="false"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="departmentFilter"
            />
          </div>
        </div>
      </vx-card>

      <div class="p-6 vx-card">
        <div class="flex flex-wrap items-center">
          <!-- ITEMS PER PAGE -->
          <div class="flex-grow">
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
                    usersData.length - currentPage * paginationPageSize > 0
                      ? currentPage * paginationPageSize
                      : usersData.length
                  }}
                  of {{ usersData.length }}</span
                >
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>
              <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
              <vs-dropdown-menu>
                <vs-dropdown-item @click="gridApi.paginationSetPageSize(10)">
                  <span>10</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                  <span>20</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="gridApi.paginationSetPageSize(25)">
                  <span>25</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="gridApi.paginationSetPageSize(30)">
                  <span>30</span>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>

          <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
          <vs-input
            class="order-3 w-full mt-4 mr-0 sm:mr-4 sm:w-auto sm:order-normal sm:mt-0"
            v-model="searchQuery"
            @input="updateSearchQuery"
            placeholder="Search..."
          />
          <!-- <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button> -->

          <!-- ACTION - DROPDOWN -->
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div
              class="flex items-end justify-center w-32 p-3 text-lg font-medium rounded-lg cursor-pointer shadow-drop d-theme-dark-light-bg"
            >
              <span class="mr-2 leading-none">Actions</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>

            <vs-dropdown-menu>
              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon
                    icon="TrashIcon"
                    svgClasses="h-4 w-4"
                    class="mr-2"
                  />
                  <span>Delete</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon
                    icon="ArchiveIcon"
                    svgClasses="h-4 w-4"
                    class="mr-2"
                  />
                  <span>Archive</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon
                    icon="FileIcon"
                    svgClasses="h-4 w-4"
                    class="mr-2"
                  />
                  <span>Print</span>
                </span>
              </vs-dropdown-item>

              <vs-dropdown-item>
                <span class="flex items-center">
                  <feather-icon
                    icon="SaveIcon"
                    svgClasses="h-4 w-4"
                    class="mr-2"
                  />
                  <span>CSV</span>
                </span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <!-- AgGrid Table -->
        <ag-grid-vue
          ref="agGridTable"
          :components="components"
          :gridOptions="gridOptions"
          class="my-4 ag-theme-material w-100 ag-grid-table"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :rowData="myEstimates"
          rowSelection="multiple"
          colResizeDefault="shift"
          :animateRows="true"
          :pagination="true"
          :paginationPageSize="paginationPageSize"
          :suppressPaginationPanel="true"
          :enableRtl="$vs.rtl"
          :floatingFilter="true"
        >
        </ag-grid-vue>

        <vs-pagination :total="totalPages" :max="7" v-model="currentPage" />
      </div>
    </div>
    <div v-else>
      <DashboardAccountingEstimatesAddAccount :branch="branch" />
    </div>

    <vs-button
      color="primary"
      type="filled"
      class="buy-now"
      @click="changeCustomers"
      :icon="icon"
      radius
    ></vs-button>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import '@/assets/scss/vuexy/extraComponents/agGridStyleOverride.scss'
import vSelect from 'vue-select'

// Cell Renderer
import CellRendererLink from '@/components/tables/ag-grid-table/cell-renderer/link.vue'
import CellRendererStatus from '@/components/tables/ag-grid-table/cell-renderer/status.vue'
import CellRendererVerified from '@/components/tables/ag-grid-table/cell-renderer/verified.vue'
import CellRendererActions from '@/components/tables/ag-grid-table/cell-renderer/actions.vue'
import CellRendererAddStore from '@/components/tables/ag-grid-table/cell-renderer/add_store'

// import  '@/assets/utils/firestore/user'

export default {
  name: 'Estimates',

  props: ['branch'],
  components: {
    AgGridVue,
    vSelect,

    // Cell Renderer
    CellRendererLink,
    CellRendererStatus,
    CellRendererVerified,
    CellRendererActions,
    CellRendererAddStore,
  },
  data() {
    return {
      usersData: [],
      icon: 'add',
      addCustomers: false,

      // Filter Options
      roleFilter: { label: 'All', value: 'all' },
      roleOptions: [
        { label: 'All', value: 'all' },
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Staff', value: 'staff' },
      ],

      statusFilter: { label: 'All', value: 'all' },
      statusOptions: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Blocked', value: 'blocked' },
      ],

      isVerifiedFilter: { label: 'All', value: 'all' },
      isVerifiedOptions: [
        { label: 'All', value: 'all' },
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],

      departmentFilter: { label: 'All', value: 'all' },
      departmentOptions: [
        { label: 'All', value: 'all' },
        { label: 'Sales', value: 'sales' },
        { label: 'Development', value: 'development' },
        { label: 'Management', value: 'management' },
      ],

      searchQuery: '',

      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true,
      },
      columnDefs: [
        {
          headerName: 'Branch',
          field: 'branch',
          filter: true,
          width: 200,
        },

        {
          headerName: 'Salutation',
          field: 'salutation',
          filter: true,
          width: 75,
        },
        {
          headerName: 'Name',
          field: 'name',
          filter: true,
          width: 210,
        },
        {
          headerName: 'Surname',
          field: 'surname',
          filter: true,
          width: 225,
        },
        {
          headerName: 'Company',
          field: 'company',
          filter: true,
          pinned: 'left',
          width: 200,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },

        {
          headerName: 'Position',
          field: 'pos',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Primary',
          field: 'primary',
          filter: true,
          width: 150,
          cellRendererFramework: 'CellRendererStatus',
        },
        {
          headerName: 'Owner Branch',
          field: 'owner_branch',
          filter: true,
          width: 150,
        },

        {
          headerName: 'Actions',
          field: 'transactions',
          width: 150,
          cellRendererFramework: 'CellRendererActions',
        },
      ],

      // Cell Renderer Components
      components: {
        CellRendererLink,
        CellRendererStatus,
        CellRendererVerified,
        CellRendererActions,
        CellRendererAddStore,
      },
    }
  },
  watch: {
    roleFilter(obj) {
      this.setColumnFilter('role', obj.value)
    },
    statusFilter(obj) {
      this.setColumnFilter('status', obj.value)
    },
    isVerifiedFilter(obj) {
      let val =
        obj.value === 'all' ? 'all' : obj.value == 'yes' ? 'true' : 'false'
      this.setColumnFilter('is_verified', val)
    },
    departmentFilter(obj) {
      this.setColumnFilter('department', obj.value)
    },
  },
  computed: {
    myEstimates() {
      return this.$store.state.crm.estimates
    },
    business() {
      return this.$store.state.business.active_business
    },
    paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize()
      else return 10
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
  methods: {
    changeCustomers() {
      this.addCustomers = !this.addCustomers
      if (this.addCustomers) {
        this.icon = 'search'
      } else {
        this.icon = 'add'
      }
    },
    setColumnFilter(column, val) {
      const filter = this.gridApi.getFilterInstance(column)
      let modelObj = null

      if (val !== 'all') {
        modelObj = { type: 'equals', filter: val }
      }

      filter.setModel(modelObj)
      this.gridApi.onFilterChanged()
    },
    resetColFilters() {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null)
      this.gridApi.onFilterChanged()

      // Reset Filter Options
      this.roleFilter = this.statusFilter = this.isVerifiedFilter = this.departmentFilter = {
        label: 'All',
        value: 'all',
      }

      this.$refs.filterCard.removeRefreshAnimation()
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val)
    },
  },
  created() {
    let vm = this
    if (process.client) {
      let myEstimates = []

      let getUsers = this.$fireStore
        .collection('apps')
        .doc('crm')
        .collection(this.business.b_uid)
        .doc('companies')
        .collection('customers')

      getUsers.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let doc = change.doc
          myEstimates.push({
            role: doc.data().role,
            id: doc.id,
            name: doc.data().name,
            surname: doc.data().surname,
            email: doc.data().email,
            company: doc.data().comp_name,
            salutation: doc.data().salutation,
            owner_branch: doc.data().owner_branch,
            pos: doc.data().pos,
            branch: doc.data().branch,
            p_notes: doc.data().p_notes,
            verified: doc.data().verified,
            l_active: doc.data().l_active,
            month: doc.data().month,
            timestamp: doc.data().t_stamp,
          })
          //     }).then(() => {
          //         console.log('store', store, myEstimates)
          //       store.commit('business/UPDATE_STAFF', myEstimates)
        })
      })
      console.log('my', myEstimates)
      vm.$store.commit('crm/ESTIMATES_SET', myEstimates)
    }
  },
  mounted() {
    //   let business = this.$store.state.business.active_business
    //   let store = this.$store
    //   let fireStore = this.$fireStore
    //   getStaff('staff', business, store, fireStore)

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
}
</script>

<style lang="scss">
#page-user-list {
  .user-list-filters {
    .vs__actions {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-58%);
    }
  }
}
.buy-now {
  position: fixed;
  bottom: 5%;
  right: 5%;
  z-index: 51000;
  box-shadow: 0 1px 20px 1px rgb(204, 207, 29);
}
</style>
