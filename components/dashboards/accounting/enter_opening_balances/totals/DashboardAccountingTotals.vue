<template>
  <div>
    <vs-row vs-w="12" class="p-2">
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="8"
        vs-sm="4"
        vs-xs="12"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">Total Credit</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">R {{ total | k_formatter }}</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="8"
        vs-sm="4"
        vs-xs="12"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">Total Debit</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">R {{ total | k_formatter }}</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="8"
        vs-sm="4"
        vs-xs="12"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">Sub Total</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
        style=" border-style: double; border-color: rgba(0,0,0,0.25)"
      >
        <h6 class="ml-3 p-2">R {{ total | k_formatter }}</h6>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="8"
        vs-sm="4"
        vs-xs="12"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
      >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="flex-start"
        vs-align="flex-start"
        vs-lg="2"
        vs-sm="4"
        vs-xs="12"
      >
        <div class="vx-row mb-6">
          <div class="vx-col w-full">
            <p class="mt-5">Branch</p>
            <v-select
              class="w-full "
              v-model="branch"
              :options="branches"
            ></v-select>
          </div>
        </div>
        <vs-button @click="submit">Submit Opening Balances</vs-button>
      </vs-col>
    </vs-row>
    <div class="demo-alignment">
      <div class="fill-row-loading">
        <div
          :class="{ activeLoading: activeLoading }"
          :id="`loading-${types}`"
          class="vs-con-loading__container loading-example"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'
import moment from 'moment'
export default {
  components: {
    vSelect
  },
  data() {
    return {
      types: 'radius',
      branch: '',
      account_length: 0,
      accounts_loaded: 0,
      activeLoading: false
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    activeUserInfo() {
      return this.$store.state.user.main_user
    },
    branches() {
      return this.business.branches
    },
    items() {
      return this.$store.state.crm.accounts
    },
    debit() {
      let vm = this
      let debit = 0
      for (let i = 0; i < vm.items.length; i++) {
        if (vm.items[i]) {
          debit = debit + Number(vm.items[i].Debit)
        }
      }
      return debit
    },
    credit() {
      let vm = this

      let credit = 0
      for (let i = 0; i < vm.items.length; i++) {
        if (vm.items[i]) {
          credit = credit + Number(vm.items[i].Credit)
        }
      }
      return credit
    },
    total() {
      return this.debit - this.credit
    }
  },
  methods: {
    submit() {
      let vm = this
      let openingAccounts = []
      let myAccounts = {}
      let items = this.items

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
            t_stamp: Date.now()
          }

          myAccounts[acc_code] = item
          openingAccounts.push(item)
        }
      }

      // this.$fireStore
      //   .collection('apps')
      //   .doc('crm')
      //   .collection(this.business.b_uid)
      //   .doc('accounts_types')
      //   .set(myAccounts)
      //   .then(() => {
      vm.moreAccounts(openingAccounts)
      // })
    },
    moreAccounts(openingAccounts) {
      this.startLoading()
      let vm = this
      this.account_length = openingAccounts.length
      for (let i = 0; i < openingAccounts.length; i++) {
        let transaction = {
          trans: 'Opening Account',
          trans_id: openingAccounts[i].acc_code
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
    startLoading() {
      this.activeLoading = true
      this.$vs.loading({
        type: 'radius'
      })
    },
    endLoading() {
      this.activeLoading = false
      this.$vs.loading.close()
    }
  }
}
</script>
<style lang="scss">
.fill-row-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .loading-example {
    width: 120px;
    float: left;
    height: 120px;
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    margin: 8px;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.05);
      transform: translate(0, 4px);
    }
    h4 {
      z-index: 40000;
      position: relative;
      text-align: center;
      padding: 10px;
    }
    &.activeLoading {
      opacity: 0 !important;
      transform: scale(0.5);
    }
  }
}
</style>
