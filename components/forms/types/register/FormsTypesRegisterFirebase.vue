<template>
  <div class="clearfix">
    <vs-input
      label-placeholder="Username"
      name="displayName"
      placeholder="Username"
      v-model="displayName"
      class="w-full"
    />
    <!-- <span class="text-sm text-danger">{{}}</span> -->

    <vs-input
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6"
    />
    <!-- <span class="text-sm text-danger">{{}}</span> -->

    <vs-input
      ref="password"
      type="password"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6"
    />
    <!-- <span class="text-sm text-danger">{{}}</span> -->

    <vs-input
      type="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6"
    />
    <!-- <span class="text-sm text-danger">{{}}</span> -->

    <div class="mt-6">
      <a
        href="https://github.com/Halo-Republic/agri-ensights/files/4540482/PRIVACY.POLICY.AGRI.ENSIGHTS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >PRIVACY POLICY</a
      >
    </div>

    <a
      href="https://github.com/Halo-Republic/agri-ensights/files/4540484/TERMS.AND.CONDITIONS.AGRI.ENSIGHTS.pdf"
      target="_blank"
      rel="noopener noreferrer"
      >TERMS & CONDITIONS</a
    >

    <vs-checkbox v-model="isPrivatePolicyAccepted" class="mt-6"
      >Private Policy.</vs-checkbox
    >
    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6"
      >Terms & Conditions.</vs-checkbox
    >

    <vs-button class="w-full mt-3 mb-5" @click="registerUser"
      >Register</vs-button
    >

    <div>
      <vs-button
        class="float-right"
        type="border"
        @click="$router.push('/register')"
        >Login</vs-button
      >

      <vs-button type="border" @click="$router.push('/')">Home</vs-button>

      <!-- <vs-button @click='incr()'>Inc</vs-button> -->
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      password_1: '',
      password_2: '',
      setPas: false,
      displayName: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true,
      isPrivatePolicyAccepted: true,
      phNo: '',
      appVerifier: '',
      otp: '',
    }
  },
  computed: {
    validateForm() {
      return (
        this.displayName != '' &&
        this.email != '' &&
        this.password != '' &&
        this.confirm_password != '' &&
        this.isTermsConditionAccepted === true
      )
    },

    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn']
    },
  },

  methods: {
    incr() {
      const statsRef = this.$fireStore.collection('stories').doc('--stats--')

      const increment = firebase.firestore.FieldValue.increment(1)

      const batch = this.$fireStore.batch()

      const storyRef = this.$fireStore
        .collection('stories')
        .doc(`${Math.random()}`)

      batch.set(storyRef, { title: 'New Story!' })

      batch.set(statsRef, { storyCount: increment }, { merge: true })

      batch.commit()
    },
    signout() {
      if (process.client) {
        this.$fireAuth().signOut()
        this.$router.push({ path: '/' })
        window.location.reload() //reload on signout !
      }
    },
    checkLogin() {
      // If user is already logged in notify
      if (isUserLoggedIn) {
        this.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning',
        })

        return false
      }
      return true
    },
    registerUser() {
      if (this.validateForm) {
        if (this.password == this.confirm_password) {
          const payload = {
            userDetails: {
              displayName: this.displayName,
              email: this.email,
              password: this.password,
              confirmPassword: this.confirm_password,
              b_uid: this.$store.state.business.main_business.b_uid,
            },
            notify: this.notify,
            router: this.$router,
          }
          this.$store.dispatch('auth/registerUser', payload)
        } else {
          this.notify({
            title: 'Oh noo',
            text: 'Password and Confirm Password do not match',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'warning',
          })
        }
      } else {
        this.notify({
          title: 'Oh noo',
          text: 'Please fill in all fields',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning',
        })
      }
    },
  },
}
</script>
