<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <vs-row vs-type="flex" vs-justify="space-around">
      {{ items[0] }}
      <vs-col
        vs-w="3"
        vs-sm="6"
        vs-xs="12"
        v-for="contact in items"
        :key="contact.id"
        class="p-2 mt-5 ml-5 mr-5"
      >
        <vx-card style="background: rgba(255, 255, 255, 0.3)">
          <img :src="contact.downloadURL" style="width: 100%" />
          <vs-divider></vs-divider>
          <div class="text-center">
            <h4>{{ contact.name }}</h4>
          </div>
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
export default {
  name: 'AppsEvents',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('ContactsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()

          data.id = doc.id
          vm.items.push(data)
        }
      })
    })
  },
}
</script>

<style></style>
