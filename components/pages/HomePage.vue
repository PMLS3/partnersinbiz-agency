<template>
  <div class="relative w-full h-screen">
    <div class="absolute z-10 w-full h-full">
      <div class="flex items-center justify-start h-full px-16">
        <div class="flex flex-col py-12 space-y-4 lg:w-2/5">
          <!-- <img
              src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABe_MJtJKPmsSU3pjUiW7bRyT8Hg_kAJPLRj6rNNltpjGgSphvfVGjXLQ-_Ic1FIYJ319RRDnIdqPk9D8Uq2X8oHSGVrwbHfx3j1dW_6GncJ2IKZ3OVRybWHjTMdUVY_CLeo3z2EQotzC1-faA7LSygaF5sxsqoskzrVPj6n-NS80jg.png?r=4af"
              alt=""
            /> -->
          <h3 class="text-4xl font-semibold text-white">
            We're Partners in Biz
          </h3>
          <h3 class="text-2xl font-semibold text-white">
            We help entrepreneurs / freelancers / business owners scale and get
            more clients by building incredible marketing systems
          </h3>
          <small class="text-white"
            >We currently available for consulting</small
          >
          <hr />
          <p class="mt-20 text-2xl text-white">
            By challenging tradional systems, We've been able to work in the
            beauty, fitness, health, remodeling and digital service industries.
          </p>
          <small class="text-white"
            >Each industry requires its own thorough market research. This means
            that each industry has different systems in place to ensure maximum
            results</small
          >
          <hr />
          <p class="mt-20 text-2xl text-white">
            Here is what we currently offer:
          </p>
          <ul class="mt-20 text-xl text-white">
            <li>Ad Management</li>
            <li>Lead Generation</li>
            <li>Funnels</li>
            <li>Website Creation/Design</li>
          </ul>
          <!-- <div class="flex flex-row w-full space-x-4">
            <button
              class="flex items-center justify-center w-32 px-3 py-2 mt-5 space-x-2 bg-white rounded-lg shadow-md"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="font-semibold text-gray-800">Video</span>
            </button>
            <button
              @click="$router.push('/AframeWorld')"
              class="flex items-center justify-center w-auto px-3 py-2 mt-5 space-x-2 bg-gray-800 bg-opacity-50 rounded-lg shadow-md"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span class="font-semibold text-white">More info</span>
            </button>
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="absolute bottom-0 w-full h-64 bg-gradient-to-t from-black"
    ></div>
    <video class="object-cover w-full h-screen" autoplay muted loop>
      <source
        class="object-contain h-screen"
        src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    aframeWorld() {
      window.open('/AframeWorld', '_blank')
    }
  }
}
</script>

<style></style>
