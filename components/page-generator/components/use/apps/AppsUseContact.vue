<template>
  <div>
    <vs-row vs-type="flex" vs-justify="space-around" style="margin-top: 115px">
      <vs-col
        vs-w="3"
        vs-sm="6"
        vs-xs="12"
        v-for="contact in contacts"
        :key="contact.id"
        class="p-2 mt-5 ml-5 mr-5"
      >
        <vx-card style="background: rgba(255, 255, 255, 0.3)">
          <img :src="contact.image" style="width: 100%" />
          <vs-divider></vs-divider>
          <div class="text-center">
            <h4>{{ contact.title }}</h4>
          </div>
          <!-- <vs-avatar class="block mx-auto my-6" size="80px" :src=" contact.downloadURL " /> -->
          <div class="mt-6 mb-8 text-center">
            <span v-html="contact.html"></span>
          </div>

          <vs-row
            vs-align="flex-start"
            vs-type="flex"
            vs-justify="center"
            vs-w="12"
          >
            <vs-col vs-type="flex" vs-justify="center" vs-align="center">
              <a :href="`${contact.website}`" target="_blank">
                <vs-button
                  :style="`background-size: cover; background-repeat: no-repeat;`"
                  icon="web"
                ></vs-button>
              </a>
              <a :href="`tel:${contact.number}`">
                <vs-button
                  :style="`background-size: cover; background-repeat: no-repeat; background-color: `"
                  icon="speaker_phone"
                  class="ml-2"
                ></vs-button>
              </a>
              <a :href="`mailto:${contact.email}`">
                <vs-button
                  :style="`background-size: cover; background-repeat: no-repeat;  `"
                  icon="mail"
                  class="ml-2"
                ></vs-button>
              </a>
              <a
                :href="`http://www.google.com/maps/place/${contact.lat},${contact.lng}`"
                target="_blank"
              >
                <vs-button
                  :style="`background-size: cover; background-repeat: no-repeat;    `"
                  icon="location_on"
                  class="ml-2"
                ></vs-button>
              </a>
            </vs-col>
          </vs-row>
        </vx-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// import { db } from "@/firebase/firebaseConfig.js";
// import cardProfile from "@/components/ui-elements/card/CardProfile";

export default {
  //   components: { cardProfile },
  props: ['schema', 'index', 'mainIndex'],

  data() {
    return {
      selected: [],
      contacts: [],
      Categories: [],

      isMounted: false,
    }
  },
  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
  },
  methods: {},

  mounted() {
    this.isMounted = true

    let vm = this

    let contactsRetrieve

    contactsRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    contactsRetrieve.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.contacts.push({
          id: doc.id,
          address: doc.data().addr,
          street: doc.data().addr.addr_name,
          email: doc.data().email,
          image: doc.data().image[0],
          number: doc.data().number,
          number2: doc.data().number_2,
          title: doc.data().title,
          website: doc.data().website,
          lat: doc.data().addr.lat,
          lng: doc.data().addr.lng,
          html: doc.data().desc,
          formatted_address: doc.data().addr.for_address,
        })
      })
    })
  },
}
</script>

<style lang="scss" scoped></style>
