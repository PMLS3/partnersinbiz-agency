<template>
  <div class="font-serif bg-white"></div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      title: 'Loading...',
      description: '',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      ],
    }
  },
  computed: {
    main_business_set() {
      return this.$store.state.business.main_business_set
    },
  },
  created() {
    let vm = this
    console.log('CREATED')

    console.log(vm.main_business_set)
    if (process.client) {
      let url = window.location.href

      console.log(url)
      if (url == 'http://localhost:3000/') {
        url = 'https://partnersinbiz.tech/'
      }

      if (!vm.main_business_set) {
        vm.$fireStore
          .collection('business')
          .where('linked_url', '==', url)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, ' => ', doc.data())
              vm.title = doc.data().b_name
              vm.description = doc.data().desc

              let payload = doc.data()
              payload.id = doc.id
              payload.b_uid = doc.id
              vm.$store.commit('business/UPDATE_MAIN_BUSINESS_INFO', payload)
              vm.$store.commit('business/UPDATE_BUSINESS_INFO', payload)
              vm.$store.commit('business/UPDATE_MAIN_BUSINESS_SET', true)
            })
          })
          .catch(function (error) {
            console.log('Error getting documents: ', error)
          })
      }
    }
  },
}
</script>
