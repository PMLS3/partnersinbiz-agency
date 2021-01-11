<template>
  <div>
    <vs-tabs
      :position="$device.isMobile ? 'top' : 'left'"
      class="mt-24 tabs-shadow-none"
      id="profile-tabs"
    >
      <!-- GENERAL -->
      <vs-tab icon="search" :label="!$device.isMobile ? 'Access' : ''">
        <FormsTypesAccess />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Address' : ''">
        <FormsTypesAddAddress />
        <FormsTypesAddAddressMan />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Branch' : ''">
        <FormsTypesBranchMulti />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Budget' : ''">
        <FormsTypesNewBudget />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Business' : ''">
        <FormsTypesBusinessDetails />
        <FormsTypesBusinessOther />
      </vs-tab>
      <vs-tab
        icon="search"
        :label="!$device.isMobile ? 'Business Settings' : ''"
      >
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'CRM' : ''">
        <FormsTypesCrmCompanyAdd />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Currency' : ''">
        <FormsTypesBaseCurrencyAdjustment />
      </vs-tab>
      <vs-tab
        icon="search"
        :label="!$device.isMobile ? 'Employee Setting' : ''"
      >
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Expense' : ''">
        <FormsTypesExpense />
        <FormsTypesExpenseMilage />
        <FormsTypesExpenseRecurring />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Items' : ''">
        <FormsTypesItemsAdd />
        <FormsTypesItemsTotal />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Journal' : ''">
        <FormsTypesJournalEntries />
        <FormsTypesJournalManual />
        <FormsTypesJournalRecurring />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Lead Gen' : ''">
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Login' : ''"> </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Paper Trail' : ''">
        <FormsTypesPaperTrailBill />
        <FormsTypesPaperTrailCreditNote />
        <FormsTypesPaperTrailEstimates />
        <FormsTypesPaperTrailInvoice />
        <FormsTypesPaperTrailInvoiceRecurring />
        <FormsTypesPaperTrailMilagePreference />
        <FormsTypesPaperTrailPurchaseOrder />
        <FormsTypesPaperTrailRecurringBills />
        <FormsTypesPaperTrailSalesOrder />
        <FormsTypesPaperTrailVendorCredits />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Person' : ''">
        <FormsTypesPersonContact />
        <FormsTypesPersonMulti />
        <FormsTypesPersonPrimaryContact />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Projects' : ''">
        <FormsTypesProjects />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Register' : ''">
        <FormsTypesRegisterAssets />
        <FormsTypesRegisterBranch />
        <FormsTypesRegisterBrand />
        <FormsTypesRegisterCategory />
        <FormsTypesRegisterCompany />
        <FormsTypesRegisterCompanys />
        <FormsTypesRegisterEmployee />
        <FormsTypesRegisterEntry />
        <FormsTypesRegisterFirebase />
        <FormsTypesRegisterPhone />
        <FormsTypesRegisterProducts />
        <FormsTypesRegisterSocial />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Social' : ''">
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Tasks' : ''">
        <FormsTypesTasksMulti />
      </vs-tab>
      <vs-tab
        icon="search"
        :label="!$device.isMobile ? 'Terms and Conditions' : ''"
      >
        <FormsTypesTermsAndConditions />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Timesheets' : ''">
        <FormsTypesTimesheetTask />
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'User Settings' : ''">
      </vs-tab>
      <vs-tab icon="search" :label="!$device.isMobile ? 'Vendor' : ''">
        <FormsTypesUserSettingsVendorDetails />
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
