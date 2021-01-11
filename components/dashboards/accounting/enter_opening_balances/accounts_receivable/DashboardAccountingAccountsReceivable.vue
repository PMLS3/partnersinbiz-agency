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
      console.log('here', this.tableData)
      this.$store.commit('crm/OPENING_BALANCE', this.tableData)

      //   console.log('header', this.header)
      //   console.log('this.shee', this.sheetName)
      // let vm = this
      // for (let i = 0; i < this.tableData.length; i++) {
      //   let assetsAdd = {
      //     uid: vm.activeUserInfo.uid,
      //     ref: this.tableData[i].Reference,
      //     branch: this.tableData[i].Branch,
      //     ass_type: 'Current Assets',
      //     entry_type: 'Asset Allocation',
      //     ass_name: this.tableData[i].Name,
      //     i_cost: this.tableData[i].Cost,
      //     t_cost: this.tableData[i].Total,
      //     qty: this.tableData[i].Quantity,
      //     desc: this.tableData[i].Description,
      //     val_type: 'none',
      //     trans_type: 'Cash',
      //     c_asset: 'Inventory',
      //     inv: 'Finished Goods',
      //     docs: [],
      //     credit: `Cash : ${this.tableData[i].Total}`,
      //     debit: `Current Assets : ${this.tableData[i].Total}`,
      //     last: moment().format('DD-MM-YYYY'),
      //     date: moment().format('DD-MM-YYYY'),
      //     month: moment().format('MM-YYYY'),
      //     t_stamp: Date.now()
      //   }
      //   if (vm.uploaded_images) {
      //     assetsAdd.documentation = vm.uploaded_images
      //   }
      //   if (vm.asset_type == 'Fixed Assets') {
      //     assetsAdd.fixed_asset = vm.fixed_asset
      //   }
      //   if (vm.asset_type == 'Current Assets') {
      //     assetsAdd.current_asset = vm.current_asset
      //   }
      //   if (vm.current_asset == 'Inventory') {
      // assetsAdd.inventory = vm.inventory
      //   }
      //   if (vm.current_asset == 'Cash Equivalent') {
      //     assetsAdd.cash_equivalent = vm.cash_equivalent
      //   }
      //   if (vm.valueType == 'Depreciation') {
      //     assetsAdd.residual = vm.residual
      //     assetsAdd.expected_life = vm.expectedLife
      //   }
      //   if (vm.transactionType == 'Credit') {
      //     assetsAdd.deposit = vm.deposit
      //     assetsAdd.loan_amount = vm.loanAmount
      //     assetsAdd.loan_term = vm.loanTerm
      //     assetsAdd.interest = vm.interest
      //     assetsAdd.interest_type = vm.interestType
      //   }
      // let ref = this.$fireStore
      //   .collection('apps')
      //   .doc('crm')
      //   .collection(this.business.b_uid)
      //   .doc('book')
      //   .collection('book')
      // ref.add(assetsAdd).then(() => {
      //   console.log('done', i)
      // })
      // }
    }
  }
}
</script>
