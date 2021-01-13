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
        <div
          class="p-8 rounded-lg knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 mb-base"
        >
          <h1 class="mb-1 text-white">Events Calendar</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different calendars
          </h2>

          <vs-input
            icon-no-border
            placeholder="Search Topic or Keyword"
            v-model="knowledgeBaseSearchQuery"
            icon-pack="feather"
            icon="icon-search"
            size="large"
            class="w-full mt-6"
          />
          <div class="flex items-center justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>
            <div class="flex flex-row">
              <UploadCategory :schema="schemas" :item="item" />

              <UploadApps :schema="schema" :item="item" />
            </div>
          </div>
        </div>
      </div>
      <p class="ml-4 text-gray-700">Categories</p>

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
      <div class="mt-3 vx-row">
        <div
          class="w-full vx-col md:w-1/3 sm:w-1/2 mb-base min-h-250"
          v-for="item in filteredKB"
          :key="item.id"
        >
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
  data() {
    return {
      item: { item: 'Events', title: 'Load Folders', type: 'Category' },
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

    schema() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Events Calendar',
          type: 'text',
          label: 'Events Calendar',
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
    schemas() {
      return [
        {
          title: 'TextInput',
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
          name: 'title',
        },
        {
          title: 'ColorSelect',
          placeholder: 'Color',
          type: 'text',
          label: 'Color',
          name: 'color',
        },
      ]
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
              url: `${window.location.pathname}/${doc.id}`,
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
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
  background-image: url('../../../../assets/images/background/night.jpeg');
  background-size: cover;
}
</style>
