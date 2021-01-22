<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div
    class="flex items-center justify-center w-full h-screen bg-img vx-row no-gutter"
  >
    <div class="m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter">
            <div
              class="self-center hidden mx-auto vx-col sm:hidden md:hidden lg:block lg:w-1/2"
            >
              <img
                src="@/assets/illustrations/authentication.svg"
                alt="register"
                class="w-full mx-auto"
              />
            </div>
            <div
              class="self-center mx-auto vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
            >
              <div class="px-8 pt-8 register-tabs-container">
                <div class="mb-4 vx-card__title">
                  <h4 class="mb-4">Create Account</h4>
                  <p>Fill the below form to create a new account.</p>
                </div>
                <vs-tabs>
                  <!-- <vs-tab label="JWT">
                                    <register-jwt></register-jwt>
                                  </vs-tab> -->

                  <vs-tab label="Email" v-if="authorization_type.email">
                    <register-firebase></register-firebase>
                  </vs-tab>
                  <vs-tab label="Phone" v-if="authorization_type.phone">
                    <register-phone></register-phone>
                  </vs-tab>
                  <!-- <vs-tab label="Auth0">
                                    <register-auth0></register-auth0>
                                  </vs-tab> -->
                </vs-tabs>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import RegisterJwt from './RegisterJWT.vue'
import RegisterFirebase from './RegisterFirebase.vue'
import RegisterAuth0 from './RegisterAuth0.vue'
import RegisterPhone from './RegisterPhone.vue'
export default {
  name: 'Register',
  components: {
    RegisterJwt,
    RegisterFirebase,
    RegisterAuth0,
    RegisterPhone,
  },
  computed: {
    authorization_type() {
      return this.$store.state.app.authorization_type
    },
  },
}
</script>

<style lang="scss" scoped>
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
