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
          <h1 class="mb-1 text-white">Video Call</h1>
          <h2 class="text-xl leading-tight text-white font-semibild">
            Create different Gallerys to keep your Images organized
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
            <div class="flex flex-row">
              <vs-tooltip text="View Calendar" position="top">
                <vs-button
                  class="ml-1"
                  icon="preview"
                  @click="$router.push(`/AppsVideoChat/${$route.params.id}`)"
                ></vs-button>
              </vs-tooltip>
              <!-- <UploadApps :schema="schema" :item="item" /> -->
              <!-- <vs-input v-model="userUrl" class="inline-flex mb-2 mr-2" /> -->
              <vs-tooltip text="Copy link to send on" position="top">
                <vs-button
                  v-clipboard:copy="userUrl"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError"
                  icon="content_copy"
                  class="ml-1"
                >
                </vs-button>
              </vs-tooltip>
            </div>
          </div>
        </div>
      </div>
      <vs-card class="flex flex-row w-full">
        <vs-tooltip text="Drawingboard available on call" position="top">
          <vs-checkbox v-model="drawinboard">Drawingboard</vs-checkbox>
        </vs-tooltip>

        <vs-tooltip
          text="Host has to be present before call can start"
          position="top"
        >
          <vs-checkbox v-model="host">Host</vs-checkbox>
        </vs-tooltip>

        <vs-tooltip text="Only invitees can join" position="top">
          <vs-checkbox v-model="private_room">Private</vs-checkbox>
        </vs-tooltip>
        <vs-button @click="updateSettings">Update Settings</vs-button>
      </vs-card>

      <AppsVideoChatVideo :room="$route.params.id" :user="main_user" />
    </client-only>
  </div>
</template>

<script>
// import SimpleCard from '@/components/ui-elements/card/simple.vue'
// import appsCat from '@/components/dashboard/apps_cat/index.vue'

export default {
  name: 'VideoCall',
  components: {},
  data() {
    return {
      item: { item: 'ImgSingle', title: 'Schedule Calls', type: 'Single' },
      knowledgeBaseSearchQuery: '',
      kb: [],
      drawingboard: false,
      host: false,
      private_room: false,
      room_info: {},
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
    userUrl() {
      var url =
        window.location.origin + '/se/AppsVideoChat/' + this.$route.params.id

      return url
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
          placeholder: 'Gallery Name',
          type: 'text',
          label: 'Gallery Name',
          name: 'title',
        },

        {
          title: 'QuilEditor',
          name: 'desc',
          label: 'Description',
          placeholder: 'Description',
        },
        {
          title: 'ImageUpload',
          placeholder: 'Image',
          type: 'text',
          label: 'Image',
          name: 'url',
        },
      ]
    },
  },
  created() {
    let vm = this

    if (process.client) {
      let ref = this.$fireStore
        .collection('apps')
        .doc('VidChatCat')
        .collection('app')
        .doc(vm.$route.params.id)

      ref
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log('Document data:', doc.data())
            vm.room_info = doc.data()

            if (doc.data().drawingboard) {
              this.drawingboard = doc.data().drawingboard
            }

            if (doc.data().host) {
              this.host = doc.data().host
            }

            if (doc.data().private_room) {
              this.private_room = doc.data().private_room
            }
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
          }
        })
        .catch(function (error) {
          console.log('Error getting document:', error)
        })
    }
  },
  methods: {
    updateSettings() {
      let payload = {
        drawingboard: this.drawingboard,
        host: this.host,
        private_room: this.private_room,
      }

      this.$fireStore
        .collection('apps')
        .doc('VidChatCat')
        .collection('app')
        .doc(this.$route.params.id)
        .update(payload)
        .then(() => {
          vm.success()
        })
    },
    success() {
      this.$vs.notify({
        title: 'Success',
        text: 'Call updated',
        color: 'success',
      })
    },
    onCopy() {
      this.$vs.notify({
        title: 'Success',
        text: 'Text copied successfully',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-check-circle',
      })
    },
    onError() {
      this.$vs.notify({
        title: 'Failed',
        text: 'Error in copying text',
        color: 'danger',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-alert-circle',
      })
    },
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
