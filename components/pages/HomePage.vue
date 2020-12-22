<template>
  <div class="bg-black fullpage-container">
    <header class="sticky top-0 grid grid-cols-2 py-5 bg-black row">
      <h1
        class="ml-8 font-serif text-2xl text-white md:text-4xl"
        @click="$router.push('/')"
      >
        Partners in Biz
      </h1>
      <NuxtLink to="/consultation">
        <h1 class="float-right mr-3 font-serif text-2xl text-white md:text-4xl">
          Schedule Now
        </h1></NuxtLink
      >
    </header>
    <div class="p-10 fullpage-wp md:px-60" v-fullpage="opts" ref="example">
      <div class="page-1 page">
        <div class="part-1" v-animate="{ value: 'bounceInLeft' }">
          <h1 class="mt-24 font-serif text-5xl text-white">
            We're Partners in Biz
          </h1>
          <h3
            class="mt-5 overflow-hidden font-serif text-3xl text-white md:text-5xl overflow-clip md:mr-60"
          >
            We help entrepreneurs / freelancers / business owners scale and get
            more clients by building incredible marketing systems.
          </h3>

          <h3
            class="mt-8 overflow-hidden font-mono text-xl text-white mb-36 overflow-clip"
          >
            We are currently available for consulting.
          </h3>
        </div>
      </div>
      <div class="p-10 page-2 page">
        <div class="part-2" v-animate="{ value: 'bounceInRight' }">
          <h3
            class="mt-24 overflow-hidden font-serif text-3xl text-white md:text-5xl overflow-clip md:mr-24"
          >
            Doing the right thing at the right time to GROW your Business. What
            ever service we provide, we will keep you up to date with weekly
            reports.
          </h3>

          <h3
            class="mt-6 overflow-hidden font-serif text-xl text-white mb-36 overflow-clip"
          >
            If they don't know about you, how can they use you? Each industry
            requires its own thorough market reseach.
          </h3>
        </div>
      </div>
      <div class="p-10 page-3 page md:px-60">
        <div class="part-3" v-animate="{ value: 'bounceInLeft', delay: 0 }">
          <h3
            class="mt-24 overflow-hidden font-serif text-3xl text-white md:text-5xl overflow-clip"
          >
            Here's how we can help:
          </h3>
        </div>
        <div class="part-3" v-animate="{ value: 'bounceInRight', delay: 600 }">
          <ul class="mt-6 font-serif text-2xl text-white list-disc">
            <li class="ml-8 list-disc">Ad management</li>
            <li class="ml-8 list-disc">Email marketing</li>
            <li class="ml-8 list-disc">Lead generation</li>
            <li class="ml-8 list-disc">Website design</li>
            <li class="ml-8 list-disc">Funnels</li>
          </ul>
          <h3
            class="mt-6 overflow-hidden font-serif text-xl text-white overflow-clip"
          >
            We exceed expectations...
          </h3>
        </div>
        <div class="part-3" v-animate="{ value: 'zoomInDown', delay: 1200 }">
          <div class="mt-32 text-center">
            <h1 class="font-serif text-3xl text-white">Let's get started.</h1>
            <NuxtLink to="/consultation">
              <h1 class="font-serif text-blue-700">
                Free consultation
              </h1></NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
    <vs-button @click="moveNext">next</vs-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opts: {
        start: 0,
        dir: 'v',
        duration: 500,
        beforeChange: function (currentSlideEl, currenIndex, nextIndex) {},
        afterChange: function (currentSlideEl, currenIndex) {},
      },
    }
  },
  methods: {
    moveNext() {
      this.$refs.example.$fullpage.moveNext() //Move to the next page
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
