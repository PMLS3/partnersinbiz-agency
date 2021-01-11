<template>
  <div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <p class="mt-5">Branch</p>
        <v-select
          class="w-full"
          v-model="branch"
          :options="branches"
        ></v-select>
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <p>Account Type</p>
        <v-select
          class="w-full"
          v-model="acc_title"
          :options="acc_titles"
        ></v-select>
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <p>Account Class</p>
        <v-select
          class="w-full"
          v-model="acc_type"
          :options="acc_types"
        ></v-select>
      </div>
    </div>

    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <p>Account Name</p>
        <vs-input class="w-full" v-model="acc_name" />
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <p>Account Code</p>
        <vs-input class="w-full" v-model="accountCode" disabled />
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <vs-textarea
          counter="500"
          label="Max: 500 characters"
          :counter-danger.sync="counterDanger"
          v-model="textarea"
        />
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <vs-alert active="true" style="height: 100%">
          <p v-html="info"></p>
        </vs-alert>
      </div>
    </div>
    <div class="mb-6 vx-row">
      <div class="w-full vx-col">
        <vs-checkbox class="inline-flex" v-model="dash"
          >Add to Dashboard</vs-checkbox
        >
      </div>
    </div>
    <div class="vx-row">
      <div class="w-full vx-col">
        <vs-button class="mb-2 mr-3" @click="Submit">Submit</vs-button>
        <!-- <vs-button
          color="warning"
          type="border"
          class="mb-2"
          @click="
            input13 = input14 = input15 = input16 = ''
            check4 = false
          "
          >Cancle</vs-button
        > -->
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import moment from 'moment'

export default {
  name: 'Accounts-Settings',
  props: ['entry_type'],
  components: {
    vSelect,
  },
  data() {
    return {
      acc_name: '',
      acc_title: '',
      acc_type: '',
      acc_titles: ['Asset', 'Liability', 'Equity', 'Income', 'Expense'],
      textarea: '',
      counterDanger: false,
      dash: false,
      branch: '',
    }
  },
  methods: {
    Submit() {
      let vm = this
      let payload = {
        branch: this.branch,
        acc_name: this.acc_name,
        acc_title: this.acc_title,
        acc_type: this.acc_type,
        acc_code: this.accountCode,
        Debit: 0,
        Credit: 0,
        desc: this.textarea,
      }

      let openingAccounts = []
      let myAccounts = {}
      let items = [payload]

      for (let i = 0; i < items.length; i++) {
        if (items[i]) {
          let acc_title = items[i].acc_title.substring(0, 3).toUpperCase()
          let acc_name = items[i].acc_name.substring(0, 3).toUpperCase()
          let acc_type = items[i].acc_type.substring(0, 3).toUpperCase()
          let branch = this.branch.substring(0, 3).toUpperCase()
          let num = Math.floor(Math.random() * 100)

          let acc_code = `${branch}-${acc_title}-${acc_type}-${acc_name}-${num}`

          let item = {
            uid: vm.activeUserInfo.uid,
            acc_name: items[i].acc_name,
            acc_title: items[i].acc_title,
            acc_type: items[i].acc_type,
            Debit: items[i].Debit,
            Credit: items[i].Credit,
            acc_code: acc_code,
            branch: vm.branch,
            desc: '',
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            t_stamp: Date.now(),
          }

          myAccounts[acc_code] = item
          openingAccounts.push(item)
        }
      }

      if (this.entry_type == 'Opening Balance') {
        this.$store.commit('crm/ADD_ACCOUNT', payload)
        this.successUpload()
      } else {
        // this.$fireStore
        //   .collection('apps')
        //   .doc('crm')
        //   .collection(this.business.b_uid)
        //   .doc('accounts_types')
        //   .update(myAccounts)
        //   .then(() => {
        //     vm.moreAccounts(openingAccounts)
        //   })
        //   .catch(function(error) {
        //     console.error('Error writing document: ', error)
        //   })
        vm.moreAccounts(openingAccounts)
      }
    },
    moreAccounts(openingAccounts) {
      this.startLoading()
      let vm = this
      this.account_length = openingAccounts.length
      for (let i = 0; i < openingAccounts.length; i++) {
        let transaction = {
          trans: 'Opening Account',
          trans_id: openingAccounts[i].acc_code,
        }
        let payload = { ...openingAccounts[i], ...transaction }

        this.$fireStore
          .collection('apps')
          .doc('crm')
          .collection(this.business.b_uid)
          .doc('books')
          .collection('accounts')
          .doc(openingAccounts[i].acc_code)
          .set(payload)
          .then(() => {
            vm.accounts_loaded = vm.accounts_loaded + 1
            let e = openingAccounts.length - 1
            if (i == e) {
              vm.endLoading()
            }
          })
      }
    },
    successUpload(type, value) {
      this.$vs.notify({
        color: 'success',
        title: 'Account Added',
        text: 'Whoop whoop, been uploaded',
      })
    },
    startLoading() {
      this.activeLoading = true
      this.$vs.loading({
        type: 'radius',
      })
    },
    endLoading() {
      this.activeLoading = false
      this.$vs.loading.close()
      this.successUpload()
    },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    activeUserInfo() {
      return this.$store.state.user.active_user
    },
    branches() {
      return this.business.branches
    },
    accountCode() {
      let num = Math.floor(Math.random() * 100)
      let acc_title = this.acc_title.substring(0, 3).toUpperCase()
      let acc_type = this.acc_type.substring(0, 3).toUpperCase()
      let acc_name = this.acc_name.substring(0, 3).toUpperCase()
      let branch = this.branch.substring(0, 3).toUpperCase()

      return `${branch}-${acc_title}-${acc_type}-${acc_name}-${num}`
    },
    info() {
      switch (this.acc_type) {
        case 'Other Assets':
          return `<p>Track special assets like goodwill and other intangible assets</p>`
          break
        case 'Other Current Assets':
          return `<p>Any short term asset that can be converted into cash or cash equivalents easily</p>
              <ul><li>Prepaid expenses</li><li>Stocks and Mutual Funds</li></ul>`
          break
        case 'Cash':
          return `<p>To keep track of cash and other cash equivalents like petty cash, undeposited funds, etc.</p>`
          break
        case 'Bank':
          return `<p>To keep track of bank accounts like Savings, Checking, and Money Market accounts</p>`
          break
        case 'Fixed Assets':
          return `<p>Any long term investment or an asset that cannot be converted into cash easily like:</p>
              <ul><li>Land and Buildings</li><li>Plant, Machinery and Equipment</li><li>Computers</li><li>Furniture</li></ul>`
          break
        case 'Inventory':
          return `<p>To keep track of your inventory assets.</p>`
          break
        case 'Payment Clearing':
          return `<p>To keep track of funds moving in and out via payment processors like Stripe, PayPal, etc.</p>`
          break
        case 'Other Current Liability':
          return `<p>Any short term liability like:</p>
                <ul><li>Customer Deposits</li><li>Tax Payable</li></ul>`
          break
        case 'Credit Card':
          return `<p>Create a trail of all your credit card transactions by creating a credit card account</p>`
          break
        case 'Long Term Liability':
          return `<p>Liabilities that mature after a minimum period of one year like Notes Payable, Debentures, and Long Term Loans</p>`
          break
        case 'Other Liability':
          return `<p>Obligation of an entity arising from past transactions or events which would require repayment.</p>
                <ul><li>Tax to be paid</li><li>Loan to be Repaid</li><li>Accounts Payable etc</li></ul>`
          break
        case 'Overseas Tax Payable':
          return `<p>Track your taxes in this account if your business sells digital services to foreign customers.</p>`
          break
        case 'Equity':
          return `<p>Owners or stakeholders interest on the assets of the business after deducting all the liabilities</p>`
          break
        case 'Income':
          return `<p>Income or Revenue earned from normal business activities like sale of goods and services to customers</p>`
          break
        case 'Other Income':
          return `<p>Income or revenue earned from activties not directly related to your business like :</p>
                <ul><li>Interest Earned</li><li>Dividend Earned</li></ul>`
          break
        case 'Expense':
          return `<p>Reflects expenses incurred for running normal business operations, such as :</p>
                <ul><li>Advertisements and Marketing</li><li>Business Travel Expenses</li><li>License Fees</li><li>Utility Expenses</li></ul>`
          break
        case 'Cost of Goods Sold':
          return `<p>This indicates the direct costs attributable to the production of the goods sold by a company such as:</p>
                <ul><li>Material and Labor costs</li><li>Cost of obtaining raw materials</li>  </ul>`
          break
        case 'Other Expense':
          return `<p>Track miscellaneous expenses incurred for activities other than primary business operations or create additional accounts to track default expenses like insurance or contribution towards charity.</p>`
          break

        default:
          break
      }
    },
    acc_types() {
      switch (this.acc_title) {
        case 'Asset':
          return [
            'Other Assets',
            'Other Current Assets',
            'Cash',
            'Bank',
            'Fixed Assets',
            'Inventory',
            'Payment Clearing',
          ]
          break
        case 'Liability':
          return [
            'Other Current Liability',
            'Credit Card',
            'Long Term Liability',
            'Other Liability',
            'Overseas Tax Payable',
          ]
          break
        case 'Equity':
          return ['Equity']
          break
        case 'Income':
          return ['Income', 'Other Income']
          break
        case 'Expense':
          return ['Expense', 'Cost Of Goods Sold', 'Other Expense']
          break
        default:
          break
      }
    },
  },
}
</script>
