<!-- =========================================================================================
    File Name: Error404.vue
    Description: 404 Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <body
    class="font-serif bg-white"
    @click="addComponent('uncover')"
    id="uncover"
  >
    <div class="relative w-full h-screen p-16">
      <header
        class="relative z-20 flex items-center justify-between w-full h-20"
      >
        <a href="#" class="text-3xl leading-tight text-gray-100"
          >Un-<br />cover</a
        >

        <ul class="flex text-sm italic lowercase">
          <li>
            <a href="#">Home</a>
          </li>
          <li class="ml-4">
            <a href="#">About</a>
          </li>
          <li class="ml-4">
            <a href="#">Services</a>
          </li>
          <li class="ml-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>

      <div class="relative z-20 flex flex-wrap h-full pt-32 -mt-20">
        <div class="w-full h-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1514315384763-ba401779410f?w=1400"
            class="object-cover w-full h-full"
          />
        </div>

        <div class="flex items-center justify-center w-full p-10 md:w-1/2">
          <div class="max-w-xs">
            <h1 class="mb-4 text-6xl leading-none">Welcome</h1>
            <p class="mb-8 text-sm leading-relaxed">
              Ad fugiat in dolore velit fugiat mollit dolore eu sunt tempor anim
              reprehenderit. Ad fugiat in dolore velit fugiat mollit dolore eu
              sunt tempor anim reprehenderit.
            </p>
            <a
              href="#"
              class="px-4 py-3 font-sans text-xs text-white uppercase bg-gray-900"
              >Learn more <i class="ml-1 fa fa-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>

      <div
        class="absolute top-0 left-0 z-10 w-1/2 h-full -ml-20 bg-gray-900"
      ></div>

      <div
        class="absolute bottom-0 left-0 z-10 w-1 h-64 ml-5 bg-gray-100"
      ></div>
    </div>

    <div
      class="flex items-center justify-center w-full py-40 text-center bg-gray-100"
    >
      <h2 class="max-w-2xl text-4xl leading-tight">
        In dolore fugiat laborum fugiat aliquip velit in nisi commodo culpa
        minim.
      </h2>
    </div>

    <div
      class="relative z-20 flex flex-wrap items-center justify-center h-screen overflow-hidden"
    >
      <div class="relative z-20 flex flex-wrap justify-around w-full max-w-4xl">
        <div class="w-full md:w-64">
          <div class="relative mb-10">
            <img
              src="https://images.unsplash.com/photo-1499914485622-a88fac536970?w=640"
              class="object-cover w-64 h-64"
            />

            <div
              class="absolute bottom-0 left-0 flex items-start justify-center w-full"
            >
              <div class="w-1 h-16 -mb-6 bg-gray-900"></div>
            </div>
          </div>

          <h3 class="font-sans text-xs tracking-tighter text-center uppercase">
            Pinterest Management
          </h3>
        </div>

        <div class="w-full md:w-64 md:mt-16">
          <div class="relative mb-10">
            <img
              src="https://images.unsplash.com/photo-1462078563783-650e23af549d?w=640"
              class="object-cover w-64 h-64"
            />

            <div
              class="absolute bottom-0 left-0 flex items-start justify-center w-full"
            >
              <div class="w-1 h-16 -mb-6 bg-gray-900"></div>
            </div>
          </div>

          <h3 class="font-sans text-xs tracking-tighter text-center uppercase">
            Instagram Strategy
          </h3>
        </div>

        <div class="w-full md:w-64 md:mt-32">
          <div class="relative mb-10">
            <img
              src="https://images.unsplash.com/photo-1553531580-652231dae097?w=640"
              class="object-cover w-64 h-64"
            />

            <div
              class="absolute bottom-0 left-0 flex items-start justify-center w-full"
            >
              <div class="w-1 h-16 -mb-6 bg-gray-900"></div>
            </div>
          </div>

          <h3 class="font-sans text-xs tracking-tighter text-center uppercase">
            Brand Design
          </h3>
        </div>
      </div>

      <div
        class="absolute top-0 right-0 z-10 w-1/2 h-full -mr-20 bg-gray-400"
      ></div>

      <div
        class="absolute bottom-0 right-0 z-10 w-1 h-64 mr-5 bg-gray-100"
      ></div>
    </div>

    <div class="w-full py-40">
      <div class="flex flex-wrap max-w-3xl mx-auto">
        <div class="w-3/12 pr-6">
          <h2
            class="text-5xl font-bold leading-tight text-right text-gray-900 lowercase"
          >
            About<br />us
          </h2>
        </div>

        <div class="w-9/12">
          <p class="mb-8 leading-relaxed opacity-75">
            Cupidatat non sed exercitation deserunt nisi dolor in magna ullamco
            aute commodo labore laborum consequat laboris ut minim ad in non
            anim. Cupidatat non sed exercitation deserunt nisi dolor in magna
            ullamco aute commodo labore.
          </p>
          <a
            href="#"
            class="px-4 py-3 font-sans text-xs text-white uppercase bg-gray-900"
            >Learn more <i class="ml-1 fa fa-chevron-right"></i
          ></a>
        </div>
      </div>
    </div>

    <div class="relative w-full py-24">
      <div class="relative z-20 max-w-3xl py-6 mx-auto text-center bg-gray-300">
        <h3 class="mb-4 text-2xl">Subscribe</h3>
        <p class="mb-6 text-sm">
          Enim commodo nostrud in sunt nulla cillum tempor.
        </p>

        <form class="flex w-full max-w-xs mx-auto">
          <input
            type=""
            class="flex-1 h-12 px-4 py-2"
            placeholder="Email address"
          />
          <button
            class="w-24 h-12 ml-2 text-sm text-white uppercase bg-gray-900"
          >
            Sign up
          </button>
        </form>
      </div>

      <img
        src="https://images.unsplash.com/photo-1554412664-6a4d8f640b3b?w=1800"
        class="absolute top-0 left-0 z-10 object-cover w-full h-full"
      />
    </div>

    <div class="relative flex flex-wrap justify-around w-full px-24 py-32">
      <img
        src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=640"
        class="object-cover w-64 h-64 mb-12 md:mb-0"
      />
      <img
        src="https://images.unsplash.com/photo-1533525801715-1f3764669187?w=640"
        class="object-cover w-64 h-64 mb-12 md:mb-0"
      />
      <img
        src="https://images.unsplash.com/photo-1521335751419-603f61523713?w=640"
        class="object-cover w-64 h-64 mb-12 md:mb-0"
      />
      <img
        src="https://images.unsplash.com/photo-1495564103921-67412af57da3?w=640"
        class="object-cover w-64 h-64"
      />

      <h4
        class="absolute top-0 left-0 mt-12 ml-20 text-6xl font-bold tracking-tighter text-gray-800"
      >
        insta
      </h4>
      <h4
        class="absolute bottom-0 right-0 mb-16 mr-20 text-6xl font-bold tracking-tighter text-gray-800"
      >
        gram
      </h4>
    </div>

    <div class="w-full px-24 py-20 text-center text-gray-100 bg-gray-900">
      <p>&copy; Copyright 2019 | Built by Digizu</p>
    </div>
  </body>
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
