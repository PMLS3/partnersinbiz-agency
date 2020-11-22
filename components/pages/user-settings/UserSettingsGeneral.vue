<template>
  <vx-card no-shadow>
    <!-- Img Row -->
    <div class="flex flex-wrap items-center mb-base">
      <vs-avatar :src="userUpdate.avatar" size="70px" class="mr-4 mb-4" />
      <div>
        <vs-button class="mr-4 sm:mb-0 mb-2">Upload photo</vs-button>
        <vs-button type="border" color="danger">Remove</vs-button>
        <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>
      </div>
    </div>

    <!-- Info -->
    <vs-input
      class="w-full mb-base"
      label-placeholder="Username"
      v-model="userUpdate.disp_name"
    ></vs-input>
    <vs-input
      class="w-full mb-base"
      label-placeholder="Name"
      v-model="userUpdate.name"
    ></vs-input>
    <vs-input
      class="w-full mb-base"
      label-placeholder="Surname"
      v-model="userUpdate.surname"
    ></vs-input>
    <vs-input
      class="w-full"
      label-placeholder="Email"
      v-model="userUpdate.u_email"
    ></vs-input>

    <vs-alert
      icon-pack="feather"
      icon="icon-info"
      class="h-full my-4"
      color="warning"
    >
      <span
        >Your account is not verified.
        <a href="#" class="hover:underline">Resend Confirmation</a></span
      >
    </vs-alert>

    <vs-input
      class="w-full my-base"
      label-placeholder="Company"
      v-model="user.company"
    ></vs-input>

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
        avatar: "",
        disp_name: "",
        name: "",
        surname: "",
        u_email: "",
        company: ""
      }
    };
  },
  computed: {
    user() {
      if (process.client) {
        return JSON.parse(localStorage.getItem("userInfo"))
          ? JSON.parse(localStorage.getItem("userInfo"))
          : this.$store.state.auth.main_user;
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
    this.userUpdate.avatar = this.user.avatar ? this.user.avatar : "";
    this.userUpdate.disp_name = this.user.disp_name ? this.user.disp_name : "";
    this.userUpdate.name = this.user.name ? this.user.name : "";
    this.userUpdate.surname = this.user.surname ? this.user.surname : "";
    this.userUpdate.u_email = this.user.email ? this.user.email : "";
    this.userUpdate.company = this.user.company ? this.user.company : "";
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
        .collection("general")
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
          vm.$vs.notify({
            title: "Error",
            text: `Error: ${error}`,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "red"
          });
        });
    }
  }
};
</script>
