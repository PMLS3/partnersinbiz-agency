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
          <h1 class="mb-1 text-white">Blog Posts</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different blog posts for your blog
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
          <div class="flex justify-between py-2">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <UploadApps :schema="schema" :item="item" />
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
          <CardSimple :item="item" class="h-full" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
// import SimpleCard from '@/components/ui-elements/card/simple.vue'
// import appsCat from '@/components/dashboard/apps_cat/index.vue'

export default {
  name: 'BlogSingle',
  components: {},
  data() {
    return {
      item: { item: 'BlogSingle', title: 'Load Post', type: 'Single' },
      knowledgeBaseSearchQuery: '',
      kb: [],
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
    categories() {
      return this.$store.state.app.categories
    },
    cats() {
      let cats = []
      for (let i = 0; i < this.categories.length; i++) {
        cats.push(this.categories[i].title)
      }
      return cats
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
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Category',
          options: this.cats,
        },
        {
          title: 'TextInput',
          placeholder: 'Title',
          label: 'Title',
          name: 'title',
          type: 'text',
        },
        {
          title: 'TextInput',
          placeholder: 'Author',
          label: 'Author',
          name: 'author',
          type: 'text',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'DatePicker',
          name: 'publish',
          label: 'Publish Date',
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
        .where('id', '==', this.$route.params.id)

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
              graphic: doc.data().img,
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
.con-example-images {
  max-height: 500px;
  overflow: auto;
}
</style>
