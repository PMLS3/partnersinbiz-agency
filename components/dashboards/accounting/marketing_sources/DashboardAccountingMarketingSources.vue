<!-- =========================================================================================
  File Name: UserEditTabSocial.vue
  Description: User Edit Social Tab content
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <client-only>
      <vs-list>
        <vs-list-header title="Marketing Sources"></vs-list-header>
        <vs-list-item
          title="Add Marketing Sources"
          subtitle="You will set communication groups to users"
          class="mb-5"
        >
          <vs-row>
            <vs-input v-model="marketingResource" name="company" />
            <vs-button @click="save('m_sources')">+</vs-button>
          </vs-row>
        </vs-list-item>
        <vs-list-item
          v-if="business.m_sources"
          :title="notes"
          v-for="(notes, i) in business.m_sources"
          :key="i"
        >
          <vs-button
            type="border"
            color="danger"
            icon="delete"
            size="small"
            @click="deleteItem('m_sources', notes, i)"
          ></vs-button>
        </vs-list-item>
        <vs-divider color="success" icon="check"></vs-divider>
      </vs-list>
    </client-only>
  </div>
</template>

<script>
import firebase from 'firebase'
import vSelect from 'vue-select'
import moment from 'moment'

export default {
  name: 'Marketing-Sources',

  components: {
    vSelect,
  },

  data() {
    return {
      marketingResource: '',

      //   data_local: JSON.parse(JSON.stringify(this.data))
    }
  },

  computed: {
    business() {
      return this.$store.state.business.active_business
    },
  },
  methods: {
    deleteItem(type, data, i) {
      let vm = this
      let collection = ''

      collection = 'm_sources'

      this.$fireStore
        .collection('apps')
        .doc('info')
        .collection('groups')
        .doc(this.business.b_uid)
        .update({
          [collection]: firebase.firestore.FieldValue.arrayRemove(data),
        })
        .then(() => {
          vm.successDelete(collection, i)
        })
    },
    deletItemInfo(collection, data) {
      this.$fireStore
        .collection('apps')
        .doc('info')
        .collection('groups')
        .doc(this.business.b_uid)
        .collection(collection)
        .doc(data)
        .delete()
        .then(function () {
          console.log('Document successfully deleted!')
        })
        .catch(function (error) {
          console.error('Error removing document: ', error)
        })
    },
    save(type) {
      let vm = this
      let collection = ''
      let data = ''

      collection = 'm_sources'
      data = vm.marketingResource

      this.$fireStore
        .collection('apps')
        .doc('info')
        .collection('groups')
        .doc(this.business.b_uid)
        .update({
          [collection]: firebase.firestore.FieldValue.arrayUnion(data),
        })
        .then(() => {
          vm.successUpload(collection, data)
        })
    },
    unsuccessUpload() {
      this.$vs.notify({
        color: 'danger',
        title: 'Oops',
        text: 'Something went wrong',
      })
    },

    successUpload(type, value) {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })

      let business = this.business

      if (business.m_sources) {
        business.m_sources.push(value)
      } else {
        business.m_sources = []
        business.m_sources.push(value)
      }

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
    successDelete(type, i) {
      this.$vs.notify({
        color: 'warning',
        title: 'Delete Success',
        text: 'Whoop whoop, been deleted',
      })

      let business = this.business
      let items = {}

      items = business.m_sources
      const filteredItems = items
        .slice(0, i)
        .concat(items.slice(i + 1, items.length))
      business.m_sources = filteredItems

      this.$store.commit('business/UPDATE_BUSINESS_INFO', business)
    },
  },
}
</script>
