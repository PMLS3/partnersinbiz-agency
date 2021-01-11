<template>
  <div>
    <vs-button @click="popupActivo4 = true" color="success" type="border"
      >Setting Opening Balance</vs-button
    >
    <vs-popup
      fullscreen
      title="Set Opening Balance"
      :active.sync="popupActivo4"
    >
      <DashboardAccountingOpeningBalances />
    </vs-popup>
    {{ info }}
    <grid-table
      :item="item"
      :info="info"
      :schema="schema"
      :choices="choices"
      :columnDefs="columnDefs"
    />
  </div>
</template>

<script>
export default {
  name: 'Charts-of-Accounts',
  components: {
    gridTable: () =>
      process.client
        ? import('@/components/tables/ag-grid-table/AgGridTableDynamic.vue')
        : null,
  },
  data() {
    return {
      popupActivo4: false,
      item: 'Events',
      choices: {
        view: true,
        adding: false,
        editing: false,
        popup: false,
      },
      info: [],
    }
  },
  created() {
    let ref = this.$fireStore
      .collection('apps')
      .doc('info')
      .collection('groups')
      .doc(this.business.b_uid)
      .collection('branches')

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.info.push(doc.data())
      })
    })
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    activeUserInfo() {
      return this.$store.state.user.active_user
    },

    columnDefs() {
      return [
        {
          headerName: 'Short Description',
          field: 'desc',
          width: 250,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true,
        },
        {
          headerName: 'Branch Name',
          field: 'branch',
          filter: true,
          width: 250,
          pinned: 'left',
        },
        {
          headerName: 'Start Date',
          field: 'd_start',
          filter: true,
          width: 150,
        },
        {
          headerName: 'End Date',
          field: 'd_end',
          filter: true,
          width: 150,
        },
        {
          headerName: 'Start Time',
          field: 't_start',
          filter: true,
          width: 150,
        },
        {
          headerName: 'End Time',
          field: 't_end',
          filter: true,
          width: 150,
        },
      ]
    },

    schema() {
      return [
        {
          title: 'SelectList',
          name: 'cat',
          multi: false,
          label: 'Set Color',
          options: ['red', 'green', 'blue', 'yellow', 'orange', 'brown'],
        },
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'TextArea',
          placeholder: 'Short Description',
          label: 'Short Description',
          name: 'desc',
        },
        {
          title: 'QuilEditor',
          name: 'html',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'logo',
          label: 'Image Upload',
          name: 'imageUpload',
        },
        {
          title: 'DatePicker',
          name: 'd_start',
          label: 'Start Date',
        },
        {
          title: 'TimePicker',
          name: 't_start',
          label: 'Time Start',
        },
        {
          title: 'DatePicker',
          name: 'd_end',
          label: 'End Date',
        },
        {
          title: 'TimePicker',
          name: 't_end',
          label: 'Time End',
        },
        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'Address',
        },
      ]
    },
  },
}
</script>
