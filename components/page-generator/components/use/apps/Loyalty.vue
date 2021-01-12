<template>
  <div>
    <section v-for="(loyal, index) in loyals" :key="index">
      <gauge :loyal="loyal" :schema="schema" />
    </section>
  </div>
</template>

<script>
import gauge from '@/components/ui-elements/gauge/index.vue'
import firebase from 'firebase'
export default {
  props: ['schema'],

  components: {
    gauge
  },
  data() {
    return {
      loyals: []
    }
  },

  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    }
  },
  methods: {
    goToLogin() {
      //   let name = this.companyDetails.uniqueAppName
      //   if(this.appType == 'website'){
      //  this.$router.push(`/w/${name}`)
      //   }else if(this.appType == 'frontend'){
      //  this.$router.push(`/m/${name}`)
      //   }else{
      //   this.$router.push(`/d/${name}`)
      //   }
    }
  },
  created() {
    let vm = this
    if (process.client) {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('loayl', vm.schema)
          let ref = vm.$fireStore
            .collection('apps')
            .doc('apps')
            .collection(vm.activeBusinessInfo.b_uid)
            .doc(vm.schema.title)
            .collection(vm.schema.title)
            .doc(vm.schema.id)
            .collection('added')

          ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
              let doc = change.doc
              vm.loyals.push({
                id: doc.id,
                typeLoyalty: doc.data().type,
                untill: doc.data().till,
                from: doc.data().from,
                name: doc.data().title,
                points: doc.data().points,
                secret: doc.data().secret,
                minutes: doc.data().minutes,
                category: doc.data().cat,
                kms: doc.data().kms,
                title: doc.data().title,
                downloadURL: doc.data().image,
                description: doc.data().desc,
                lat: doc.data().lat,
                lng: doc.data().lng,
                geo1: doc.data().geo1,
                geo2: doc.data().geo2,
                geo3: doc.data().geo3,
                geo4: doc.data().geo4,
                geo5: doc.data().geo5,
                geo6: doc.data().geo6,
                geo7: doc.data().geo7,
                geo8: doc.data().geo8,
                geo9: doc.data().geo9
              })
            })
          })
          return
        } else {
          vm.goToLogin()
        }
      })
    }
  }
}
</script>

<style>
section {
  padding: 15px;
}
</style>
