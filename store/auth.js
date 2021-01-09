// <!-- =========================================================================================
//     File Name: auth.js
//     Description: Handles client authentication
//     ----------------------------------------------------------------------------------------
// TODO not showing password in local host & logout clear localhost, save reseller uid: r_uid and main reseller uid: mr_uid
// ========================================================================================== -->

import firebase from 'firebase'
import moment from 'moment'

const userDefaults = {
  uid: 0, // Set to zero when no user
  disp_name: 'Guest',
  about: 'Dessert chocolate cake lemon drops jujubes. Biscuit c',
  avatar: require('@/static/icon.png'), // So that there is a default image
  o_status: 'online',
  role: 'user',
}

const userInfoLocalStorage = userDefaults

// Set default values for active-user
// More data can be added by auth provider or other plugins/packages
const getUserInfo = () => {
  let userInfo = {}

  // Update property in user
  Object.keys(userDefaults).forEach((key) => {
    // If property is defined in localStorage => Use that
    userInfo[key] = userInfoLocalStorage[key]
      ? userInfoLocalStorage[key]
      : userDefaults[key]
  })

  // Include properties from localStorage
  Object.keys(userInfoLocalStorage).forEach((key) => {
    if (userInfo[key] == undefined && userInfoLocalStorage[key] != null)
      userInfo[key] = userInfoLocalStorage[key]
  })

  return userInfo
}

// /////////////////////////////////////////////
// State
// /////////////////////////////////////////////
export const state = () => ({
  namespaced: true,
  authUser: null,
  active_user: {},
  main_user: getUserInfo(),
  isUserLoggedIn: false,
  anonymous: false,
  // isUserLoggedIn: () => {
  //   let isAuthenticated = false

  //   // get firebase current user
  //   const firebaseCurrentUser = this.$fireAuth.currentUser

  //   if (firebaseCurrentUser) isAuthenticated = true
  //   else isAuthenticated = false

  //   return isAuthenticated.toString()
  //   // return localStorage.getItem('userInfo') && isAuthenticated
  // }
})

// /////////////////////////////////////////////
// Mutations
// /////////////////////////////////////////////
export const mutations = {
  // /////////////////////////////////////////////
  // User Account
  // /////////////////////////////////////////////

  // Updates user info in state and localstorage
  UPDATE_USER_INFO(state, payload) {
    if (process.client) {
      // Get Data localStorage
      let userInfo = state.main_user

      for (const property of Object.keys(payload)) {
        if (payload[property] != null) {
          // If some of user property is null - user default property defined in state.main_user
          state.main_user[property] = payload[property]

          // Update key in localStorage
          userInfo[property] = payload[property]
        }
      }
      // Store data in localStorage
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
  },

  handleSuccessfulAuthentication({ commit }, { authUser, claims }) {
    // Install servicerWorker if supported on sign-in/sign-up page.
    if (process.browser && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-auth-sw.js', { scope: '/' })
    }
    commit('SET_AUTH_USER', { authUser })
  },

  checkVuexStore(ctx) {
    if (this.$fireAuth === null) {
      throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
    return
  },
  UPDATE_ANON(state, payload) {
    state.anonymous = payload
  },
}

// /////////////////////////////////////////////
// Actions
// /////////////////////////////////////////////
export const actions = {
  logoutUser({ commit, state }, payload) {
    state.isUserLoggedIn = false
    this.$fireAuth.signOut()

    // Reset user info to guest and delete local storage
    localStorage.removeItem('userInfo')
    commit('UPDATE_USER_INFO', userDefaults)
  },
  loginAttempt({ dispatch }, payload) {
    let goToRoute = '/'
    // if (payload.goToRoute) {
    //   goToRoute = payload.goToRoute
    // }

    const newPayload = {
      userDetails: payload.userDetails,
      notify: payload.notify,
      closeAnimation: payload.closeAnimation,
      router: payload.router,
      goToRoute: goToRoute,
    }

    if (!payload.checkbox_remember_me) {
      this.$fireAuth
        .setPersistence(firebase.auth.Auth.Persistence.SESSION)

        .then(function () {
          dispatch('login', newPayload)
        })

        .catch(function (err) {
          if (payload.closeAnimation) payload.closeAnimation()

          payload.notify({
            time: 2500,
            title: 'Error',
            text: err.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          })
        })
    } else {
      dispatch('login', newPayload)
    }
  },
  async login({ commit, state, dispatch, rootState }, payload) {
    let vm = this
    try {
      await this.$fireAuth
        .signInWithEmailAndPassword(
          payload.userDetails.email,
          payload.userDetails.password
        )
        .then(function () {
          if (payload.updateUser) {
            commit('UPDATE_USER_INFO', payload.userDetails)
            payload.router.push(payload.goToRoute)
          } else {
            vm.$fireAuth.onAuthStateChanged(function (user) {
              if (user) {
                vm.$fireStore
                  .collection('users')
                  .doc(user.uid)
                  .get()
                  .then(function (doc) {
                    if (doc.exists) {
                      commit('UPDATE_USER_INFO', doc.data())
                      payload.closeAnimation()
                      payload.router.push(payload.goToRoute)
                    } else {
                      payload.closeAnimation()
                      payload.notify({
                        title: 'Error',
                        text: 'No such user',
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'red',
                      })
                    }
                  })
                  .catch(function (error) {
                    payload.closeAnimation()
                    payload.notify({
                      title: 'Error',
                      text: error.message,
                      iconPack: 'feather',
                      icon: 'icon-alert-circle',
                      color: 'red',
                    })
                  })
              }
            })

            state.isUserLoggedIn = true
          }
        })
    } catch (e) {
      state.isUserLoggedIn = false
      payload.closeAnimation()
      payload.notify({
        title: 'Error',
        text: e.message,
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'red',
      })
    }
  },
  // /////////////////////////////////////////////
  // User Registration
  // /////////////////////////////////////////////
  registerUser({ dispatch }, payload) {
    this.$fireAuth
      // register with firebase
      .createUserWithEmailAndPassword(
        payload.userDetails.email,
        payload.userDetails.password
      )
      .then(
        (cred) => {
          // Set user details for when logged in
          let user = {
            uid: cred.user.uid, // From Auth
            disp_name: payload.userDetails.displayName, // From Auth
            gender: payload.userDetails.gender
              ? payload.userDetails.gender
              : '',
            about: '',
            avatar: require('@/static/icon.png'), // So that there is a default image
            o_status: 'online',
            role: 'user',
            b_uids: [`${payload.userDetails.b_uid}`],
          }
          // Add defaults with payload details
          let userD = {
            ...payload.userDetails,
            ...user,
          }
          let goToRoute = '/'
          if (payload.userDetails.goToRoute) {
            goToRoute = payload.userDetails.goToRoute
          }
          const newPayload = {
            userDetails: userD,
            notify: payload.notify,
            router: payload.router,
            store: payload.store,
            goToRoute: goToRoute,
            updateUser: true,
          }
          const setUser = this.$fireStore.collection('users').doc(cred.user.uid)

          const setUserBusiness = this.$fireStore
            .collection('business')
            .doc('users')
            .collection(payload.userDetails.b_uid)
            .doc(cred.user.uid)

          const stats = this.$fireStore.collection('data').doc('stats')

          const bus_stats = this.$fireStore
            .collection('stats')
            .doc(payload.userDetails.b_uid)

          const increment = firebase.firestore.FieldValue.increment(1)

          const batch = this.$fireStore.batch()

          batch.set(setUser, {
            uid: cred.user.uid,
            b_uids: [`${payload.userDetails.b_uid}`],
            disp_name: payload.userDetails.displayName,
            name: payload.userDetails.name,
            surname: payload.userDetails.surname,
            email: payload.userDetails.email,
            pw: payload.userDetails.password,
            date: moment().format('DD-MM-YYYY'),
            t_stamp: Date.now(),
          })

          batch.set(setUserBusiness, {
            date: moment().format('DD-MM-YYYY'),
            month: moment().format('MM-YYYY'),
            t_stamp: Date.now(),
            branch: '',
            disp_name: payload.userDetails.displayName,
            email: payload.userDetails.email,
            uid: cred.user.uid,
            l_act: moment().format('DD-MM-YYYY'),
            name: payload.userDetails.name,
            pw: payload.userDetails.password,
            mobile: null,
            o_status: 'Online',
            avatar: '',
            pos: '',
            p_notes: [],
            role: 'User',
            about: '',
            status: 'Active',
            stage: 'Prospect',
            source: 'Websites',
            surname: payload.userDetails.surname,
            verified: false,
          })

          batch.set(stats, { users: increment }, { merge: true })
          batch.set(bus_stats, { users: increment }, { merge: true })

          batch.commit().then(() => {
            payload.notify({
              title: 'Account Created',
              text: 'You are successfully registered!',
              iconPack: 'feather',
              icon: 'icon-check',
              color: 'green',
            })
          })

          dispatch('login', newPayload)
        },
        (error) => {
          payload.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'red',
          })
        }
      )
  },

  //   updateUsername({ commit }, payload) {
  //     payload.user
  //       .updateProfile({
  //         displayName: payload.displayName
  //       })
  //       .then(() => {
  //         // If username update is success
  //         // update in localstorage
  //         let newUserData = Object.assign({}, payload.user.providerData[0])
  //         newUserData.displayName = payload.displayName
  //         commit('UPDATE_USER_INFO', newUserData, { root: true })

  //         // If reload is required to get fresh data after update
  //         // Reload current page
  //         if (payload.isReloadRequired) {
  //           router.push(router.currentRoute.query.to || '/')
  //         }
  //       })
  //       .catch(err => {
  //         payload.notify({
  //           time: 8800,
  //           title: 'Error',
  //           text: err.message,
  //           iconPack: 'feather',
  //           icon: 'icon-alert-circle',
  //           color: 'danger'
  //         })
  //       })
  //   }
}
export const getters = {
  user: (state) => state.main_user,
}

export const strict = false
