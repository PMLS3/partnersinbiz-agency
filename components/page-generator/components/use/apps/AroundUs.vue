<template>
  <div>
    <client-only>
      <!-- <div>
      <google-map-basic :center="myAppProfile[0].geolocation" :markers="markers"></google-map-basic>
      <google-map-info-window :center="myAppProfile[0].geolocation" :markers="markers"></google-map-info-window>
      <google-map-pop :center="myAppProfile[0].geolocation" :markers="markers"></google-map-pop>
    </div>-->
      <div v-if="!googleSearched">
        <vs-card>
          <gmap-map
            :center="BusinessGeo"
            :zoom="15"
            style="width: 100%; height: 350px"
          >
            <gmap-info-window
              :options="infoOptions"
              :position="infoWindowPos"
              :opened="infoWinOpen"
              @closeclick="infoWinOpen = false"
            ></gmap-info-window>
            <gmap-marker
              :position="BusinessGeo"
              :clickable="true"
              @click="toggleInfoWindow"
            ></gmap-marker>
            <gmap-custom-marker
              :key="i"
              v-for="(m, i) in markers"
              :marker="m.position"
              @click.native="someFunction(m, i)"
            >
              <vs-avatar :src="`${m.img}`" />

              <vs-popup
                class="holamundo"
                :title="clickedOn.infoText"
                :active.sync="popupActivo"
              >
                <vs-row
                  vs-align="flex-start"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="12"
                >
                  <img :src="clickedOn.img" class="product-imgs" />
                </vs-row>
                <vs-row
                  vs-align="flex-start"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="12"
                >
                  <h5 class="mt-5 font-medium product-name">
                    {{ clickedOn.infoText }}
                  </h5>
                </vs-row>
                <vs-row
                  vs-align="flex-start"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="12"
                >
                  <div v-html="clickedOn.html"></div>
                  <!-- <p
                  class="mt-4 font-medium product-name"
                  style="text-align: center"
                >{{clickedOn.description}}</p> -->
                </vs-row>
                <vs-row
                  vs-align="flex-start"
                  vs-type="flex"
                  vs-justify="center"
                  vs-w="12"
                >
                  <a :href="clickedOn.number">
                    <vs-avatar color="primary" icon="phone" />
                  </a>
                  <a :href="`mailto:${clickedOn.email}`">
                    <vs-avatar color="primary" icon="email" />
                  </a>
                  <a
                    :href="clickedOn.address_url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <vs-avatar color="primary" icon="location_on" />
                  </a>
                </vs-row>
              </vs-popup>
            </gmap-custom-marker>
          </gmap-map>
        </vs-card>
        <gmap-search />

        <div id="data-list-thumb-view" class="data-list-container">
          <vs-table
            ref="table"
            v-model="selected"
            pagination
            :max-items="itemsPerPage"
            search
            :data="markers"
          >
            <div
              slot="header"
              class="flex flex-wrap-reverse items-center justify-between flex-grow"
            >
              <!-- ITEMS PER PAGE -->
              <!-- <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer">
                <div
                  class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg"
                >
                  <span class="mr-2"
                    >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
                    {{
                      markers.length - currentPage * itemsPerPage > 0
                        ? currentPage * itemsPerPage
                        : markers.length
                    }}
                    of {{ markers.length }}</span
                  >
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </div>
                <vs-dropdown-menu>
                  <vs-dropdown-item @click="itemsPerPage = 8">
                    <span>8</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 15">
                    <span>15</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 20">
                    <span>20</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 25">
                    <span>25</span>
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown> -->
            </div>

            <template slot="thead">
              <vs-th>
                <h1>{{ this.$route.params.id }}</h1>
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <tbody>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <img :src="tr.img" class="product-img" />
                  </vs-td>
                  <vs-td>
                    <h5>{{ tr.infoText }}</h5>
                    <div v-html="tr.html"></div>

                    <!-- <p>{{tr.description}}</p> -->
                  </vs-td>
                  <vs-td>
                    <vs-row>
                      <a :href="`tel:+${tr.number}`">
                        <vs-avatar color="primary" icon="phone" />
                      </a>
                    </vs-row>
                    <vs-row>
                      <a :href="`mailto:${tr.email}`">
                        <vs-avatar color="primary" icon="email" />
                      </a>
                    </vs-row>
                    <vs-row>
                      <a
                        :href="tr.address_url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <vs-avatar color="primary" icon="location_on" />
                      </a>
                    </vs-row>
                  </vs-td>
                  <vs-divider></vs-divider>
                </vs-tr>
              </tbody>
            </template>
          </vs-table>
        </div>
      </div>
      <div v-if="googleSearched">
        <gmap-map
          :center="center"
          :zoom="15"
          style="width: 100%; height: 350px"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoWindowPos"
            :opened="infoWinOpen"
            @closeclick="infoWinOpen = false"
          ></gmap-info-window>
          <gmap-marker
            :position="center"
            :clickable="true"
            @click="toggleInfoWindow"
          ></gmap-marker>
          <gmap-custom-marker
            :key="i"
            v-for="(m, i) in markers"
            :marker="m.position"
            @click.native="someFunction(m, i)"
          >
            <vs-avatar :src="`${m.img}`" />

            <vs-popup
              class="holamundo"
              :title="clickedOn.infoText"
              :active.sync="popupActivo"
            >
              <vs-row
                vs-align="flex-start"
                vs-type="flex"
                vs-justify="center"
                vs-w="12"
              >
                <img :src="clickedOn.img" class="product-img" />
              </vs-row>
              <vs-row
                vs-align="flex-start"
                vs-type="flex"
                vs-justify="center"
                vs-w="12"
              >
                <h5 class="mt-5 font-medium product-name">
                  {{ clickedOn.infoText }}
                </h5>
              </vs-row>
              <vs-row
                vs-align="flex-start"
                vs-type="flex"
                vs-justify="center"
                vs-w="12"
              >
                <!-- <p
                class="mt-4 font-medium product-name"
                style="text-align: center"
              >{{clickedOn.description}}</p> -->
                <div v-html="clickedOn.html"></div>
              </vs-row>
              <vs-row
                vs-align="flex-start"
                vs-type="flex"
                vs-justify="center"
                vs-w="12"
              >
                <a :href="clickedOn.number">
                  <vs-avatar color="primary" icon="phone" />
                </a>
                <a :href="`mailto:${clickedOn.email}`">
                  <vs-avatar color="primary" icon="email" />
                </a>
                <a
                  :href="clickedOn.address_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <vs-avatar color="primary" icon="location_on" />
                </a>
              </vs-row>
            </vs-popup>
          </gmap-custom-marker>
        </gmap-map>
        <gmap-search />
        <vs-button @click="googleSearchReset" v-if="googleSearched"
          >Back</vs-button
        >
        <div id="data-list-thumb-view" class="data-list-container">
          <vs-table
            ref="table"
            v-model="selected"
            pagination
            :max-items="itemsPerPage"
            search
            :data="markers"
          >
            <!-- <div
              slot="header"
              class="flex flex-wrap-reverse items-center justify-between flex-grow"
            >
              <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer">
                <div
                  class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg"
                >
                  <span class="mr-2"
                    >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
                    {{
                      markers.length - currentPage * itemsPerPage > 0
                        ? currentPage * itemsPerPage
                        : markers.length
                    }}
                    of {{ markers.length }}</span
                  >
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </div>
                <vs-dropdown-menu>
                  <vs-dropdown-item @click="itemsPerPage = 8">
                    <span>8</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 15">
                    <span>15</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 20">
                    <span>20</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage = 25">
                    <span>25</span>
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div> -->

            <template slot="thead">
              <vs-th>
                <h1>{{ this.$route.params.id }}</h1>
              </vs-th>
            </template>

            <template slot-scope="{ data }">
              <tbody>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td>
                    <img :src="tr.img" class="product-img" />
                  </vs-td>
                  <vs-td>
                    <h5>{{ tr.infoText }}</h5>

                    <!-- <p>{{tr.description}}</p> -->
                    <div v-html="tr.html"></div>
                  </vs-td>
                  <vs-td>
                    <vs-row>
                      <a :href="`tel:+${tr.number}`">
                        <vs-avatar color="primary" icon="phone" />
                      </a>
                    </vs-row>
                    <vs-row>
                      <a :href="`mailto:${tr.email}`">
                        <vs-avatar color="primary" icon="email" />
                      </a>
                    </vs-row>
                    <vs-row>
                      <a
                        :href="tr.address_url"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <vs-avatar color="primary" icon="location_on" />
                      </a>
                    </vs-row>
                  </vs-td>
                  <vs-divider></vs-divider>
                </vs-tr>
              </tbody>
            </template>
          </vs-table>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import firebase from 'firebase'
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import gmapSearch from '@/components/maps/address'
// import GoogleMapBasic from "@/views/charts-and-maps/maps/google-map/GoogleMapBasic.vue";
// import GoogleMapInfoWindow from "@/views/charts-and-maps/maps/google-map/GoogleMapInfoWindow.vue";
// import GoogleMapStreetView from "@/views/charts-and-maps/maps/google-map/GoogleMapStreetView.vue";
// import GoogleMapPop from "@/views/charts-and-maps/maps/google-map/GoogleMapPop.vue";

export default {
  props: ['schema'],
  components: {
    'gmap-custom-marker': GmapCustomMarker,
    'gmap-search': gmapSearch
    // GoogleMapBasic,
    // GoogleMapInfoWindow,
    // GoogleMapStreetView,
    // GoogleMapPop
  },
  data() {
    return {
      center: { lat: 47.376332, lng: 8.547511 },
      infoContent: 'Heloo',
      infoWindowPos: null,
      infoWinOpen: false,
      googleSearched: false,
      currentMidx: null,
      myProfile: {},
      popupActivo: false,
      selected: [],

      clickedOn: {},
      markerOptions: {
        size: { width: 60, height: 90, f: 'px', b: 'px' },
        scaledSize: { width: 30, height: 45, f: 'px', b: 'px' }
      },

      itemsPerPage: 8,
      isMounted: false,

      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: { width: 0, height: -35 }
      },
      markers: []
    }
  },

  computed: {
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
    BusinessGeo() {
      return {
        lng: this.activeBusinessInfo.lng,
        lat: this.activeBusinessInfo.lat
      }
    },

    google_place_search: {
      get: function() {
        return this.$store.getters['google/google_place_search']
      },
      set: function() {
        this.googleSearched = true
      }
    },
    google_marker_search() {
      return this.$store.getters['google/google_marker_search']
    }
    // currentPage() {
    //   if (this.isMounted) {
    //     return this.$refs.table.currentx
    //   }
    //   return 0
    // }
  },
  watch: {
    google_marker_search: function() {
      ;(this.center.lat = this.google_marker_search.lat),
        (this.center.lng = this.google_marker_search.lng)
      this.googleSearched = true
    }
  },
  created() {
    let aroundRetrieve = this.$fireStore
      .collection('apps')
      .doc('apps')
      .collection(this.activeBusinessInfo.b_uid)
      .doc(this.schema.title)
      .collection(this.schema.title)
      .doc(this.schema.id)
      .collection('added')

    aroundRetrieve.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        let doc = change.doc
        this.markers.push({
          id: doc.id,
          position: {
            lng: doc.data().lng,
            lat: doc.data().lat
          },
          infoText: doc.data().title,
          img: doc.data().image[0],
          adr_address: doc.data().addr.addr_name,
          formatted_address: doc.data().addr.for_address,
          email: doc.data().email,
          website: doc.data().website,
          number: doc.data().number,
          address_url: doc.data().addr.addr_url,
          html: doc.data().desc
        })
      })
    })
  },
  mounted() {
    this.isMounted = true
  },

  methods: {
    googleSearchReset() {
      this.googleSearched = false
    },
    someFunction(m, i) {
      this.clickedOn = m
      this.nextMove()
    },
    nextMove() {
      this.popupActivo = true
    },
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position
      this.infoContent = marker.infoText
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true
        this.currentMidx = idx
      }
    },

    getDistance() {
      let newMarket = this.markers
      var i

      for (i = 0; i < this.newMarket.length; i++) {
        function distance(lon1, lat1, lon2, lat2) {
          var R = 6371 // Radius of the earth in km
          var dLat = (lat2 - lat1).toRad() // Javascript functions in radians
          var dLon = (lon2 - lon1).toRad()
          var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1.toRad()) *
              Math.cos(lat2.toRad()) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2)
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
          var d = R * c // Distance in km
          return d
        }

        /** Converts numeric degrees to radians */
        if (typeof Number.prototype.toRad === 'undefined') {
          Number.prototype.toRad = function() {
            return (this * Math.PI) / 180
          }
        }

        window.navigator.geolocation.getCurrentPosition(function(pos) {
          console.log(
            distance(
              this.myAppProfile.geolocation.lat,
              this.myAppProfile.geolocation.lng,
              this.newMarket[i].lat,
              this.newMarket[i].lng
            )
          )
        })
      }
    },
    // getOrderStatusColor(status) {
    //   if (status == 'on hold') return 'warning'
    //   if (status == 'delivered') return 'success'
    //   if (status == 'canceled') return 'danger'
    //   return 'primary'
    // },
    // getPopularityColor(num) {
    //   if (num > 90) return 'success'
    //   if (num > 70) return 'primary'
    //   if (num >= 50) return 'warning'
    //   if (num < 50) return 'danger'
    //   return 'primary'
    // },
    formatData(data) {
      // formats data received from API
      let formattedData = data.map(item => {
        const fields = item.fields
        let obj = {}
        for (const key of Object.keys(fields)) {
          obj[key] =
            Number(fields[key].integerValue) ||
            Number(fields[key].doubleValue) ||
            fields[key].stringValue
        }
        return obj
      })
      return formattedData
    }
  }
}
</script>
<style scoped>
.product-img {
  padding: none !important;
  border-radius: 15%;
  height: 100px;
}
.product-imgs {
  padding: none !important;
  border-radius: 15%;
  height: 120px;
}
</style>
