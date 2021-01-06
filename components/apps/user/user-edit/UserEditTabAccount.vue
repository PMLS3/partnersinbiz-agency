<!-- =========================================================================================
  File Name: UserEditTabInformation.vue
  Description: User Edit Information Tab content
  ----------------------------------------------------------------------------------------
//TODO  Company needs to create company
========================================================================================== -->

<template>
  <div id="user-edit-tab-info">
    <!-- Avatar Row -->
    <div class="vx-row">
      <div class="w-full vx-col">
        <div class="flex flex-col items-start sm:flex-row">
          <img :src="data.avatar" class="w-24 h-24 mr-8 rounded" />
          <!-- <vs-avatar :src="data.avatar" size="80px" class="mr-4" /> -->
          <div>
            <p class="mt-4 mb-2 text-lg font-medium sm:mt-0">{{ data.name }}</p>
            <input
              type="file"
              class="hidden"
              ref="update_avatar_input"
              @change="update_avatar"
              accept="image/*"
            />

            <!-- Toggle comment of below buttons as one for actual flow & currently shown is only for demo -->
            <vs-button class="mb-4 mr-4">Change Avatar</vs-button>
            <!-- <vs-button type="border" class="mr-4" @click="$refs.update_avatar_input.click()">Change Avatar</vs-button> -->

            <vs-button type="border" color="danger">Remove Avatar</vs-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Row -->
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2">
        <vs-input
          class="w-full mt-4"
          label="Username"
          v-model="data_local.disp_name"
          name="username"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('username')">{{
          errors.first('username')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          label="Name"
          v-model="data_local.name"
          name="name"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('name')">{{
          errors.first('name')
        }}</span> -->

        <vs-input
          class="w-full mt-4"
          label="Email"
          v-model="data_local.email"
          type="email"
          name="email"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('email')">{{
          errors.first('email')
        }}</span> -->
      </div>

      <div class="w-full vx-col md:w-1/2">
        <div class="mt-4">
          <label class="vs-input--label">Status</label>
          <v-select
            v-model="status_local"
            :clearable="false"
            :options="statusOptions"
            name="status"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('status')">{{
            errors.first('status')
          }}</span> -->
        </div>

        <div class="mt-4">
          <label class="vs-input--label">Role</label>
          <v-select
            v-model="role_local"
            :clearable="false"
            :options="roleOptions"
            name="role"
            :dir="$vs.rtl ? 'rtl' : 'ltr'"
          />
          <!-- <span class="text-sm text-danger" v-show="errors.has('role')">{{
            errors.first('role')
          }}</span> -->
        </div>

        <vs-input
          class="w-full mt-4"
          label="Company"
          v-model="data_local.company"
          name="company"
        />
        <!-- <span class="text-sm text-danger" v-show="errors.has('company')">{{
          errors.first('company')
        }}</span> -->
      </div>
    </div>

    <!-- Permissions -->
    <vx-card class="mt-base" no-shadow card-border>
      <div class="vx-row">
        <div class="w-full vx-col">
          <div class="flex items-end px-3">
            <feather-icon svgClasses="w-6 h-6" icon="LockIcon" class="mr-2" />
            <span class="text-lg font-medium leading-none">Permissions</span>
          </div>
          <vs-divider />
        </div>
      </div>

      <div class="block overflow-x-auto">
        <table class="w-full">
          <tr>
            <!--
              You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
              our data structure. You just have to loop over above variable to get table headers.
              Below we made it simple. So, everyone can understand.
             -->
            <th
              class="px-3 py-2 text-base font-semibold text-left"
              v-for="heading in ['Module', 'Read', 'Write', 'Create', 'Delete']"
              :key="heading"
            >
              {{ heading }}
            </th>
          </tr>

          <tr v-for="(val, name) in data_local.permissions" :key="name">
            <td class="px-3 py-2">{{ name }}</td>
            <td
              v-for="(permission, name) in val"
              class="px-3 py-2"
              :key="name + permission"
            >
              <vs-checkbox v-model="val[name]" />
            </td>
          </tr>
        </table>
      </div>
    </vx-card>

    <!-- Save & Reset Button -->
    <div class="vx-row">
      <div class="w-full vx-col">
        <div class="flex flex-wrap items-center justify-end mt-8">
          <vs-button class="mt-2 ml-auto" @click="save_changes"
            >Save Changes</vs-button
          >
          <vs-button
            class="mt-2 ml-4"
            type="border"
            color="warning"
            @click="reset_data"
            >Reset</vs-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data_local: JSON.parse(JSON.stringify(this.data)),

      statusOptions: [
        { label: 'Active', value: 'active' },
        { label: 'Blocked', value: 'blocked' },
        { label: 'Deactivated', value: 'deactivated' },
      ],
      roleOptions: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Staff', value: 'staff' },
      ],
    }
  },
  computed: {
    user() {
      if (process.client) {
        if (localStorage.getItem('userInfo')) {
          return JSON.parse(localStorage.getItem('userInfo'))
        } else {
          return this.$store.state.auth.main_user
        }
      }
    },
    business() {
      return this.$store.state.business.active_business
    },
    status_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.status),
          value: this.data_local.status,
        }
      },
      set(obj) {
        this.data_local.status = obj.value
      },
    },
    role_local: {
      get() {
        return {
          label: this.capitalize(this.data_local.role),
          value: this.data_local.role,
        }
      },
      set(obj) {
        this.data_local.role = obj.value
      },
    },
    validateForm() {
      return !this.errors.any()
    },
  },
  methods: {
    capitalize(str) {
      return str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
    },
    save_changes() {
      console.log('this', this.data_local)
    },
    reset_data() {
      this.data_local = JSON.parse(JSON.stringify(this.data))
    },
    update_avatar() {
      // You can update avatar Here
      // For reference you can check dataList example
      // We haven't integrated it here, because data isn't saved in DB
    },
  },
}
</script>
