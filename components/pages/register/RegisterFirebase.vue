<template>
  <div class="clearfix">
    <vs-input
      label-placeholder="Display Name"
      name="displayName"
      placeholder="Display Name"
      v-model="displayName"
      class="w-full"
    />

    <vs-input
      label-placeholder="Name"
      name="name"
      placeholder="Name"
      v-model="name"
      class="w-full"
    />

    <vs-input
      label-placeholder="Surname"
      name="surname"
      placeholder="Surname"
      v-model="surname"
      class="w-full"
    />

    <vs-input
      name="email"
      type="email"
      label-placeholder="Email"
      placeholder="Email"
      v-model="email"
      class="w-full mt-6"
    />

    <vs-input
      ref="password"
      type="password"
      name="password"
      label-placeholder="Password"
      placeholder="Password"
      v-model="password"
      class="w-full mt-6"
    />

    <vs-input
      type="password"
      name="confirm_password"
      label-placeholder="Confirm Password"
      placeholder="Confirm Password"
      v-model="confirm_password"
      class="w-full mt-6"
    />

    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6"
      >I accept the terms & conditions.</vs-checkbox
    >
    <vs-button type="border" to="/login" class="mt-6" v-if="loginButton"
      >Login</vs-button
    >
    <vs-button
      class="float-right mt-6"
      @click="registerUser"
      :disabled="!validateForm"
      >Register</vs-button
    >
  </div>
</template>

<script>
export default {
  props: {
    goToRoute: { type: String, default: '/' },
    loginButton: { type: Boolean, default: true },
  },
  data() {
    return {
      displayName: '',
      name: '',
      surname: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true,
    }
  },
  computed: {
    validateForm() {
      return true
    },
    business() {
      return this.$store.state.business.main_business
    },
  },
  methods: {
    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
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
      // If form is not validated or user is already login return
      // if (!this.validateForm || !this.checkLogin()) return;
      this.$emit('logged')

      const payload = {
        userDetails: {
          displayName: this.displayName,
          name: this.name,
          surname: this.surname,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password,
          b_uid: this.business.b_uid,
        },
        router: this.$router,
        notify: this.$vs.notify,
        goToRoute: this.goToRoute,
      }
      this.$store.dispatch('auth/registerUser', payload)
    },
  },
}
</script>
