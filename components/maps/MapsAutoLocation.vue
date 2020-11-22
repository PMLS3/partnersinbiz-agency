<template>
  <div>
    <div>
      <h5>Search and add location</h5>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace"
          style="
            padding: 8px;
            color: black;
            border-width: 1px;
            z-index: 5000000;
          "
        ></gmap-autocomplete>
        <vs-button @click="addMarker">Set Address</vs-button>
      </label>
      <br />

      <br />
      <gmap-map :center="center" :zoom="12" style="width: 100%; height: 400px;">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </div>
</template>

<script>
// import Geohash from "latlon-geohash";
export default {
  name: 'GoogleMap',
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
      geo1: 0,
      geo2: 0,
      geo3: 0,
      geo4: 0,
      geo5: 0,
      geo6: 0,
      geo7: 0,
      geo8: 0,
      geo9: 0
    }
  },
  mounted() {
    this.geolocate()
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      console.log('place', place)
      this.currentPlace = place
      this.$store.dispatch('google/googlePlace', place)
    },
    addMarker() {
      if (this.currentPlace) {
        console.log('current', this.currentPlace)
        console.log(
          'this.currentPlace.geometry.location.lat(): ',
          this.currentPlace.geometry.location.lat()
        )
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
        this.$store.dispatch('google/googleMarker', marker)
        console.log('marker', marker)
        //Geo
        // const geohash1 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 1);
        // this.geo1 = geohash1;
        // console.log("geo1", this.geo1);
        // const geohash2 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 2);
        // this.geo2 = geohash2;
        // const geohash3 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 3);
        // this.geo3 = geohash3;
        // const geohash4 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 4);
        // this.geo4 = geohash4;
        // const geohash5 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 5);
        // this.geo5 = geohash5;
        // const geohash6 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 6);
        // this.geo6 = geohash6;
        // const geohash7 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 7);
        // this.geo7 = geohash7;
        // const geohash8 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 8);
        // this.geo8 = geohash8;
        // const geohash9 = Geohash.encode(`${marker.lat}`, `${marker.lng}`, 9);
        // this.geo9 = geohash9;
        let geoHashNew = {
          geo1: this.geo1,
          geo2: this.geo2,
          geo3: this.geo3,
          geo4: this.geo4,
          geo5: this.geo5,
          geo6: this.geo6,
          geo7: this.geo7,
          geo8: this.geo8,
          geo9: this.geo9
        }
        console.log('herwea', geoHashNew)
        this.$store.dispatch('google/geoHashSet', geoHashNew)
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        console.log('positon', position.coords.latitude)
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>
<style scoped></style>
