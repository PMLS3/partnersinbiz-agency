<template>
  <div class="h-screen">
    <!-- <HomePage /> -->
    <vs-button @click="$router.push('/Login')" class="mt-24">Login</vs-button>
    <vs-button @click="$router.push('/p')" class="mt-24">Test</vs-button>
    <vs-button @click="$router.push('/p')" class="mt-24">Test</vs-button>
    <vs-button @click="$router.push('/p')" class="mt-24">Test</vs-button>
    <vs-button @click="$router.push('/p')" class="mt-24">Test</vs-button>
    <vs-button @click="$router.push('/p')" class="mt-24">Test</vs-button>
  </div>
</template>
<script>
export default {
  computed: {
    main_business_set() {
      return this.$store.state.business.main_business_set
    },
  },
  created() {
    let vm = this

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

<style></style>
