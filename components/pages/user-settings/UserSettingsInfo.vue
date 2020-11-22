// TODO list countries and languages

<template>
  <vx-card no-shadow>
    <!-- Bio -->
    <vs-textarea
      label="Bio"
      v-model="userUpdate.bio"
      placeholder="Your bio..."
    />

    <!-- DOB -->
    <div class="mt-8">
      <label class="text-sm">Birth Date</label>
      <!-- <flat-pickr
        v-model="userUpdate.dob"
        :config="{ dateFormat: 'd F Y' }"
        class="w-full"
      /> -->
    </div>

    <!-- Country -->
    <div class="mt-8">
      <label class="text-sm">Country</label>
      <v-select
        v-model="userUpdate.country"
        :options="countryOptions"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
      />
    </div>

    <!-- Languages -->
    <div class="mt-8">
      <label class="text-sm">Languages</label>
      <v-select
        v-model="userUpdate.lang_known"
        multiple
        :closeOnSelect="false"
        :options="langOptions"
        :dir="$vs.rtl ? 'rtl' : 'ltr'"
      />
    </div>

    <!-- Mobile Number -->
    <vs-input
      class="w-full mt-8"
      type="number"
      label-placeholder="Mobile"
      v-model="userUpdate.mobile"
    />

    <!-- Website  -->
    <vs-input
      class="w-full mt-8"
      label-placeholder="Website"
      v-model="userUpdate.website"
    />

    <!-- Gender -->
    <div class="mt-8 mb-base">
      <label class="text-sm">Gender</label>
      <div class="mt-2">
        <vs-radio
          v-model="userUpdate.gender"
          vs-name="userUpdate.gender"
          vs-value="male"
          class="mr-4"
          >Male</vs-radio
        >
        <vs-radio
          v-model="userUpdate.gender"
          vs-name="userUpdate.gender"
          vs-value="female"
          class="mr-4"
          >Female</vs-radio
        >
        <vs-radio
          v-model="userUpdate.gender"
          vs-name="userUpdate.gender"
          vs-value="other"
          >Other</vs-radio
        >
      </div>
    </div>

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
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import vSelect from "vue-select";

export default {
  components: {
    flatPickr,
    vSelect
  },
  data() {
    return {
      userUpdate: {
        bio: "",
        dob: "",
        country: "",
        lang_known: "",
        gender: "",
        mobile: "",
        website: ""
      },

      // Options
      countryOptions: [
        { label: "Australia", value: "australia" },
        { label: "France", value: "france" },
        { label: "Germany", value: "germany" },
        { label: "India", value: "india" },
        { label: "Jordan", value: "jordan" },
        { label: "Morocco", value: "morocco" },
        { label: "Portuguese", value: "portuguese" },
        { label: "Syria", value: "syria" },
        { label: "USA", value: "usa" }
      ],
      langOptions: [
        { label: "English", value: "english" },
        { label: "Spanish", value: "spanish" },
        { label: "French", value: "french" },
        { label: "Russian", value: "russian" },
        { label: "German", value: "german" },
        { label: "Arabic", value: "arabic" },
        { label: "Sanskrit", value: "sanskrit" }
      ]
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
  created() {
    this.userUpdate.bio = this.user.bio ? this.user.bio : "";
    this.userUpdate.dob = this.user.dob ? this.user.dob : "";
    this.userUpdate.country = this.user.country ? this.user.country : "";
    this.userUpdate.lang_known = this.user.lang_known
      ? this.user.lang_known
      : "";
    this.userUpdate.gender = this.user.gender ? this.user.gender : "";
    this.userUpdate.mobile = this.user.mobile ? this.user.mobile : "";
    this.userUpdate.website = this.user.website ? this.user.website : "";
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
        .collection("info")
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
            .collection("info")
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
              console.log("er", error);
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
