<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
            // TODO delete user with confirmation

========================================================================================== -->

<template>
  <div id="page-user-view w-full">
    <div id="user-data" v-if="user_data" class="w-full mt-18">
      <vx-card title="Account" class="w-full mt-24 mb-base">
        <!-- Avatar -->
        <div class="grid grid-cols-3 gap-4">
          <!-- Avatar Col -->
          <div id="avatar-col">
            <div class="mb-4 img-container">
              <img :src="user_data.avatar" class="w-full rounded" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">Username</td>
                <td class="ml-2">{{ user_data.disp_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Name</td>
                <td class="ml-2">{{ user_data.name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email</td>
                <td class="ml-2">{{ user_data.email }}</td>
              </tr>
            </table>
          </div>

          <!-- Information - Col 2 -->
          <div id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Status</td>
                <td class="ml-2">{{ user_data.status }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Role</td>
                <td class="ml-2">{{ user_data.role }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Company</td>
                <td class="ml-2">{{ user_data.company }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->

          <!-- <vs-button
              type="border"
              color="danger"
              icon-pack="feather"
              icon="icon-trash"
              @click="confirmDeleteRecord"
              >Delete</vs-button
            > -->
        </div>

        <vs-tooltip
          text="Edit User Details"
          position="top"
          class="float-right mr-4"
        >
          <vs-button
            class="float-right mr-4"
            icon-pack="feather"
            icon="icon-edit"
            @click="$router.push('/userEdit')"
          ></vs-button>
        </vs-tooltip>
      </vx-card>

      <div class="vx-row">
        <div class="w-full vx-col lg:w-1/2">
          <vx-card title="Information" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Birth Date</td>
                <td>{{ user_data.dob }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Mobile</td>
                <td>{{ user_data.mobile }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Website</td>
                <td>{{ user_data.website }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Languages</td>
                <td v-if="user_data.languages_known">
                  {{ user_data.languages_known.join(', ') }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">Gender</td>
                <td>{{ user_data.gender }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Contact</td>
                <td v-if="user_data.contact_options">
                  {{ user_data.contact_options.join(', ') }}
                </td>
              </tr>
            </table>
          </vx-card>
        </div>

        <div class="w-full vx-col lg:w-1/2">
          <vx-card title="Social Links" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Twitter</td>
                <td>
                  {{ user_data.twt }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">Facebook</td>
                <td>
                  {{ user_data.fb }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">Instagram</td>
                <td>
                  {{ user_data.insta }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">Github</td>
                <td>
                  {{ user_data.github }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">CodePen</td>
                <td>
                  {{ user_data.codepen }}
                </td>
              </tr>
              <tr>
                <td class="font-semibold">Slack</td>
                <td>
                  {{ user_data.slack }}
                </td>
              </tr>
            </table>
          </vx-card>
        </div>
      </div>

      <!-- Permissions -->
      <vx-card>
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
          <table class="w-full permissions-table">
            <tr>
              <!--
                You can also use `Object.keys(Object.values(data_local.permissions)[0])` this logic if you consider,
                our data structure. You just have to loop over above variable to get table headers.
                Below we made it simple. So, everyone can understand.
               -->
              <th
                class="px-3 py-2 text-base font-semibold text-left"
                v-for="heading in [
                  'Module',
                  'Read',
                  'Write',
                  'Create',
                  'Delete',
                ]"
                :key="heading"
              >
                {{ heading }}
              </th>
            </tr>

            <tr v-for="(val, name) in user_data.permissions" :key="name">
              <td class="px-3 py-2">{{ name }}</td>
              <td
                v-for="(permission, name) in val"
                class="px-3 py-2"
                :key="name + permission"
              >
                <vs-checkbox v-model="val[name]" class="pointer-events-none" />
              </td>
            </tr>
          </table>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
// import moduleUserManagement from "@/store/user-management/moduleUserManagement.js";

export default {
  data() {
    return {
      user_not_found: false,
    }
  },
  computed: {
    userAddress() {
      let str = ''
      for (const field in this.user_data.location) {
        str += `${field} `
      }
      return str
    },
    user_data() {
      return this.$store.state.userManagement.user
    },
  },
  methods: {
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${this.user_data.username}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete',
      })
    },
    deleteRecord() {
      /* Below two lines are just for demo purpose */
      this.$router.push({ name: 'app-user-list' })
      this.showDeleteSuccess()

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: 'success',
        title: 'User Deleted',
        text: 'The selected user was successfully deleted',
      })
    },
  },
  created() {},
}
</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: 0.8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width: 370px) {
          display: block;
        }
      }
    }
  }
}

#account-info-col-1 {
  flex-grow: 1;
  width: 30rem !important;
  @media screen and (min-width: 1200px) {
    & {
      flex-grow: unset !important;
    }
  }
}

@media screen and (min-width: 1201px) and (max-width: 1211px),
  only screen and (min-width: 636px) and (max-width: 991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  #account-manage-buttons {
    width: 12rem !important;
    flex-direction: column;

    > button {
      margin-right: 0 !important;
      margin-bottom: 1rem;
    }
  }
}
</style>
