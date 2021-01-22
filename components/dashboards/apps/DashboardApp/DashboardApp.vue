<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <div class="knowledge-base-jumbotron">
        <div class="p-8 pt-24 knowledge-base-jumbotron-content">
          <h1 class="mb-1 text-white">{{ item.title }}</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            {{ item.sub_text }}
          </h2>

          <vs-input
            icon-no-border
            placeholder="Search Topic or Keyword"
            v-model="knowledgeBaseSearchQuery"
            icon-pack="feather"
            icon="icon-search"
            size="large"
            class="w-full mt-6"
            v-if="item.search"
          />
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>
            <div class="flex flex-row">
              <UploadApps :schema="schema" :item="item" />
              <UploadCategory
                :schema="schemas"
                :item="item"
                v-if="item.has_categories"
              />
            </div>
          </div>
          <div class="flex items-center" v-if="item.has_categories">
            <p class="ml-4 text-white">Categories:</p>

            <div class="mt-3 ml-4 vx-row">
              <vs-chip
                transparent
                closable
                :color="cat.color"
                close-icon="close"
                v-for="(cat, index) in categories"
                :key="index"
              >
                {{ cat.title }}
              </vs-chip>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 vx-row">
        <div
          class="relative w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
          <vs-tooltip :text="`Delete ${item.title}`" position="top">
            <vs-button
              class="absolute right-0 z-20"
              icon="delete"
              @click="deleteItem(item.id)"
            ></vs-button>
          </vs-tooltip>

          <UiCardSimple :item="item" class="h-full" />
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
      type: Object,
      default: () => {},
    },
    schema: {
      type: Array,
      default: () => [],
    },
    schemas: {
      type: Array,
      default: () => [],
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
        .doc(this.item.item)
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
        .doc(vm.item.item)
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

<style lang="scss" scoped>
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
</style>
