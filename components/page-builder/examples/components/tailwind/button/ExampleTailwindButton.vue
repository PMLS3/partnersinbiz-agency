<!-- =========================================================================================
    File Name: Button.vue
    Description: Buttons - Imports all page portions
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="w-full">
    <div
      class="grid w-full grid-cols-2 gap-16 p-16 mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <div class="grid gap-2">
        <button
          @click="addComponent('button1')"
          id="button1"
          class="flex items-center w-12 h-12 p-3 uppercase bg-blue-600 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        <button
          @click="addComponent('button2')"
          id="button2"
          class="flex items-center w-12 h-12 p-3 uppercase bg-yellow-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 uppercase bg-red-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button3')"
          id="button3"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path d="M12 12h2v12h-2z" fill="currentColor"></path>
            <path d="M18 12h2v12h-2z" fill="currentColor"></path>
            <path
              d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
              fill="currentColor"
            ></path>
            <path d="M12 2h8v2h-8z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 uppercase bg-gray-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button4')"
          id="button4"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path d="M15 2h2v3h-2z" fill="currentColor"></path>
            <path d="M27 15h3v2h-3z" fill="currentColor"></path>
            <path d="M15 27h2v3h-2z" fill="currentColor"></path>
            <path d="M2 15h3v2H2z" fill="currentColor"></path>
            <path
              d="M5.45 6.884l1.414-1.415l2.121 2.122l-1.414 1.414z"
              fill="currentColor"
            ></path>
            <path
              d="M23 7.58l2.121-2.12l1.414 1.414l-2.121 2.121z"
              fill="currentColor"
            ></path>
            <path
              d="M23.002 24.416l1.415-1.414l2.12 2.122l-1.413 1.414z"
              fill="currentColor"
            ></path>
            <path
              d="M5.47 25.13L7.59 23L9 24.42l-2.12 2.12l-1.41-1.41z"
              fill="currentColor"
            ></path>
            <path
              d="M16 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8zm0 14a6 6 0 0 1 0-12z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 uppercase bg-green-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button5')"
          id="button5"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5zm0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>

      <div class="grid gap-2">
        <button
          class="flex items-center w-12 h-12 p-3 text-blue-600 uppercase border border-blue-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button6')"
          id="button6"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9z"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        <button
          class="flex items-center w-12 h-12 p-3 text-yellow-600 uppercase border border-yellow-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button7')"
          id="button7"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 text-red-600 uppercase border border-red-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button8')"
          id="button8"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path d="M12 12h2v12h-2z" fill="currentColor"></path>
            <path d="M18 12h2v12h-2z" fill="currentColor"></path>
            <path
              d="M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20z"
              fill="currentColor"
            ></path>
            <path d="M12 2h8v2h-8z" fill="currentColor"></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 text-gray-600 uppercase border border-gray-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button9')"
          id="button9"
        >
          <svg
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path d="M15 2h2v3h-2z" fill="currentColor"></path>
            <path d="M27 15h3v2h-3z" fill="currentColor"></path>
            <path d="M15 27h2v3h-2z" fill="currentColor"></path>
            <path d="M2 15h3v2H2z" fill="currentColor"></path>
            <path
              d="M5.45 6.884l1.414-1.415l2.121 2.122l-1.414 1.414z"
              fill="currentColor"
            ></path>
            <path
              d="M23 7.58l2.121-2.12l1.414 1.414l-2.121 2.121z"
              fill="currentColor"
            ></path>
            <path
              d="M23.002 24.416l1.415-1.414l2.12 2.122l-1.413 1.414z"
              fill="currentColor"
            ></path>
            <path
              d="M5.47 25.13L7.59 23L9 24.42l-2.12 2.12l-1.41-1.41z"
              fill="currentColor"
            ></path>
            <path
              d="M16 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8zm0 14a6 6 0 0 1 0-12z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          class="flex items-center w-12 h-12 p-3 text-green-600 uppercase border border-green-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button10')"
          id="button10"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            style="transform: rotate(360deg)"
          >
            <path
              d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5zm0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3zM7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3zm16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 uppercase bg-blue-600 shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button11')"
          id="button11"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-yellow-500 shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button12')"
          id="button12"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-red-600 shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button13')"
          id="button13"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-gray-600 shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button14')"
          id="button14"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-green-600 shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button15')"
          id="button15"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 text-blue-600 uppercase border border-blue-600 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button16')"
          id="button16"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-yellow-600 uppercase border border-yellow-600 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button17')"
          id="button17"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase border border-red-600 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button18')"
          id="button18"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-gray-600 uppercase border border-gray-600 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button19')"
          id="button19"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-green-600 uppercase border border-green-600 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button20')"
          id="button20"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 text-blue-600 uppercase bg-blue-300 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button21')"
          id="button21"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-yellow-600 uppercase bg-yellow-300 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button22')"
          id="button22"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase bg-red-300 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button23')"
          id="button23"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-gray-600 uppercase bg-gray-300 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button24')"
          id="button24"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-green-600 uppercase bg-green-300 shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button25')"
          id="button25"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 uppercase bg-blue-600 rounded shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button26')"
          id="button26"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-yellow-500 rounded shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button27')"
          id="button27"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-red-600 rounded shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button28')"
          id="button28"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-gray-600 rounded shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button29')"
          id="button29"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-green-600 rounded shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button30')"
          id="button30"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 text-blue-600 uppercase border border-blue-600 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button31')"
          id="button31"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-yellow-600 uppercase border border-yellow-600 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button32')"
          id="button32"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase border border-red-600 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button33')"
          id="button33"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-gray-600 uppercase border border-gray-600 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button34')"
          id="button34"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-green-600 uppercase border border-green-600 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button35')"
          id="button35"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          @click="addComponent('button36')"
          id="button36"
          class="px-8 py-2 text-blue-600 uppercase bg-blue-300 rounded shadow-sm max-w-max hover:shadow-lg"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-yellow-600 uppercase bg-yellow-300 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button37')"
          id="button37"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase bg-red-300 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button38')"
          id="button38"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-gray-600 uppercase bg-gray-300 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button39')"
          id="button39"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-green-600 uppercase bg-green-300 rounded shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button40')"
          id="button40"
        >
          button
        </button>
      </div>

      <div class="grid gap-2">
        <button
          class="px-8 py-2 uppercase bg-blue-600 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button41')"
          id="button41"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-yellow-500 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button42')"
          id="button42"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-red-600 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button43')"
          id="button43"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-gray-600 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button44')"
          id="button44"
        >
          button
        </button>
        <button
          class="px-8 py-2 uppercase bg-green-600 rounded-full shadow-sm text-blue-50 max-w-max hover:shadow-lg"
          @click="addComponent('button45')"
          id="button45"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          @click="addComponent('button46')"
          id="button46"
          class="px-8 py-2 text-blue-600 uppercase border border-blue-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
        >
          button
        </button>
        <button
          @click="addComponent('button47')"
          id="button47"
          class="px-8 py-2 text-yellow-600 uppercase border border-yellow-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase border border-red-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button48')"
          id="button48"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-gray-600 uppercase border border-gray-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button49')"
          id="button49"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-green-600 uppercase border border-green-600 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button50')"
          id="button50"
        >
          button
        </button>
      </div>
      <div class="grid gap-2">
        <button
          class="px-8 py-2 text-blue-600 uppercase bg-blue-300 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button51')"
          id="button51"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-yellow-600 uppercase bg-yellow-300 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button52')"
          id="button52"
        >
          button
        </button>
        <button
          class="px-8 py-2 text-red-600 uppercase bg-red-300 rounded-full shadow-sm max-w-max hover:shadow-lg"
          @click="addComponent('button53')"
          id="button53"
        >
          button
        </button>
        <button
          @click="addComponent('button54')"
          id="button54"
          class="px-8 py-2 text-gray-600 uppercase bg-gray-300 rounded-full shadow-sm max-w-max hover:shadow-lg"
        >
          button
        </button>
        <button
          @click="addComponent('button55')"
          id="button55"
          class="px-8 py-2 text-green-600 uppercase bg-green-300 rounded-full shadow-sm max-w-max hover:shadow-lg"
        >
          button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addComponent(name) {
      let element = document.getElementById(name)

      let payload = this.$comp_create(
        element,
        this.$store.state.page_builder.list_pos
      )

      $nuxt.$emit('component-added', payload)
      $nuxt.$emit('close_comp')
    },
  },
}
</script>
