<!-- =========================================================================================
    File Name: i18n.vue
    Description: I18n demo
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <p class="my-8">
      Download a
      <a href="@/assets/excel/sample_opening_balance" target_blank
        >sample file</a
      >
      and compare it to your import file to ensure you have the perfect file to
      import
    </p>
    <div class="mb-8">
      <import-excel :onSuccess="loadDataInTable" />
    </div>
    <vx-card v-if="tableData.length && header.length">
      <vs-table stripe pagination :max-items="10" search :data="tableData">
        <template slot="header">
          <h4>{{ sheetName }}</h4>
        </template>

        <template slot="thead">
          <vs-th :sort-key="heading" v-for="heading in header" :key="heading">{{
            heading
          }}</vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td
              :data="col"
              v-for="(col, indexcol) in data[indextr]"
              :key="indexcol + col"
            >
              {{ col }}
            </vs-td>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
    <vs-button @click="uploadData">Submit</vs-button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {
    ImportExcel: () =>
      process.client ? import('@/components/excel/ImportExcel.vue') : null
  },
  data() {
    return {
      tableData: [],
      header: [],
      sheetName: ''
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    activeUserInfo() {
      return this.$store.state.user.main_user
    }
  },
  methods: {
    loadDataInTable({ results, header, meta }) {
      this.header = header
      this.tableData = results
      this.sheetName = meta.sheetName
    },
    uploadData() {
      this.$store.commit('crm/OPENING_BALANCE', this.tableData)
    }
  }
}
</script>
