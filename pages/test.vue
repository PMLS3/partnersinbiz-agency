<template>
  <div class="w-screen h-screen bg-black">
    <h1>Select a state</h1>
    <vs-button @click="fetchSomething">Fetch</vs-button>
    <vs-button @click="submitForm">Submit</vs-button>
    <h1 class="text-white" v-for="(data, index) in ip" :key="index">
      {{ data }}
    </h1>
    <br />
    <vs-button @click="fetchStates">Fetch State</vs-button>
    <vs-button @click="submitForms">Submit</vs-button>
    <h1 class="text-white" v-for="(data, index) in states" :key="index">
      {{ data }}
    </h1>
  </div>
</template>

<script>
// import '@/js/data/states.js'
export default {
  layout: 'pib',
  data() {
    return {
      ip: {},
      title: 'PEET',
      author: 'Stander',
      body: 'whoo',
      states: [],
      number: 0,
    }
  },
  watch: {
    ip() {
      console.log('data', this.ip)
    },
  },
  async asyncData() {
    // const posts = await
  },

  methods: {
    async fetchSomething() {
      const map = await this.$axios.$get('/api/business')
      console.log('map', map)
      const ip = await this.$axios.$get('/api/posts')
      // const states = await ip.json()
      console.log('posts', ip)
      this.ip = ip
    },
    async fetchStates() {
      const ip = await this.$axios.$get('/api/states')
      // const states = await ip.json()
      console.log('states', ip)
      this.states = ip
    },
    submitForm() {
      this.$axios.$post('/api/posts', {
        title: this.title,
        author: this.author,
        body: this.body,
      })

      this.$axios.post('/api/business')
    },
    submitForms() {
      this.$axios.$post('/api/states')
      this.fetchData()
    },
    fetchData() {
      if (this.number < 10) {
        setTimeout(() => {
          console.log('i', this.number)
          this.number++
          this.fetchStates()
          this.fetchData()
        }, 300)
      } else {
        this.number = 0
      }
    },
  },
}
</script>
<style>
/* Always set the map height explicitly to define the size of the div
     * element that contains the map. */
#map {
  height: 100%;
  background-color: grey;
}

/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* TODO: Step 4A1: Make a generic sidebar */
/* Styling for an info pane that slides out from the left. 
     * Hidden by default. */
#panel {
  height: 100%;
  width: null;
  background-color: white;
  position: fixed;
  z-index: 1;
  overflow-x: hidden;
  transition: all 0.2s ease-out;
}

.open {
  width: 250px;
}

/* Styling for place details */
.hero {
  width: 100%;
  height: auto;
  max-height: 166px;
  display: block;
}

.place,
p {
  font-family: 'open sans', arial, sans-serif;
  padding-left: 18px;
  padding-right: 18px;
}

.details {
  color: darkslategrey;
}

a {
  text-decoration: none;
  color: cadetblue;
}
</style>
