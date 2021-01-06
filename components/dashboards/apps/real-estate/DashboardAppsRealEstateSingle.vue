<!-- =========================================================================================
    File Name: Dashboard.vue.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
  TODO agents and cost
========================================================================================== -->

<template>
  <div id="knowledge-base-page">
    <client-only>
      <!-- JUMBOTRON -->
      <div class="knowledge-base-jumbotron">
        <div
          class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base"
        >
          <h1 class="mb-1 text-white">Properties</h1>
          <h2 class="text-xl font-semibild text-white leading-tight">
            Create different properties/estates
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
          <div class="py-2 flex justify-between">
            <div class="flex items-center">
              <p class="text-white">
                {{ motivational_quotes }}
              </p>
            </div>

            <UploadApps :schema="schema" :item="item" />
          </div>
        </div>
      </div>
      <div class="vx-row">
        <div
          class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base min-h-250"
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
  name: 'RealEstateSingle',
  components: {},
  data() {
    return {
      item: {
        item: 'RealEstateSingle',
        title: 'Load Property',
        type: 'Single',
      },
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
          title: 'TextInput',
          placeholder: 'Title',
          type: 'text',
          label: 'Title',
          name: 'title',
        },
        // {
        //   title: 'SelectList',
        //   name: 'agent',
        //   multi: false,
        //   label: 'Agent',
        //   options: myAgents
        // },
        {
          title: 'SelectList',
          name: 'category',
          multi: false,
          label: 'Category',
          options: ['Rent', 'Buy'],
        },
        {
          title: 'SelectList',
          name: 'type',
          multi: false,
          label: 'Property Type',
          options: [
            'House',
            'Flats & Apartments',
            'Townhouse & Cluster',
            'Land',
            'Farms & Smallholdings',
            'Commercial Property',
            'Industrial Property',
          ],
        },
        {
          title: 'SelectList',
          name: 'bedrooms',
          multi: false,
          label: 'Bedrooms',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'bathrooms',
          multi: false,
          label: 'Bathrooms',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'parking',
          multi: false,
          label: 'Parking',
          options: ['1', '2', '3', '4', '5+'],
        },
        {
          title: 'SelectList',
          name: 'security',
          multi: true,
          label: 'Security',
          options: [
            'Alarm',
            'Access Gate',
            'Electric Fencing',
            'Intercom',
            'Security Post',
          ],
        },
        {
          title: 'SelectList',
          name: 'amenities',
          multi: true,
          label: 'Amenities',
          options: [
            'Pool',
            'Pet Friendly',
            'Staff Quaters',
            'Sea View',
            'Flatlet / Garden Cottage',
          ],
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image Upload',
          label: 'Image Upload',
          name: 'img',
        },
        {
          title: 'Divider',
          name: 'Divider',
        },
        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'Divider',
          name: 'Divider',
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
        .doc(this.item.item)
        .collection('app')
        .where('id', '==', this.$route.params.id)

      ref.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            let doc = change.doc
            let data = doc.data()
            data.id = doc.id
            vm.kb.push(data)
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
