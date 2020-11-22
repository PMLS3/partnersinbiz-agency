export const state = () => ({
  uploaded_images: [],
  form_active: false,
  filter_all: {},
  edit_form: {},
  address: {},
  contact_person: [],
  contact_primary: {},
  business_details: {},
  vendor_details: {},
  business_other: {},
  paper_estimates: {},
  paper_sales_order: {},
  paper_invoices: {},
  paper_invoices_rec: {},
  selected_item: {},
  paper_items: {},
  terms_conditions: {},
  credit_notes: {},
  expenses: {},
  paper_milage_preference: {},
  tasks: {},
  social: {},
  branch: {},
  items_total: {},
  uploaded_music: {},
  selected_music: {},
  raw_image: [],
  uploaded_stations: []
  // imageFile: '',
  // imageName: '',
  // imageUrls: '',
  // addFormData: '',
  // editFormData: '',
  // imageMulti: '',
  // addingFormSelect: [],
  // newForm: '',
  // newFormSubmit: '',
  // extraFormSubmit: '',
  // myGroups: '',
  // activeGroups: '',
  // activeAgents: '',
  // activeLocations: '',
  // datePick: '',
  // timePick: '',
  // datePickEnd: '',
  // timePickEnd: '',
  // times: '',
  // pop_filter: false,
  // popMessage: '',
  // filter: false,
  // group_branches: false,
  // group_positions: false,
  // group_views: false,
  // group_p_notes: false,
  // group_none: false,
  // group_branches_selected: '',
  // group_positions_selected: '',
  // group_views_selected: '',
  // group_p_notes_selected: '',

  // add_filter: false,
  // add_group_branches: false,
  // add_group_positions: false,
  // add_group_views: false,
  // add_group_p_notes: false,
  // add_group_branches_selected: '',
  // add_group_positions_selected: '',
  // add_group_views_selected: '',
  // add_group_p_notes_selected: ''
});

export const mutations = {
  RAW_IMAGE(state, payload) {
    state.raw_image = payload;
  },
  ITEMS_TOTAL_SET(state, payload) {
    state.items_total = payload;
  },
  BRANCH_DETAILS_SET(state, payload) {
    state.branch = payload;
  },
  SOCIAL_SET(state, payload) {
    state.social = payload;
  },
  EXPENSES_SET(state, payload) {
    state.expenses = payload;
  },
  TASKS_SET(state, payload) {
    state.tasks = payload;
  },
  PAPER_CREDIT_NOTES(state, payload) {
    state.credit_notes = payload;
  },
  PAPER_INVOICES_REC(state, payload) {
    state.paper_invoices_rec = payload;
  },
  PAPER_INVOICES(state, payload) {
    state.paper_invoices = payload;
  },
  TERMS_SET(state, payload) {
    state.terms_conditions = payload;
  },
  CONTACT_SET(state, payload) {
    state.contact_person = payload;
  },
  CONTACT_PRIMARY_SET(state, payload) {
    state.contact_primary = payload;
  },
  UPLOADED_IMAGES(state, payload) {
    state.uploaded_images = payload;
  },
  UPLOADED_MUSIC(state, payload) {
    state.uploaded_music = payload;
  },
  SELECTED_MUSIC(state, payload) {
    console.log("payload", payload);
    state.selected_music = payload;
  },
  UPLOADED_STATIONS(state, payload) {
    state.uploaded_stations = payload;
  },
  FORM_ACTIVE(state, payload) {
    state.form_active = payload;
  },
  FILTER_ALL(state, payload) {
    state.filter_all = payload;
  },
  EDIT_FORM(state, payload) {
    state.edit_form = payload;
  },
  ADDRESS_SET(state, payload) {
    state.address = payload;
  },
  BUSINESS_OTHER_SET(state, payload) {
    state.business_other = payload;
  },
  BUSINESS_DETAILS_SET(state, payload) {
    state.business_details = payload;
  },
  PAPER_ESTIMATES(state, payload) {
    state.paper_estimates = payload;
  },
  PAPER_SALESORDER(state, payload) {
    state.paper_sales_order = payload;
  },
  SELECTED_ITEM(state, payload) {
    state.selected_item = payload;
  },
  ITEMS_SET(state, payload) {
    state.paper_items = payload;
  },
  VENDOR_DETAILS_SET(state, payload) {
    state.vendor_details = payload;
  }
};

export const actions = {
  filterAll({ commit }, payload) {
    commit("FILTER_ALL", payload);
  },
  selectMusic({ commit }, payload) {
    console.log("ap", payload);
  }
};
