<template>
  <div class="h-full">
    <!-- <client-only>
      <vs-button
        @click="$router.push('test')"
        class="mt-24 backInDown-enter-active"
        >Tetst</vs-button
      >

      <div id="example-2">
        <button @click="show = !show">Toggle show</button>
        <transition name="backInLeft" appear>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            facilisis enim libero, at lacinia diam fermentum id. Pellentesque
            habitant morbi tristique senectus et netus.
          </p>
        </transition>
      </div>
      <transition name="backInDown" appear>
        <div><h1>Hello</h1></div>
      </transition>
    </client-only> -->
    <!-- <div
      class="relative flex flex-wrap content-center justify-center"
      id="video-over"
      @click="addComponent('video-over')"
    >
      <h1
        class="absolute text-3xl leading-none text-white uppercase place-self-center video-title md:text-5xl"
      >
        Video Title
      </h1>

      <h1
        class="absolute mt-24 text-xl leading-none text-white uppercase place-self-center video-title md:text-5xl"
      >
        Video tag line to entice
      </h1>
      <video
        src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
        autoplay
        muted
        loop
        class="object-cover w-full h-full"
      ></video>
    </div>
    <div
      class="px-24 py-24 font-serif text-2xl text-center backInUp-enter-active"
    >
      The ultimate Cape Winelands experience, Delaire Graff is dedicated to
      beauty in its many forms. Much like polishing a diamond to reveal its
      brilliance, jeweller Laurence Graff has transformed an extraordinary
      natural setting into a world-class destination for wine, art, cuisine and
      escape from the everyday.
    </div>
    <hr class="mb-6" />
    <div class="grid h-48 grid-cols-1 gap-4 md:grid-cols-2">
      <img
        src="https://drive.google.com/file/d/1b89VEmkySp-u3LkLhmwD9XpzaZF3Z8uO/view?usp=sharing"
      />

      <div class="items-center content-center">
        <p class="font-serif text-gray-600 uppercase">fadslfjadslfj</p>
        <h3 class="text-2xl text-gray-700 bold">
          Experince this and that with this
        </h3>
        <p class="text-base text-gray-600">
          dfalsjdf dfljdsa fdaslf ldfj;adjfas;fjdf
        </p>
        <button
          class="items-center px-3 py-4 border border-gray-600 shadow-sm transparent"
        >
          Button
        </button>
      </div>
    </div> -->
    <body class="font-serif bg-white">
      <div class="relative w-full h-screen p-16">
        <header
          class="relative z-20 flex items-center justify-between w-full h-20"
        >
          <a href="#" class="text-3xl leading-tight text-gray-100"
            >Kay<br />Salon</a
          >

          <ul class="flex text-sm italic lowercase">
            <li>
              <a href="#" class="text-pink-400">Home</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">About</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Services</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Franchise</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Beauty</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Products</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Team Kay</a>
            </li>
            <li class="ml-4">
              <a href="#" class="text-pink-400">Contact</a>
            </li>
          </ul>
        </header>

        <div class="relative z-20 flex flex-wrap h-full pt-32 -mt-20">
          <div class="w-full h-full md:w-1/2">
            <img
              src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-112.jpg?v=1611923981756"
              class="object-cover w-full h-full"
            />
          </div>

          <div class="flex items-center justify-center w-full p-10 md:w-1/2">
            <div class="max-w-xs">
              <h1 class="mb-4 text-6xl leading-none backInRight-enter-active">
                Welcome
              </h1>
              <p class="mb-8 text-sm leading-relaxed backInDown-enter-active">
                No matter which salon you go to we are all dedicated to
                maintaining the same legacy of hard work and quality that Kays
                Nails was originally founded on. We are dedicated to providing
                excellent customer service and a high level of cleanliness. We
                always listen to our customers, and try our best to meet all
                your demands.
              </p>
              <a
                href="#"
                class="px-4 py-3 font-sans text-xs text-white uppercase bg-pink-400"
                >Learn more <i class="ml-1 fa fa-chevron-right"></i
              ></a>
            </div>
          </div>
        </div>

        <div
          class="absolute top-0 left-0 z-10 w-1/2 h-full -ml-20 bg-pink-400"
        ></div>

        <div
          class="absolute bottom-0 left-0 z-10 w-1 h-64 ml-5 bg-pink-100"
        ></div>
      </div>

      <div
        class="flex items-center justify-center w-full py-40 text-center bg-pink-100"
      >
        <h2 class="max-w-2xl text-4xl leading-tight">
          “ Beauty begins the moment you decide to be yourself.” Coco Chanel.
        </h2>
      </div>

      <div
        class="relative z-20 flex flex-wrap items-center justify-center h-screen overflow-hidden"
      >
        <div
          class="relative z-20 flex flex-wrap justify-around w-full max-w-4xl"
        >
          <div class="w-full md:w-64">
            <div class="relative mb-10">
              <img
                src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2Funnamed%20(7).jpg?v=1611923965286"
                class="object-cover w-64 h-64"
              />

              <div
                class="absolute bottom-0 left-0 flex items-start justify-center w-full"
              >
                <div class="w-1 h-16 -mb-6 bg-pink-900"></div>
              </div>
            </div>

            <h3
              class="font-sans text-xs tracking-tighter text-center uppercase"
            >
              BEST PRODUCTS
            </h3>
          </div>

          <div class="w-full md:w-64 md:mt-16">
            <div class="relative mb-10">
              <img
                src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2Funnamed%20(1).jpg?v=1611923965070"
                class="object-cover w-64 h-64"
              />

              <div
                class="absolute bottom-0 left-0 flex items-start justify-center w-full"
              >
                <div class="w-1 h-16 -mb-6 bg-pink-900"></div>
              </div>
            </div>

            <h3
              class="font-sans text-xs tracking-tighter text-center uppercase"
            >
              ANOTHER THING
            </h3>
          </div>

          <div class="w-full md:w-64 md:mt-32">
            <div class="relative mb-10">
              <img
                src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2Funnamed%20(2).jpg?v=1611923967352"
                class="object-cover w-64 h-64"
              />

              <div
                class="absolute bottom-0 left-0 flex items-start justify-center w-full"
              >
                <div class="w-1 h-16 -mb-6 bg-pink-900"></div>
              </div>
            </div>

            <h3
              class="font-sans text-xs tracking-tighter text-center uppercase"
            >
              KID FRIENDLY
            </h3>
          </div>
        </div>

        <div
          class="absolute top-0 right-0 z-10 w-1/2 h-full -mr-20 bg-pink-400"
        ></div>

        <div
          class="absolute bottom-0 right-0 z-10 w-1 h-64 mr-5 bg-pink-100"
        ></div>
      </div>

      <div class="w-full py-40">
        <div class="flex flex-wrap max-w-3xl mx-auto">
          <div class="w-3/12 pr-6">
            <h2
              class="text-5xl font-bold leading-tight text-right text-pink-400 lowercase"
            >
              About<br />Kay
            </h2>
          </div>

          <div class="w-9/12 mt-2">
            <p class="mb-8 leading-relaxed opacity-75 backInDown-enter-active">
              Kay Mophethe, founder of Kay Beauty and Nails, has been in the
              beauty and nail industry for twelve years. The spark that ignited
              this passion was her very first visit to a nail salon when her
              father took her to Dream Nails in 2006 to get ready for her matric
              farewell. This is where she experienced the care and creativity
              this industry had to offer.
            </p>
            <a
              href="#"
              class="px-4 py-3 font-sans text-xs text-white uppercase bg-pink-400"
              >Learn more <i class="ml-1 fa fa-chevron-right"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="relative w-full py-24 mt-4">
        <div
          class="relative z-20 max-w-3xl py-6 mx-auto text-center bg-pink-300 opacity-75"
        >
          <h3 class="mb-4 text3xl">Subscribe</h3>
          <p class="mb-6 text-sm">Stay up to date with our news letter</p>

          <form class="flex w-full max-w-xs mx-auto">
            <input
              type=""
              class="flex-1 h-12 px-4 py-2"
              placeholder="Email address"
            />
            <button
              class="w-24 h-12 ml-2 text-sm text-white uppercase bg-pink-400 border-none"
            >
              Sign up
            </button>
          </form>
        </div>

        <img
          src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-18.jpg?v=1611929350247"
          class="absolute top-0 left-0 z-10 object-cover w-full h-full"
        />
      </div>

      <div class="relative flex flex-wrap justify-around w-full px-24 py-32">
        <img
          src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-28.jpg?v=1611923966688"
          class="object-cover w-64 h-64 mb-12 md:mb-0"
        />
        <img
          src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-33.jpg?v=1611923961506"
          class="object-cover w-64 h-64 mb-12 md:mb-0"
        />
        <img
          src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-23.jpg?v=1611923984027"
          class="object-cover w-64 h-64 mb-12 md:mb-0"
        />
        <img
          src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2FKAY-9.jpg?v=1611923950844"
          class="object-cover w-64 h-64"
        />

        <h4
          class="absolute top-0 left-0 mt-12 ml-20 text-6xl font-bold tracking-tighter text-pink-300"
        >
          kay
        </h4>
        <h4
          class="absolute bottom-0 right-0 mb-16 mr-20 text-6xl font-bold tracking-tighter text-pink-300"
        >
          salon
        </h4>
      </div>

      <div class="w-full px-24 py-20 text-center text-gray-100 bg-pink-400">
        <p>&copy; Copyright 2021 | Kay Mophethe</p>
      </div>
    </body>
  </div>
</template>
<script>
export default {
  // layout: 'fullPage',
  data() {
    return {
      show: true,
    }
  },
  computed: {
    main_business_set() {
      return this.$store.state.business.main_business_set
    },
  },
  created() {
    let vm = this

    console.log(vm.main_business_set)
    if (process.client) {
      let url = window.location.href

      console.log(url)
      if (url == 'http://localhost:3000/') {
        url = 'https://partnersinbiz.tech/'
      }

      if (!vm.main_business_set) {
        vm.$fireStore
          .collection('business')
          .where('linked_url', '==', url)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, ' => ', doc.data())

              let payload = doc.data()
              payload.id = doc.id
              payload.b_uid = doc.id
              vm.$store.commit('business/UPDATE_MAIN_BUSINESS_INFO', payload)
              vm.$store.commit('business/UPDATE_BUSINESS_INFO', payload)
              vm.$store.commit('business/UPDATE_MAIN_BUSINESS_SET', true)
            })
          })
          .catch(function (error) {
            console.log('Error getting documents: ', error)
          })
      }
    }
  },
}
</script>
