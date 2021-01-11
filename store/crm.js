function search(nameKey, myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i]) {
      if (myArray[i].acc_name === nameKey) {
        let res = {
          id: i,
          obj: myArray[i],
        }
        return res
      }
    }
  }
}

export const state = () => ({
  accounts: [
    {
      acc_name: 'Advance Tax',
      acc_title: 'Asset',
      acc_type: 'Other Current Assets',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Employee Advance',
      acc_title: 'Asset',
      acc_type: 'Other Current Assets',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Prepaid Expense',
      acc_title: 'Asset',
      acc_type: 'Other Current Assets',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Petty Cash',
      acc_title: 'Asset',
      acc_type: 'Cash',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Undeposited Funds',
      acc_title: 'Asset',
      acc_type: 'Cash',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Furniture and Equiptment',
      acc_title: 'Asset',
      acc_type: 'Fixed Assets',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Inventory Asset',
      acc_title: 'Asset',
      acc_type: 'Cash',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Advertising & Marketing',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Automobile Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Bad Debt',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Bank Fees and Charges',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Consultant Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Credit Card Charges',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Depreciation Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'IT and Internet Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Janitorial Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Lodging',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Meals and Entertainment',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Office Suppllies',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Postage',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Printing and Stationery',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Rent Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Salaries and Employee Wages',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Telephone Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Travel Expense',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Uncategorized',
      acc_title: 'Expense',
      acc_type: 'Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Cost Of Goods Sold',
      acc_title: 'Expense',
      acc_type: 'Cost Of Goods Sold',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Exchange Gains or Loss',
      acc_title: 'Expense',
      acc_type: 'Other Expense',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Employee Reimbursements',
      acc_title: 'Liability',
      acc_type: 'Other Current Liability',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Tax Payable',
      acc_title: 'Liability',
      acc_type: 'Other Current Liability',

      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Unearned Revenue',
      acc_title: 'Liability',
      acc_type: 'Other Current Liability',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Drawings',
      acc_title: 'Equity',
      acc_type: 'Equity',

      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Opening Balance Offset',
      acc_title: 'Equity',
      acc_type: 'Equity',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Owners Equity',
      acc_title: 'Equity',
      acc_type: 'Equity',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Retained Earnings',
      acc_title: 'Equity',
      acc_type: 'Equity',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Discount',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'General Income',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Interest Income',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Late Fee Income',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Other Charges',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Sales',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
    {
      acc_name: 'Shipping Charge',
      acc_title: 'Income',
      acc_type: 'Income',
      Debit: 0,
      Credit: 0,
    },
  ],
  no_accounts: [],
  unit: [
    'box',
    'cm',
    'dz',
    'ft',
    'g',
    'in',
    'kg',
    'km',
    'lb',
    'mg',
    'm',
    'pcs',
  ],
  customers: [],
  estimates: [],
  employees: [],
  projects: [],
  items: [
    {
      item: 'Mine',
      desc: 'this is the Item',
      qty: 0,
      price: 300,
    },
    {
      item: 'Yours',
      desc: 'this is the Item',
      qty: 0,
      price: 300,
    },
  ],
})

export const mutations = {
  ESTIMATES_SET(state, payload) {
    state.estimates = payload
  },
  CUSTOMERS_SET(state, payload) {
    state.customers = payload
  },
  EMPLOYEES_SET(state, payload) {
    state.employees = payload
  },
  PROJECTS_SET(state, payload) {
    state.projects = payload
  },
  OPENING_BALANCE(state, payload) {
    let array = state.accounts
    for (let i = 0; i < payload.length; i++) {
      var resultObject = search(payload[i]['Account Name'], array)

      if (resultObject) {
        let id = resultObject.id
        let obj = resultObject.obj
        state.accounts[id].Debit = payload[i]['Debit Amount']
        state.accounts[id].Credit = payload[i]['Credit Amount']
      } else {
        state.no_accounts.push(payload[i])
      }
    }
  },
}

export const actions = {}

export const getters = {}
