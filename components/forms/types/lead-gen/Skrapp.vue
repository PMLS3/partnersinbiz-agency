<template>
  <div class="grid grid-cols-2 gap-4">
    <vs-tabs
      :position="$device.isMobile ? 'top' : 'left'"
      class="mt-24 tabs-shadow-none"
      id="profile-tabs"
    >
      <!-- GENERAL -->
      <vs-tab
        icon="search"
        :label="!$device.isMobile ? 'Email Search' : ''"
        @click="tab = 'email'"
      >
        <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
          <vs-card class="py-4">
            <FormsTypesSkrappPerson @response="response" />
          </vs-card>
        </div>
      </vs-tab>
      <!-- <vs-tab
        icon="group_work"
        :label="!$device.isMobile ? 'All Emails on Domain' : ''"
        @click="tab = 'all_email'"
      >
        <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
          <vs-card class="py-4">
            <FormsTypesAnyMailerAllEmails @response="response" />
          </vs-card>
        </div>
      </vs-tab>
      <vs-tab
        icon="verified"
        :label="!$device.isMobile ? 'Verify Email' : ''"
        @click="tab = 'verif_email'"
      >
        <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
          <vs-card class="py-4">
            <FormsTypesAnyMailerValidate @response="response" />
          </vs-card>
        </div>
      </vs-tab>
      <vs-tab
        icon="domain_verification"
        :label="!$device.isMobile ? 'Verify Domain' : ''"
        @click="tab = 'verify_domain'"
      >
        <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
          <vs-card class="py-4">
            <FormsTypesAnyMailerDomain @response="response" />
          </vs-card>
        </div>
      </vs-tab> -->

      <vs-tab
        icon="domain_verification"
        :label="!$device.isMobile ? 'Auth Status' : ''"
        @click="tab = 'verify_domain'"
      >
        <div class="p-4 mt-4 ml-0 md:ml-4 md:mt-0">
          <vs-card class="py-4">
            <FormsTypesSkrappAuthStatus @response="response" />
          </vs-card>
        </div>
      </vs-tab>
    </vs-tabs>
    <vs-card class="mt-24 tabs-shadow-none">
      <h1>Results</h1>
      {{ status }} - {{ tab }}
      <br />
      {{ payload }}
      <FormsTypesLeadGenJustMails :items="payload" v-if="tab == 'all_email'" />
    </vs-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: 'status',
      tab: 'email',
      payload: {},
    }
  },
  watch: {
    tab() {
      if (this.tab == 'email') {
        this.payload = {
          email: 'jsmith@acme.com',
          email_class: 'verified',
          alternatives: ['john@acme.com', 'smithj@acme.com'],
          input: {
            full_name: 'John Smith',
            company_name: 'Acme Inc',
          },
          domain: 'acme.com',
          status: 'success',
        }
      } else if (this.tab == 'all_email') {
        this.payload = {
          emails: ['john@acme.net', 'mark@acme.com', 'joe@acme.com'],
          email_class: 'not_verified',
          input: {
            domain: 'acme.com',
          },
          domain: null,
          status: 'success',
        }
      } else if (this.tab == 'verify_email') {
        this.payload = {
          email_verified: true,
          input: {
            email: 'john@acme.com',
          },
          status: 'success',
        }
      } else if (this.tab == 'verify_domain') {
        this.payload = {
          status: 'success',
          is_blacklisted: false,
          person_search: true,
          domain_search: true,
          domain_count: 3,
          input: {
            domain: 'acme.com',
          },
        }
      }
    },
  },
  methods: {
    response(data) {
      if (this.tab == 'email') {
        this.status = data

        let payload = {
          email: 'jsmith@acme.com',
          email_class: 'verified',
          alternatives: ['john@acme.com', 'smithj@acme.com'],
          input: {
            full_name: 'John Smith',
            company_name: 'Acme Inc',
          },
          domain: 'acme.com',
          status: 'success',
        }
      } else if (this.tab == 'all_email') {
        this.status = data

        let payload = {
          emails: ['john@acme.net', 'mark@acme.com', 'joe@acme.com'],
          email_class: 'not_verified',
          input: {
            domain: 'acme.com',
          },
          domain: null,
          status: 'success',
        }
      } else if (this.tab == 'verify_email') {
        this.status = data

        let payload = {
          email_verified: true,
          input: {
            email: 'john@acme.com',
          },
          status: 'success',
        }
      } else if (this.tab == 'verify_domain') {
        this.status = data

        let payload = {
          status: 'success',
          is_blacklisted: false,
          person_search: true,
          domain_search: true,
          domain_count: 3,
          input: {
            domain: 'acme.com',
          },
        }
      }
    },
  },
}
</script>

<style></style>
