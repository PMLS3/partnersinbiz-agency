<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <div class="mt-6 vx-row">
        <div
          class="relative w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <!-- <vs-tooltip :text="`Delete ${item.title}`" position="top">
            <vs-button
              class="absolute right-0 z-20"
              icon="delete"
              @click="deleteItem(item.id)"
            ></vs-button>
          </vs-tooltip> -->

          <UiCardAddPageBuilder :item="item" class="h-full" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Events',
  components: {},
  props: {
    item: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      knowledgeBaseSearchQuery: '',
      kb: [],
      categories: [],
    }
  },
  computed: {
    business() {
      return this.$store.state.business.active_business
    },
    main_user() {
      return this.$store.state.auth.main_user
    },
    reseller() {
      return this.$store.state.business.reseller_id
    },
    sub_reseller() {
      return this.$store.state.business.sub_sellers
    },

    motivational_quotes() {
      let num = Math.floor(Math.random() * 55)
      return this.$store.state.info.motivational_quotes[num]
    },
    filteredKB() {
      return this.kb.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(this.knowledgeBaseSearchQuery.toLowerCase()) ||
          item.description
            .toLowerCase()
            .includes(this.knowledgeBaseSearchQuery.toLowerCase())
      )
    },
  },
  created() {
    if (process.client) {
      let vm = this

      let ref = this.$fireStore
        .collection('apps')
        .doc(this.item)
        .collection('app')
        .where('b_uid', '==', this.business.b_uid)

      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.kb.push({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().desc,
              graphic: doc.data().url[0],
              go_to_url: `${window.location.pathname}/${doc.id}`,
              ...doc.data(),
            })
          }
        })
      })

      let catRef = this.$fireStore
        .collection('apps')
        .doc(vm.item)
        .collection('category')
        .where('b_uid', '==', this.business.b_uid)

      catRef.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.categories.push({
              id: doc.id,
              title: doc.data().title,
              color: doc.data().color,
            })
          }
        })
      })
      vm.$store.commit('app/CATEGORIES_SET', vm.categories)
    }
  },
  methods: {
    deleteItem(id) {
      this.$fireStore
        .collection('apps')
        .doc(this.item.item)
        .collection('app')
        .doc(id)
        .delete()
        .then(() => {
          this.success()
          const updatedKb = this.kb.filter((item) => item.id !== id)
          this.kb = updatedKb
        })
        .catch((err) => {
          this.failure(err)
        })
    },
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Successfully deleted!',
        color: 'success',
      })
    },
    failure(err) {
      this.$vs.notify({
        title: 'Oops',
        text: `${err}`,
        color: 'warning',
      })
    },
  },
}
</script>
