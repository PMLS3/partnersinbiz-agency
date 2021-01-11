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
    <div
      v-if="no_accounts"
      style="border: 1px solid red"
      class="px-3 py-8 my-8"
    >
      <p class="mb-8">
        The following has no accounts created. Please add accounts or update
        excel. If you continue with upload these transactions won't be recorded.
      </p>
      <vs-row
        vs-w="12"
        v-for="(item, index) in no_accounts"
        :key="index"
        class="p-2"
        style="border-bottom: 1px solid black"
      >
        <vs-col
          vs-type="flex"
          vs-justify="flex-start"
          vs-align="flex-start"
          vs-lg="8"
          vs-sm="4"
          vs-xs="12"
        >
          <h3>{{ item['Account Name'] }}</h3>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
        >
          <h3>{{ item['Credit Amount'] }}</h3>
        </vs-col>
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-lg="2"
          vs-sm="4"
          vs-xs="12"
        >
          <h3>{{ item['Debit Amount'] }}</h3>
        </vs-col>
      </vs-row>
      <DashboardAccountAccountSettingsAddAccount :entry_type="entry_type" />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {
    ImportExcel: () =>
      process.client ? import('@/components/excel/ImportExcel.vue') : null,
  },
  data() {
    return {
      tableData: [],
      header: [],
      sheetName: '',
      entry_type: 'Opening Balance',
    }
  },
  computed: {
    no_accounts() {
      return this.$store.state.crm.no_accounts
    },
  },
  methods: {
    loadDataInTable({ results, header, meta }) {
      this.header = header
      this.tableData = results
      this.sheetName = meta.sheetName
    },
    uploadData() {
      this.$store.commit('crm/OPENING_BALANCE', this.tableData)
    },
  },
}
</script>
