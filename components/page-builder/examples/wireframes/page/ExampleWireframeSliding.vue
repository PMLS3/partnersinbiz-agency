<template>
  <div class="font-serif bg-white divide-y divide-fuchsia-300">
    <ExampleWireFrameNavigationNavbar />
    <div
      class="relative flex flex-wrap content-center justify-center w-screen"
      id="video-over"
    >
      <h1
        class="absolute text-6xl leading-none text-white uppercase place-self-center video-title md:text-5xl backInDown-enter-active"
      >
        KAY
      </h1>

      <h1
        class="absolute mt-24 text-2xl leading-none text-white uppercase place-self-center video-title md:text-5xl backInDown-enter-active"
      >
        Nail & Beauty Bar
      </h1>
      <video
        src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FSpaInfi29rose.mp4?v=1612328104932"
        autoplay
        muted
        loop
        class="object-cover w-full h-full"
      ></video>
    </div>
    <p
      class="px-12 mx-auto mt-10 text-2xl text-gray-800"
      v-waypoint="{ active, callback }"
      id="bookingavail"
      transtype="backInUp-enter-active"
    >
      No matter which salon you go to we are all dedicated to maintaining the
      same legacy of hard work and quality that Kays Nails was originally
      founded on. We are dedicated to providing excellent customer service and a
      high level of cleanliness. We always listen to our customers, and try our
      best to meet all your demands.
    </p>

    <hr class="w-3/4 mx-auto my-24 text-gray-800" />

    <div class="container">
      <div
        class="grid h-screen grid-cols-1 md:grid-cols-2"
        v-waypoint="{ active, callback }"
        id="antiaging"
        transtype="backInRight-enter-active"
      >
        <div class="max-h-96 md:h-screen">
          <img
            class="object-cover object-top w-full h-full"
            src="https://cdn.glitch.com/17595a2f-f296-43f9-8ee0-29a94d25fdf7%2Funnamed%20(7).jpg?v=1611923965286"
            alt=""
          />
        </div>
        <div class="flex p-10">
          <div class="max-w-lg mt-auto mb-auto">
            <p class="mb-5 font-semibold text-gray-500">
              DermaPlex Professional Silk Masque
            </p>

            <h1 class="text-3xl text-gray-800 uppercase">
              AN ANTI-AGEING MASK THAT LEAVES A SOFT SILKY FEELING
            </h1>
            <p class="text-gray-600">
              The Silk Masque is an anti-ageing masque designed to give the skin
              an extra boost and velvety feeling after application. It combines
              a unique composition of the silk proteins, which tighten the skin,
              smooths and improves skin relief.
            </p>
            <button
              @click="$router.push('/shop')"
              class="px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
            >
              Go to Shop
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="w-3/4 mx-auto my-24 text-gray-800" />

    <div class="container">
      <div
        class="grid h-screen grid-cols-1 md:grid-cols-2"
        v-waypoint="{ active, callback }"
        id="bookingavailable"
        transtype="backInLeft-enter-active"
      >
        <div class="flex p-10">
          <div class="max-w-lg mt-auto mb-auto">
            <p class="mb-5 font-semibold text-gray-500">We'd love to see you</p>

            <h1 class="text-3xl text-gray-800 uppercase">Bookings Available</h1>
            <p class="text-gray-600">
              If you can not find your ideal appointment time and you would like
              to go on our cancellation list please call us on 071 7148454
              Northridge Mall & 083 896 2333 Westdene and we can let you know of
              appointments that become available.
            </p>
            <button
              v-on:click="$router.push('/bookings')"
              class="px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
            >
              Make Booking
            </button>
          </div>
        </div>
        <div class="max-h-96 md:h-screen">
          <img
            class="object-cover object-top w-full h-full"
            src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FKAY-28.jpg?v=1612333772865"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr class="w-3/4 mx-auto my-24 text-gray-800" />

    <section
      v-waypoint="{ active, callback }"
      id="wholesection"
      transtype="backInDown-enter-active"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full py-5 lg:w-1/2 md:px-4 lg:px-6">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FKAY-159%20(3).png?v=1612758818615"
                  alt=""
                  class="object-cover w-full h-56"
                />
              </div>
              <div
                class="px-4 py-4 md:px-10"
                v-waypoint="{ active, callback }"
                id="franchiseOp"
                transtype="backInLeft-enter-active"
              >
                <h1 class="text-lg font-bold text-gray-800">
                  Franchise Opportunity
                </h1>
                <p class="py-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quas sapiente voluptate earum natus facilis dolor
                  deserunt dolorum tempora obcaecati consequatur rem, vel
                  distinctio perferendis tempore nemo sequi eos accusantium.
                </p>
                <div class="pt-4">
                  <button
                    @click="openmail"
                    class="w-full px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-5 lg:w-1/2 md:px-4 lg:px-6">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FKAY-4.jpg?v=1612333757848"
                  alt=""
                  class="w-full h-56 border-8 border-white hover:opacity-25"
                />
              </div>
              <div
                class="px-4 py-4 md:px-10"
                v-waypoint="{ active, callback }"
                id="priceList"
                transtype="backInRight-enter-active"
              >
                <h1 class="text-lg font-bold text-gray-800">Price List</h1>
                <p class="py-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quas sapiente voluptate earum natus facilis dolor
                  deserunt dolorum tempora obcaecati consequatur rem, vel
                  distinctio perferendis tempore nemo sequi eos accusantium.
                </p>
                <div class="pt-4">
                  <button
                    v-on:click="open"
                    class="w-full px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
                  >
                    Get Price List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="w-3/4 mx-auto my-24 text-gray-800" />

    <div class="container">
      <div class="grid grid-cols-1 md:h-screen md:grid-cols-2">
        <div class="max-h-80 md:h-screen">
          <img
            class="object-cover object-top w-full h-full animate-pulse"
            src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FKAY-112.jpg?v=1612333781535"
            alt=""
          />
        </div>
        <div class="flex p-10">
          <div
            class="md:max-w-lg md:mt-auto md:mb-auto"
            v-waypoint="{ active, callback }"
            id="aboutfounder"
            transtype="backInRight-enter-active"
          >
            <p class="relative mb-5 font-semibold text-gray-500">
              About the founder
            </p>

            <h1 class="text-3xl text-gray-800 uppercase">Kay</h1>
            <p class="text-gray-600">
              Kay Mophethe, founder of Kay Beauty and Nails, has been in the
              beauty and nail industry for twelve years. The spark that ignited
              this passion was her very first visit to a nail salon when her
              father took her to Dream Nails in 2006 to get ready for her matric
              farewell. This is where she experienced the care and creativity
              this industry had to offer. Kay proceeded to study at Dream Nails
              and Body in Johannesburg, after which she returned to Bloemfontein
              to start her career. Her journey started at Exclusive Image as a
              technician where she rented a space and established her network
              within four short years. The decision was then made to establish
              the Kay Beauty and Nails brand by setting up her salon at home
              where she still operates to this day.
            </p>
          </div>
        </div>
      </div>
    </div>
    <section>
      <hr class="w-3/4 mx-auto my-24 text-gray-800" />
      <div
        class="flex items-center justify-center w-full py-4 py-40 mt-2 text-center bg-pink-100"
      >
        <h2 class="max-w-2xl text-4xl leading-tight">
          “ Beauty begins the moment you decide to be yourself.” Coco Chanel.
        </h2>
      </div>
      <hr class="w-3/4 mx-auto mt-24 text-gray-800" />
    </section>
    <section
      v-waypoint="{ active, callback }"
      id="allthree"
      transtype="backInUp-enter-active"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div class="w-full py-5 lg:w-1/3 md:px-4 lg:px-6">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FScreenshot%202021-02-04%20at%2022.07.03.png?v=1612757827924"
                  alt=""
                  class="w-full h-56 border-8 border-white hover:opacity-25"
                />
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="text-lg font-bold text-gray-800">Franchise</h1>
                <p class="py-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi quas sapiente voluptate earum natus facilis dolor
                  deserunt dolorum tempora obcaecati consequatur rem, vel
                  distinctio perferendis tempore nemo sequi eos accusantium.
                </p>
                <div class="pt-4">
                  <button
                    @click="openmail"
                    class="w-full px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-5 lg:w-1/3 md:px-4 lg:px-6">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2Funnamed.jpg?v=1612333780155"
                  alt=""
                  class="w-full h-56 border-8 border-white hover:opacity-25"
                />
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="text-lg font-bold text-gray-800">Products</h1>
                <p class="py-4 text-gray-600">
                  The Silk Masque is an anti-ageing masque designed to give the
                  skin an extra boost and velvety feeling after application. It
                  combines a unique composition of the silk proteins, which
                  tighten the skin, smooths and improves skin relief.
                </p>
                <div class="pt-4">
                  <button
                    @click="$router.push('/shop')"
                    class="w-full px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
                  >
                    Go to Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-5 lg:w-1/3 md:px-4 lg:px-6">
            <div class="bg-white hover:shadow-xl">
              <div class="">
                <img
                  src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2Funnamed.png?v=1612757766384"
                  alt=""
                  class="w-full h-56 border-8 border-white hover:opacity-25"
                />
              </div>
              <div class="px-4 py-4 md:px-10">
                <h1 class="text-lg font-bold text-gray-800">Bookings</h1>
                <p class="py-4 text-gray-600">
                  If you can not find your ideal appointment time and you would
                  like to go on our cancellation list please call us on 071
                  7148454 Northridge Mall & 083 896 2333 Westdene and we can let
                  you know of appointments that become available.
                </p>
                <div class="pt-4">
                  <button
                    @click="$router.push('/bookings')"
                    class="w-full px-4 py-3 mx-auto mt-6 text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
                  >
                    Make Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="w-3/4 mx-auto mt-24 text-gray-800" />

    <div class="w-full">
      <div class="text-center">
        <h1
          class="w-full my-3 text-base font-normal leading-loose uppercase text-grey-400"
        >
          Sign up to news from Kay
        </h1>
        <div class="w-full text-center">
          <form action="#">
            <div class="flex items-center max-w-sm p-1 pr-0 mx-auto">
              <input
                type="email"
                placeholder="jenny.rosen@example.com"
                class="flex-1 p-3 mr-2 rounded shadow appearance-none text-grey-dark focus:outline-none"
              />
              <button
                type="submit"
                class="p-3 px-4 py-3 mx-auto text-black bg-transparent border rounded-md hover:bg-black hover:text-white"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <hr class="w-3/4 mx-auto mt-24 text-gray-800" />

    <footer class="px-6 py-12 text-gray-800 bg-gray-50 lg:px-8">
      <div class="flex justify-between max-w-screen-xl mx-auto mb-6 lg:mb-8">
        <img
          class="h-48"
          src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FScreenshot%202020-12-31%20at%2012.36.17.png?v=1612327482545"
          alt="UptimeMate logo"
        />
        <a href="#" class="flex items-center text-pink-200 hover:text-gray-600">
          <span>Return to top</span>
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7l4-4m0 0l4 4m-4-4v18"
            ></path>
          </svg>
        </a>
      </div>
      <div
        class="max-w-screen-xl pt-8 mx-auto space-y-10 border-t-2 border-gray-200"
      >
        <div class="space-y-2 md:grid md:grid-cols-5 md:space-y-0">
          <div
            class="py-1 md:col-span-1 md:pr-4 md:border-r-2 md:border-gray-200"
          >
            <h5 class="text-xl font-semibold leading-none text-gray-700">
              Company
            </h5>
          </div>
          <nav class="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul
              class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-12"
            >
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                  >Franchise</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="space-y-2 md:grid md:grid-cols-5 md:space-y-0">
          <div
            class="py-1 md:col-span-1 md:pr-4 md:border-r-2 md:border-gray-200"
          >
            <h5 class="text-xl font-semibold leading-none text-gray-700">
              About
            </h5>
          </div>
          <nav class="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul
              class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-12"
            >
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                  >Kay</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                  >Team</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                  >Products</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="space-y-2 md:grid md:grid-cols-5 md:space-y-0">
          <div
            class="py-1 md:col-span-1 md:pr-4 md:border-r-2 md:border-gray-200"
          >
            <h5 class="text-xl font-semibold leading-none text-gray-700">
              Follow us
            </h5>
          </div>
          <nav class="col-span-4 col-start-2 md:pl-12 lg:pl-24">
            <ul
              class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 lg:space-x-12"
            >
              <li>
                <a
                  href="#"
                  class="flex space-x-2 text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                  <span> Twitter </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex space-x-2 text-base font-normal text-pink-200 no-underline hover:text-pink-400"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span> Instagram </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex space-x-2 text-base font-normal text-pink-200 hover:text-pink-400"
                >
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span> Facebook </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        class="max-w-screen-xl pt-8 mx-auto mt-8 space-y-4 border-t-2 border-gray-200 lg:mt-12"
      >
        <p class="text-sm text-center md:text-left">
          &copy;2020 Company. All rights reserved. | All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      view: {
        atTopOfPage: true,
      },
      name: '',
      email: '',
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1], // [0.25, 0.75] if you want a 25% offset!
      }, // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    }
  },

  methods: {
    open() {
      let url =
        'https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FKay%20Pricelist%20(1).pdf?v=1612334187356'
      window.open(url, '_blank')
    },
    openmail() {
      let emailTo = 'kay@kaybfn.co.za'
      let emailCC = 'info@kaybfn.co.za'
      let emailSub = 'Franchise interest'
      let emailBody = ''
      window.open(
        'mailto:' +
          emailTo +
          '?cc=' +
          emailCC +
          '&subject=' +
          emailSub +
          '&body=' +
          emailBody
      )
    },
    callback: function (obj) {
      let going = obj.going
      let direction = obj.direction
      let elm = document.getElementById(obj.el.id)

      let trans_type = elm.getAttribute('transtype')

      if (going === this.$waypointMap.GOING_IN) {
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        elm.classList.add(trans_type)

        elm.classList.remove('invisible')
      }
    },
    onWaypoint({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        // console.log('waypoint going in!')
      }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        // console.log('waypoint going top!')
      }
    },
  },
}
</script>

<style></style>
