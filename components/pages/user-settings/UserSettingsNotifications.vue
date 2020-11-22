<template>
  <vx-card no-shadow>
    <div class="mb-base">
      <h6 class="mb-4">Activity</h6>

      <div class="flex items-center mb-4">
        <vs-switch v-model="userUpdate.comment" />
        <span class="ml-4">Email me when someone comments on my article</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="userUpdate.answer" />
        <span class="ml-4">Email me when someone answers on my form</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="userUpdate.follow" />
        <span class="ml-4">Email me hen someone follows me</span>
      </div>
    </div>

    <div>
      <h6 class="mb-4">Application</h6>

      <div class="flex items-center mb-4">
        <vs-switch v-model="userUpdate.news" />
        <span class="ml-4">News and announcements</span>
      </div>
      <div class="flex items-center mb-4">
        <vs-switch v-model="userUpdate.product_update" />
        <span class="ml-4">Weekly product updates</span>
      </div>
      <div class="flex items-center">
        <vs-switch v-model="userUpdate.blog" />
        <span class="ml-4">Weekly blog digest</span>
      </div>
    </div>

    <!-- Save & Reset Button -->
    <div class="flex flex-wrap items-center justify-end mt-base">
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
        comment: true,
        answer: true,
        follow: false,
        news: false,
        product_update: false,
        blog: true
      }
    };
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("userInfo"))
          ? JSON.parse(localStorage.getItem("userInfo"))
          : this.$store.state.auth.active_user;
      }
    },
    business() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("businessInfo"))
          ? JSON.parse(localStorage.getItem("businessInfo"))
          : this.$store.state.business.main_business;
      }
    }
  },
  mounted() {
    this.userUpdate.comment = this.user.comment ? this.user.comment : "";
    this.userUpdate.answer = this.user.answer ? this.user.answer : "";
    this.userUpdate.follow = this.user.follow ? this.user.follow : "";
    this.userUpdate.news = this.user.news ? this.user.news : "";
    this.userUpdate.product_update = this.user.product_update
      ? this.user.product_update
      : "";
    this.userUpdate.blog = this.user.blog ? this.user.blog : "";
  },
  methods: {
    saveChanges() {
      let vm = this;

      let newUser = {
        ...this.user,
        ...this.userUpdate
      };

      this.$fireStore
        .collection("apps")
        .doc("users")
        .collection(vm.business.b_uid)
        .doc("info")
        .collection("notifications")
        .doc(vm.user.uid)
        .update(vm.userUpdate)
        .then(function() {
          vm.$store.commit("auth/UPDATE_USER_INFO", newUser);

          vm.$vs.notify({
            title: "Submitted",
            text: "Update done and dusted",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success"
          });
        })
        .catch(function(error) {
          vm.$fireStore
            .collection("apps")
            .doc("users")
            .collection(vm.business.b_uid)
            .doc("info")
            .collection("notifications")
            .doc(vm.user.uid)
            .set(vm.userUpdate)
            .then(function() {
              vm.$store.commit("auth/UPDATE_USER_INFO", newUser);

              vm.$vs.notify({
                title: "Submitted",
                text: "Update done and dusted",
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "success"
              });
            })
            .catch(function(error) {
              vm.$vs.notify({
                title: "Error",
                text: `Error: ${error}`,
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "red"
              });
            });
        });
    }
  }
};
</script>
