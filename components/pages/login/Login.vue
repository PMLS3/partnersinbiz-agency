<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div
    class="flex items-center justify-center w-full h-screen bg-img vx-row no-gutter"
    id="page-login"
  >
    <div class="m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="items-center justify-center vx-row no-gutter">
            <div class="hidden vx-col lg:block lg:w-1/2">
              <img
                src="@/assets/illustrations/secure_login.svg"
                alt="login"
                class="w-full mx-auto"
              />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="px-8 pt-8 login-tabs-container">
                <div class="mb-4 vx-card__title">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <vs-tabs>
                  <!-- <vs-tab label="JWT">
                    <login-jwt></login-jwt>
                  </vs-tab> -->

                  <vs-tab label="Email" v-if="authorization_type.email">
                    <LoginFirebase :authorization_type="authorization_type" />
                  </vs-tab>
                  <vs-tab label="Phone" v-if="authorization_type.phone">
                    <LoginPhone />
                  </vs-tab>

                  <!-- <vs-tab label="Auth0">
                    <login-auth0></login-auth0>
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
export default {
  name: 'Login',

  computed: {
    authorization_type() {
      return this.$store.state.app.authorization_type
    },
  },
}
</script>

<style lang="scss" scoped>
.login-tabs-container {
  min-height: 505px;

  .con-tab {
    padding-bottom: 14px;
  }

  .con-slot-tabs {
    margin-top: 1rem;
  }
}
</style>
