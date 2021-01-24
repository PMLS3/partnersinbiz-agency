/* =========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
 
========================================================================================== */

import Vue from 'vue'
import Verte from 'verte'
import 'verte/dist/verte.css'
import VuePerfectScrollbar from 'vue2-perfect-scrollbar'
import VueSvgGauge from 'vue-svg-gauge'
import * as VueGoogleMaps from 'vue2-google-maps'
import vSelect from 'vue-select'
import { longClickDirective } from 'vue-long-click'
import VueTelInput from 'vue-tel-input'
// import { ValidationProvider } from 'vee-validate'
import VueFlatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import FeatherIcon from '../components/FeatherIcon.vue'
// Your app initialization logic goes here
Vue.use(VueFlatPickr)

// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)
// Register it globally
// main.js or any entry file.
// Vue.component('ValidationProvider', ValidationProvider)
Vue.component(VuePerfectScrollbar.name, VuePerfectScrollbar)
Vue.component(Verte.name, Verte)
Vue.component(FeatherIcon.name, FeatherIcon)
Vue.use(require('v-validate'))
Vue.use(VueSvgGauge)
Vue.use(VueGoogleMaps, {
  load: {
    // Add your API key here
    key: 'AIzaSyCB-A02_U3WrFZGBkL2a1jucVpmnrfC_y8',
    libraries: 'places', // This is required if you use the Auto complete plug-in
  },
})

// Set the components prop default to return our fresh components
vSelect.props.components.default = () => ({
  Deselect: {
    render: (createElement) =>
      createElement('feather-icon', {
        props: {
          icon: 'XIcon',
          svgClasses: 'w-4 h-4 mt-1',
        },
      }),
  },
  OpenIndicator: {
    render: (createElement) =>
      createElement('feather-icon', {
        props: {
          icon: 'ChevronDownIcon',
          svgClasses: 'w-5 h-5',
        },
      }),
  },
})

Vue.component(vSelect)

const longClickInstance = longClickDirective({
  delay: 100,
  interval: 50,
})
Vue.directive('longclick', longClickInstance)

Vue.use(VueTelInput)
// import Geohash from "latlon-geohash";
// Vue.use(Geohash)
//PerfectScrollbar
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)

// import Peer from "peerjs";
// Vue.component(Peer);
import StarRating from 'vue-star-rating'
Vue.component('StarRating', StarRating)

import VueFullpage from 'fullpage-vue'
Vue.use(VueFullpage)
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)

import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'

Vue.use(VueAwesomeSwiper)
