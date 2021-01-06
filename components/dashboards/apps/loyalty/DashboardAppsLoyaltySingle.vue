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
          <h1 class="mb-1 text-white">Loyalty Card</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create a Loyalty Card
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
      <!-- KNOWLEDGE BASE CARDS  -->
      <div class="vx-row">
        <div
          class="w-1/2 vx-col sm:w-1/2 md:w-1/3 xl:1/4"
          v-for="(loyal, index) in filteredKB"
          :key="index"
        >
          <CardLoyalty :loyal="loyal" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'LoyaltySingle',
  components: {},
  data() {
    return {
      item: { item: 'LoyaltySingle', title: 'Load Images', type: 'Single' },
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
          item.desc
            .toLowerCase()
            .includes(this.knowledgeBaseSearchQuery.toLowerCase())
      )
    },

    schema() {
      return [
        {
          title: 'SelectList',
          name: 'type',
          multi: false,
          label: 'Type',
          options: ['Points', 'Stamps'],
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
          placeholder: 'How many needed',
          name: 'points',
          label: 'How many needed',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: 'Secret Code',
          name: 'secret',
          label: 'Secret Code',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: 'Minutes before next allowed input',
          name: 'minutes',
          label: 'Minutes before next allowed input',
          minValue: 0,
          type: 'number',
        },
        {
          title: 'TextInput',
          placeholder: "KM's from location ",
          name: 'kms',
          label: "KM's from location ",
          minValue: 0,
          type: 'number',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
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
            data.id = doc.id
            vm.kb.push({
              id: doc.id,
              title: doc.data().title,
              description: doc.data().desc,

              url: doc.data().url,
            })
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
