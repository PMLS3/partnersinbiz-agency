<template>
  <div>
    <div class="mb-8">
      <UploadExcel :onSuccess="loadDataInTable" />
    </div>
    <vs-button @click="uploadData" class="w-full" v-if="tableData.length > 0"
      >UPLOAD</vs-button
    >
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
    <div class="centerx example-loading">
      <div class="fill-row-loading">
        <div
          :class="{ activeLoading: activeLoading }"
          id="loading-radius"
          class="vs-con-loading__container loading-example"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      tableData: [],
      header: [],
      sheetName: '',
      activeLoading: false
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.main_user
        }
      }
    }
  },
  methods: {
    loadDataInTable({ results, header, meta }) {
      this.header = header
      this.tableData = results
      this.sheetName = meta.sheetName
    },
    uploadData() {
      this.activeLoading = true
      this.$vs.loading({
        type: 'radius'
      })
      let vm = this
      for (let i = 0; i < this.tableData.length; i++) {
        let businessDetails = {
          uid: vm.user.uid,
          b_uid: vm.business.b_uid,
          date: moment().format('DD-MM-YYYY'),
          last_update: moment().format('DD-MM-YYYY')
        }

        let customerDetails = {
          uid: vm.user.uid,
          b_uid: vm.business.b_uid,
          date: moment().format('DD-MM-YYYY'),
          last_update: moment().format('DD-MM-YYYY')
        }

        businessDetails.name = this.tableData[i].name
          ? this.tableData[i].name
          : ''
        businessDetails.email = this.tableData[i].email
          ? this.tableData[i].email
          : ''
        businessDetails.phone = this.tableData[i].phone
          ? this.tableData[i].phone
          : ''
        businessDetails.website = this.tableData[i].website
          ? this.tableData[i].website
          : ''
        businessDetails.facebook = this.tableData[i].facebook
          ? this.tableData[i].facebook
          : ''
        businessDetails.twitter = this.tableData[i].twitter
          ? this.tableData[i].twitter
          : ''
        businessDetails.instagram = this.tableData[i].instagram
          ? this.tableData[i].instagram
          : ''
        businessDetails.linkedin = this.tableData[i].linkedin
          ? this.tableData[i].linkedin
          : ''
        businessDetails.category = this.tableData[i].category
          ? this.tableData[i].category
          : ''

        customerDetails.c_name = this.table[i].c_name
        customerDetails.c_surname = this.table[i].c_surname
        customerDetails.c_email = this.table[i].c_email
        customerDetails.c_phone = this.table[i].c_phone
        customerDetails.c_position = this.table[i].c_position

        let allDetails = {
          ...this.tableData[i],
          date: moment().format('DD-MM-YYYY'),
          last_update: moment().format('DD-MM-YYYY')
        }

        console.log('allDetails', allDetails)

        let businessAdd = this.$fireStore.collection('business')

        let allAdd = this.$fireStore.collection('business')

        businessAdd.add(businessDetails).then(docRef => {
          let e = this.tableData.length - 1
          console.log('done', i, e, e == i)
          console.log('docRef', docRef.id)
          allAdd
            .doc(docRef.id)
            .collection('all')
            .add(allDetails)
            .then(() => {
              let e = this.tableData.length - 1
              console.log('done', i, e, e == i)
              if (i == e) {
                console.log('last')
                vm.activeLoading = false
                vm.$vs.loading.close()
              }
            })
        })
      }
    }
  }
}
</script>
