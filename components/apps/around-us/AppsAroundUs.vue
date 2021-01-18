<!-- =========================================================================================
	File Name: 
	Description:
	Component Name: 
	----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <div>
      <!-- <div>
      <google-map-basic :center="myAppProfile[0].geolocation" :markers="markers"></google-map-basic>
      <google-map-info-window :center="myAppProfile[0].geolocation" :markers="markers"></google-map-info-window>
      <google-map-pop :center="myAppProfile[0].geolocation" :markers="markers"></google-map-pop>
    </div>-->
      <div v-if="!googleSearched">
        <vs-card>
          <gmap-map
            :center="companyDetails.geolocation"
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
              :position="companyDetails.geolocation"
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
                <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
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
            <div
              slot="header"
              class="flex flex-wrap-reverse items-center justify-between flex-grow"
            >
              <!-- ITEMS PER PAGE -->
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
                <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
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
    </div>
  </div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
export default {
  name: 'AppsAroundUs',
  props: {
    item_id: {
      type: String,
      default: '',
    },
  },
  components: {
    'gmap-custom-marker': GmapCustomMarker,
  },
  data() {
    return {
      items: [],
    }
  },
  computed: {
    item_unique() {
      return this.item_id ? this.item_id : this.$route.params.id
    },
  },
  created() {
    let vm = this
    let ref = this.$fireStore
      .collection('apps')
      .doc('EventsSingle')
      .collection('app')
      .where('id', '==', this.item_unique)

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === 'added') {
          let doc = change.doc
          let data = doc.data()
          let datas = {
            start: `${doc.data().date_start} ${doc.data().time_start}`,
            end: `${doc.data().date_end} ${doc.data().time_end}`,
            title: doc.data().title,
            icon: 'shopping_cart', // Custom attribute.
            content: doc.data().desc,
            contentFull: doc.data().description,
          }
          data.id = doc.id
          vm.items.push(datas)
        }
      })
    })
  },
}
</script>

<style></style>
