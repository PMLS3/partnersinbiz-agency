<template>
  <div class="h-screen ">
    <vs-card class="mt-24">
      <vs-radio v-model="optionset" vs-value="songList">Songs</vs-radio>
      <vs-radio v-model="optionset" vs-value="Upload">Upload</vs-radio>
      <!-- <vs-radio v-model="optionset" vs-value="Stations">Stations</vs-radio> -->
      <vs-radio v-model="optionset" vs-value="Station">Station</vs-radio>
    </vs-card>

    <SongsLists v-if="optionset == 'songList'" />
    <!--  <songs-upload v-if="optionset == 'Upload'" />
    <stations v-if="optionset == 'Stations'" />
    <station v-if="optionset == 'Station'" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionset: 'songList',
      audios: [],
      stations: []
    }
  },
  computed: {
    business() {
      return this.$store.state.business.main_business
    },

    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.active_user
        }
      }
    },
    station() {
      return this.$store.state.app.feature
    }
  },
  created() {
    let musicRetrieve = this.$fireStore
      .collection('apps')
      .doc('music')
      .collection('music')
      .where('b_uid', '==', this.business.b_uid)

    musicRetrieve.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        let data = {
          id: doc.id,
          ...doc.data()
        }
        this.audios.push(data)
      })
    })
    this.$store.commit('form/UPLOADED_MUSIC', this.audios)

    let payload = {
      id: this.station.id,
      title: this.station.title,
      description: this.station.description,
      graphic: this.station.graphic,
      room: this.station.title.replace(/\s+/g, ''),
      url: `broadcasts/${this.station.title.replace(/\s+/g, '')}`
      // url: this.station.title
    }
    // let payload = {
    //   id: 123,
    //   title: 'this.station.title',
    //   description: 'this.station.description',
    //   graphic: 'this.station.graphic',
    //   url: `radiostation/station`
    // }
    this.$store.commit('form/UPLOADED_STATIONS', payload)
  }
}
</script>

<style></style>
