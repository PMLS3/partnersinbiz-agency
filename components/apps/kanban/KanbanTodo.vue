<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO: khanban item popup fill in details of customer as well as more info, better saving strat
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <h3>Whats need or can be improved on?</h3>
      <small>Please be specific to this</small>

      <div class="w-full vx-row">
        <!-- <div
          class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <UiCardSimple :item="item" class="h-full" />
        </div> -->
        <vs-checkbox v-model="autoSave" class="absolute p-3 mt-4"
          >Auto Save</vs-checkbox
        >
        <Kanban
          :columns="columns"
          :tags="tags"
          :columnSchema="columnSchema"
          :tagSchema="tagSchema"
          :formSchema="formSchema"
          type="app"
          @saveColumn="saveColumn"
          @saveItem="saveItem"
          @saveTag="saveTag"
          @save-board="saveBoard"
        />
      </div>
    </client-only>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Kanban-Todo',
  components: {},
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      item: { item: 'ImgCat', title: 'Load Folders', type: 'Category' },
      knowledgeBaseSearchQuery: '',
      columns: [],
      tags: [{ name: 'Default', color: 'black' }],
      hasDoc: false,
      autoSave: false,
    }
  },
  watch: {
    columns: {
      handler: function (newVal) {
        if (this.autoSave) {
          this.saveBoard()
        }
      },
      deep: true,
    },
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    user() {
      return this.$store.state.auth.main_user
    },

    date() {
      return Date.now()
    },
    // motivational_quotes() {
    //   let num = Math.floor(Math.random() * 55)
    //   return this.$store.state.info.motivational_quotes[num]
    // },
    // filteredKB() {
    //   return this.columns.filter(
    //     (item) =>
    //       item.title
    //         .toLowerCase()
    //         .includes(this.knowledgeBaseSearchQuery.toLowerCase())
    //     // .includes(this.knowledgeBaseSearchQuery.toLowerCase()) ||
    //     // item.desc
    //     //   .toLowerCase()
    //     //   .includes(this.knowledgeBaseSearchQuery.toLowerCase())
    //   )
    // },
    tagName() {
      return this.tags.map((item) => item.name)
    },
    formSchema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          title: 'QuilEditor',
          placeholder: 'Description',
          label: 'Description',
          name: 'desc',
          type: 'text',
        },
        {
          title: 'DatePicker',
          placeholder: 'Date',
          label: 'Date',
          name: 'date',
        },
        {
          title: 'SelectList',
          name: 'type',
          label: 'Tag',
          options: this.tagName,
        },
      ]
    },
    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
          name: 'title',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Cover Image',
          type: 'text',
          label: 'Cover Image',
          name: 'url',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
      ]
    },
    columnSchema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
          type: 'text',
        },
      ]
    },
    tagSchema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'name',
          type: 'text',
        },
        {
          title: 'ColorSelect',
          placeholder: 'Color',
          label: 'Color',
          name: 'color',
          type: 'text',
        },
      ]
    },
  },
  methods: {
    saveColumn(data) {
      let payload = {
        title: data.title,
        children: [],
      }
      this.columns.push(payload)
    },
    saveTag(data) {
      let payload = {
        name: '',
        color: '',
      }
      if (data.name) {
        payload.name = data.name
      }
      if (data.color) {
        payload.color = data.color
      }
      this.tags.push(payload)
    },
    saveItem(data) {
      let payload = {
        color: 'black',
        date: moment(this.date).format('YYYY-MM-DD'),
        desc: '',
        title: '',
        type: 'Default',
        url: '',
        created_uid: this.user.uid,
        assigned_uid: [],
        children: [],
        t_stamp: Date.now(),
      }
      if (data.data.color) {
        payload.color = data.data.color
      }
      if (data.data.date) {
        payload.date = data.data.date
      }
      if (data.data.desc) {
        payload.desc = data.data.desc
      }
      if (data.data.title) {
        payload.title = data.data.title
      }
      if (data.data.type) {
        payload.type = data.data.type
      }
      if (data.data.url) {
        payload.url = data.data.url
      }
      this.columns[data.index].children.push(payload)
    },
    saveBoard() {
      let vm = this
      let tags = this.tags
      let columns = this.columns
      if (this.hasDoc) {
        vm.$fireStore
          .collection('support')
          .doc(this.type)
          .update({ tags })
          .then(() =>
            vm.$vs.notify({
              title: 'Tags Saved',
              text: 'Your tags been saved',
              color: 'success',
            })
          )
        vm.$fireStore
          .collection('support')
          .doc(this.type)
          .update({ columns })
          .then(() =>
            vm.$vs.notify({
              title: 'Board Saved',
              text: 'Your board been saved',
              color: 'success',
            })
          )
      } else {
        vm.$fireStore
          .collection('support')
          .doc(this.type)
          .set({ tags })
          .then(() =>
            vm.$fireStore
              .collection('support')
              .doc(this.type)
              .update({ columns })
              .then(() =>
                vm.$vs.notify({
                  title: 'Board Saved',
                  text: 'Your board been saved',
                  color: 'success',
                })
              )
          )
      }
    },
  },
  created() {
    if (process.client) {
      let vm = this
      var docRef = this.$fireStore.collection('support').doc(this.type)
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            vm.hasDoc = true
            console.log('doc', doc.data())
            if (doc.data().tags) {
              vm.tags = doc.data().tags
            } else {
              vm.tags = []
            }
            if (doc.data().columns) {
              vm.columns = doc.data().columns
            } else {
              vm.columns = []
            }
          } else {
            // doc.data() will be undefined in this case
            vm.$vs.notify({
              title: 'No Tickets',
              text: 'No support tickets',
              color: 'warning',
            })
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    }
  },
}
</script>
