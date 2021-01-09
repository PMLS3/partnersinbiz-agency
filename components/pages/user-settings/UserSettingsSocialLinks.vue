<template>
  <vx-card no-shadow>
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.twt"
      icon-pack="feather"
      icon="icon-twitter"
      label="Twitter"
      icon-no-border
    />
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.fb"
      icon-pack="feather"
      icon="icon-facebook"
      label="Facebook"
      icon-no-border
    />
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.insta"
      icon-pack="feather"
      icon="icon-instagram"
      label="Instagram"
      icon-no-border
    />
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.github"
      icon-pack="feather"
      icon="icon-github"
      label="GitHub"
      icon-no-border
    />
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.linkedin"
      icon-pack="feather"
      icon="icon-linkedin"
      label="Linkedin"
      icon-no-border
    />
    <vs-input
      class="w-full mb-base"
      v-model="userUpdate.slack"
      icon-pack="feather"
      icon="icon-slack"
      label="Slack"
      icon-no-border
    />

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end">
      <vs-button class="ml-auto mt-2" @click="saveChanges()"
        >Save Changes</vs-button
      >
      <vs-button class="ml-4 mt-2" type="border" color="warning"
        >Reset</vs-button
      >
    </div>
  </vx-card>
</template>

<script>
export default {
  data() {
    return {
      userUpdate: {
        twt: 'https://twitter.com/adoptionism744',
        fb: 'https://www.facebook.com/adoptionism664',
        insta: 'https://www.instagram.com/adopt-ionism744/',
        github: 'https://github.com/madop818',
        linkedin: 'https://codepen.io/adoptism243',
        slack: '@adoptionism744',
      },
    }
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem('userInfo'))
          ? JSON.parse(localStorage.getItem('userInfo'))
          : this.$store.state.auth.active_user
      }
    },
    business() {
      return this.$store.state.business.active_business
    },
  },
  mounted() {
    this.userUpdate.twt = this.user.twt ? this.user.twt : ''
    this.userUpdate.fb = this.user.fb ? this.user.fb : ''
    this.userUpdate.insta = this.user.insta ? this.user.insta : ''
    this.userUpdate.github = this.user.github ? this.user.github : ''
    this.userUpdate.linkedin = this.user.linkedin ? this.user.linkedin : ''
    this.userUpdate.slack = this.user.slack ? this.user.slack : ''
  },
  methods: {
    saveChanges() {
      let vm = this

      let newUser = {
        ...this.user,
        ...this.userUpdate,
      }

      this.$fireStore
        .collection('apps')
        .doc('users')
        .collection(vm.business.b_uid)
        .doc('info')
        .collection('social_links')
        .doc(vm.user.uid)
        .update(vm.userUpdate)
        .then(function () {
          vm.$store.commit('auth/UPDATE_USER_INFO', newUser)

          vm.$vs.notify({
            title: 'Submitted',
            text: 'Update done and dusted',
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'success',
          })
        })
        .catch(function (error) {
          vm.$fireStore
            .collection('apps')
            .doc('users')
            .collection(vm.business.b_uid)
            .doc('info')
            .collection('social_links')
            .doc(vm.user.uid)
            .set(vm.userUpdate)
            .then(function () {
              vm.$store.commit('auth/UPDATE_USER_INFO', newUser)

              vm.$vs.notify({
                title: 'Submitted',
                text: 'Update done and dusted',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'success',
              })
            })
            .catch(function (error) {
              vm.$vs.notify({
                title: 'Error',
                text: `Error: ${error}`,
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'red',
              })
            })
        })
    },
  },
}
</script>
