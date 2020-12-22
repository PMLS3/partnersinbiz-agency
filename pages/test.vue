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
      // .then((response) => {
      //   console.log(response)
      //   if (response.data._id) {
      //     this.$router.push({ name: 'articles', params: { created: 'yes' } })
      //   }
      // })
      // .catch((error) => {
      //   console.log(error)
      //   if (error.response.data.errors) {
      //     this.errors = error.response.data.errors
      //   }
      // })
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
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
