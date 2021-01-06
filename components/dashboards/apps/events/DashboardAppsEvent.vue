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
          <h1 class="mb-1 text-white">Events</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different events for your Calendar
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

            <apps-load :schema="schema" :item="item" />
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

      <div class="mt-3 con-example-images">
        <div v-for="(img, index) in filteredKB" :key="index"></div>
      </div>
      <client-only>
        <simpleCalendar :events="filteredKB" />
      </client-only>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'EventsSingle',
  components: {
    SimpleCard: () =>
      process.client
        ? import('@/components/ui-elements/card/simple.vue')
        : null,
    appsLoad: () =>
      process.client
        ? import('@/components/dashboard/apps_load/index.vue')
        : null,
    simpleCalendar: () =>
      process.client
        ? import('@/components/apps/calendar/MultiCalendar.vue')
        : null,
  },
  data() {
    return {
      item: { item: 'EventsSingle', title: 'Load Images', type: 'Single' },
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
          label: 'Set Category',
          options: this.cats,
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
          name: 'description',
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
          name: 'date_start',
          label: 'Start Date',
        },
        {
          title: 'TimePicker',
          name: 'time_start',
          label: 'Time Start',
        },
        {
          title: 'DatePicker',
          name: 'date_end',
          label: 'End Date',
        },
        {
          title: 'TimePicker',
          name: 'time_end',
          label: 'Time End',
        },
        {
          title: 'GoogleAddress',
          placeholder: 'Address',
          label: 'Address',
          name: 'addr',
        },
      ]
    },
  },
  created() {
    if (process.client) {
      let vm = this
      let ref = this.$fireStore
        .collection('apps')
        .doc('apps')
        .collection(this.item.item)
        .where('id', '==', this.$route.params.id)

      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            let datas = {
              start: `${doc.data().date_start} ${doc.data().time_start}`,
              end: `${doc.data().date_end} ${doc.data().time_end}`,
              title: doc.data().title,
              icon: 'shopping_cart', // Custom attribute.
              content: doc.data().desc,
              contentFull: doc.data().description,
            }
            data.id = doc.id
            vm.kb.push(datas)
          }
        })
      })
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
