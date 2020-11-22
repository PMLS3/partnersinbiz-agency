// <!-- =========================================================================================
//     File Name: business.js
//     Description: Store for the logged in business properties
//     ----------------------------------------------------------------------------------------

// ========================================================================================== -->

const businessDefaults = {
  // b_uid: 'UZnaDQw8wliD6EUAkkoQ',
  b_uid: "bMal6HJl4QtdDtK8LAlH",
  b_name: "Loading...",
  logo: require("@/static/icon.png")
};

const businessInfoLocalStorage = businessDefaults;

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getBusinessInfo = () => {
  let businessInfo = {};

  // Update property in user
  Object.keys(businessDefaults).forEach(key => {
    // If property is defined in localStorage => Use that
    businessInfo[key] = businessInfoLocalStorage[key]
      ? businessInfoLocalStorage[key]
      : businessDefaults[key];
  });

  // Include properties from localStorage
  Object.keys(businessInfoLocalStorage).forEach(key => {
    if (businessInfo[key] == undefined && businessInfoLocalStorage[key] != null)
      businessInfo[key] = businessInfoLocalStorage[key];
  });

  return businessInfo;
};

const mainBusinessLocalStorage = businessDefaults;

const getMainBusiness = () => {
  let mainBusiness = {};

  // Update property in user
  Object.keys(businessDefaults).forEach(key => {
    // If property is defined in localStorage => Use that
    mainBusiness[key] = mainBusinessLocalStorage[key]
      ? mainBusinessLocalStorage[key]
      : businessDefaults[key];
  });

  // Include properties from localStorage
  Object.keys(mainBusinessLocalStorage).forEach(key => {
    if (mainBusiness[key] == undefined && mainBusinessLocalStorage[key] != null)
      mainBusiness[key] = mainBusinessLocalStorage[key];
  });

  return mainBusiness;
};

export const state = () => ({
  reseller: "community",
  // reseller_id: 'UZnaDQw8wliD6EUAkkoQ',
  reseller_id: "bMal6HJl4QtdDtK8LAlH",
  sub_sellers: [],
  active_business: getBusinessInfo(),
  main_business: getMainBusiness(),
  staff: [],
  users: []
});

export const mutations = {
  // /////////////////////////////////////////////
  // Business/Account
  // /////////////////////////////////////////////

  // Updates user info in state and localstorage
  UPDATE_BUSINESS_INFO(state, payload) {
    if (process.client) {
      // Get Data localStorage
      let businessInfo = state.active_business;
      console.log("payload", payload);

      for (const property of Object.keys(payload)) {
        if (payload[property] != null) {
          // If some of user property is null - user default property defined in state.active_business
          state.active_business[property] = payload[property];

          // Update key in localStorage
          businessInfo[property] = payload[property];
        }
      }
      // Store data in localStorage
      localStorage.setItem("businessInfo", JSON.stringify(businessInfo));
    }
  },

  UPDATE_MAIN_BUSINESS_INFO(state, payload) {
    if (process.client) {
      // Get Data localStorage
      let mainBusiness = state.main_business;

      for (const property of Object.keys(payload)) {
        if (payload[property] != null) {
          // If some of user property is null - user default property defined in state.main_business
          state.main_business[property] = payload[property];

          // Update key in localStorage
          mainBusiness[property] = payload[property];
        }
      }
      // Store data in localStorage
      localStorage.setItem("mainBusiness", JSON.stringify(mainBusiness));
    }
  },
  UPDATE_STAFF(state, payload) {
    state.staff = payload;
  }
};

export const actions = {};

export const getters = {
  active_business: state => state.active_business,
  isBusinessSet: state => {
    try {
      return state.active_business.b_uid !== 0;
    } catch {
      return false;
    }
  }
};

export const strict = false;
