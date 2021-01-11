<!-- =========================================================================================
  File Name: CompanyEdit.vue
  Description: Company Edit Page
  ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div>
    <vs-tabs alignment="fixed" position="left">
      <vs-tab
        :label="comp.name"
        icon-pack="feather"
        icon="icon-file"
        v-for="(comp, index) in components"
        :key="index"
      >
        <client-only>
          <component :is="comp" />
        </client-only>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import LetterHead from './letter_head/DashboardAccountingLetterHead.vue'
import TermsConditions from './terms_and_conditions_template/DashboardAccountingTermsAndConditionsTemplate.vue'
import AddAccount from './accounts_settings/DashboardAccountingAccountSettingsAddAccount.vue'
import BankAccount from './bank_account/DashboardAccountingBankAccountAddAccount.vue'
import CreditCard from './credit_card/DashboardAccountingCreditCardAddAccount.vue'
import MarketingResource from './marketing_sources/DashboardAccountingMarketingSources.vue'
import AddressAuto from '@/components/forms/forms/address/FormsTypesAddAddress.vue'
import AddressMan from '@/components/forms/forms/address/FormsTypesAddAddressMan.vue'
import ContactPerson from '@/components/forms/forms/person/FormsTypesPersonContact.vue'
import BranchAdd from '@/components/forms/forms/register/FormsTypesRegisterBranch.vue'
import oldCustomer from '@/components/forms/forms/crm/company/FormsTypesCrmCompanyAdd.vue'
import newCustomer from './customer/DashboardAccountingCustomerAddAccount.vue'
import Estimates from './estimates/DashboardAccountingEstimates.vue'
import SalesOrder from './sales_order/DashboardAccountingSalesOrder.vue'
import Invoice from './invoice/DashboardAccountingInvoice.vue'
import CreditNote from './credit_note/DashboardAccountingCreditNote.vue'
import newVendor from './vendor/DashboardAccountingVendorAdd.vue'
import Expenses from './expenses/DashboardAccountingExpense.vue'
import RecurringExpense from './expenses/DashboardAccountingExpensesRecurring.vue'
import PurchaseOrder from './purchase_orders/DashboardAccountingPurchaseOrders.vue'
import Bills from './bills/DashboardAccountingBillsAddAccount.vue'
import RecurringBills from './bills/DashboardAccountingBillsRecurring.vue'
import VendorCredits from './vendor/DashboardAccountingVendorCredits.vue'
import AddProject from './projects/DashboardAccountingProjectsAdd.vue'
import TimeSheets from './timesheets/DashboardAccountingTimesheetsAdd.vue'
import ManualJournal from './manual_journal/DashboardAccountingManualJournalAdd.vue'
import RecurringJournal from './recurring_journal/DashboardAccountingRecurringJournalAdd.vue'
import CurrencyAdjustment from './currency_addjustment/DashboardAccountingCurrencyAdjustmentBaseCurrency.vue'
import Budget from './budget/DashboardAccountingBudget.vue'
export default {
  components: {
    LetterHead,
    AddressMan,
    MarketingResource,
    BranchAdd,
    TermsConditions,
    AddAccount,
    BankAccount,
    CreditCard,
    oldCustomer,
    ContactPerson,
    newCustomer,
    AddressAuto,
    Estimates,
    SalesOrder,
    Invoice,
    CreditNote,
    newVendor,
    Expenses,
    RecurringExpense,
    PurchaseOrder,
    Bills,
    RecurringBills,
    VendorCredits,
    AddProject,
    TimeSheets,
    ManualJournal,
    RecurringJournal,
    CurrencyAdjustment,
    Budget,
    // CompanyEditTabTab
  },

  computed: {
    components() {
      return [
        LetterHead,
        AddressMan,
        MarketingResource,
        BranchAdd,
        TermsConditions,
        AddAccount,
        BankAccount,
        CreditCard,
        oldCustomer,
        ContactPerson,
        newCustomer,
        AddressAuto,
        Estimates,
        SalesOrder,
        Invoice,
        CreditNote,
        newVendor,
        Expenses,
        RecurringExpense,
        PurchaseOrder,
        Bills,
        RecurringBills,
        VendorCredits,
        AddProject,
        TimeSheets,
        ManualJournal,
        RecurringJournal,
        CurrencyAdjustment,
        Budget,
      ]
    },
  },
}
</script>
