<template>
  <div class="insta-clone">
    <nav class="px-48 bg-white border-b border-gray-400 shadow">
      <div class="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <div class="flex items-center flex-shrink-0">
              <img
                class="block w-auto h-8 lg:hidden"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Workflow logo"
              />
              <img
                class="hidden w-auto h-8 lg:block"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt="Workflow logo"
              />
            </div>
          </div>
          <div class="flex items-center justify-center flex-1 px-2 lg:ml-12">
            <div class="w-full max-w-lg lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  class="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-gray-400 rounded-md focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <!-- Icon when menu is closed. -->
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <!-- icons-->
          <div class="lg:ml-4 lg:flex lg:items-center">
            <button
              class="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </button>

            <button
              class="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                />
              </svg>
            </button>

            <button
              class="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>

            <button
              class="flex-shrink-0 p-1 text-gray-700 transition duration-150 ease-in-out border-transparent rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="relative flex-shrink-0 ml-4">
              <div>
                <button
                  class="flex transition duration-150 ease-in-out border-gray-700 rounded-full"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    src="https://scontent-muc2-1.cdninstagram.com/v/t51.2885-19/s150x150/58468664_291773768419326_7460980271920185344_n.jpg?_nc_ht=scontent-muc2-1.cdninstagram.com&amp;_nc_ohc=16Or2MWYINEAX9vLBW0&amp;oh=ada3818c35cb64180cf431d820d9dabe&amp;oe=5EF26035"
                    alt
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!--body start-->
    <!--profile data-->
    <div class="h-auto px-48 bg-gray-100">
      <div class="flex flex-wrap md:flex-row-reverse">
        <div class="w-full p-4 text-center md:w-3/4">
          <div class="pt-3 pl-4 text-left">
            <span class="mr-2 text-2xl text-gray-700">{{ item.username }}</span>
            <span class="mr-2 text-base font-semibold text-gray-700">
              <button
                class="px-4 py-2 font-semibold text-gray-700 bg-transparent border border-gray-600 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
              >
                Edit Profile
              </button>
            </span>
            <span class="text-base font-semibold text-gray-700">
              <button
                class="p-1 text-gray-700 border-transparent rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
                aria-label="Notifications"
              >
                <svg
                  class="w-8 h-8"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </span>
          </div>

          <div class="pt-3 pl-4 text-left">
            <span class="mr-2 text-base font-semibold text-gray-700">
              <b>220</b> posts
            </span>
            <span class="mr-2 text-base font-semibold text-gray-700">
              <b>114</b> followers
            </span>
            <span class="text-base font-semibold text-gray-700">
              <b>200</b> following
            </span>
          </div>

          <div class="pt-3 pl-4 text-left">
            <span class="mr-2 text-lg font-bold text-gray-700"
              >{{ item.first_name }} {{ item.last_name }}</span
            >
          </div>

          <div class="pt-3 pl-4 text-left">
            <p class="mr-2 text-base font-medium text-blue-700">
              {{ item.biography }}
            </p>
            <p class="mr-2 text-base font-medium text-gray-700">
              {{ item.external_url }}
            </p>
          </div>
        </div>

        <div class="w-full p-4 text-center md:w-1/4">
          <div class="relative w-full mt-8 text-center md:w-3/4">
            <button
              class="flex rounded-full"
              id="user-menu"
              aria-label="User menu"
              aria-haspopup="true"
            >
              <img
                class="w-40 h-40 rounded-full"
                src="https://scontent-muc2-1.cdninstagram.com/v/t51.2885-19/s150x150/58468664_291773768419326_7460980271920185344_n.jpg?_nc_ht=scontent-muc2-1.cdninstagram.com&amp;_nc_ohc=16Or2MWYINEAX9vLBW0&amp;oh=ada3818c35cb64180cf431d820d9dabe&amp;oe=5EF26035"
                alt
              />
            </button>
          </div>
        </div>
      </div>

      <!--status show icon-->

      <div class="inline-flex mt-16 ml-36">
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <div
            class="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow-xl"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1502164980785-f8aa41d53611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <h1 class="pt-16 text-base font-semibold text-gray-900">Fun</h1>
        </div>

        <div class="flex-1 px-4 py-2 m-2 text-center">
          <div
            class="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow-xl"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            />
          </div>
          <h1 class="pt-16 text-base font-semibold text-gray-900">Travel</h1>
        </div>

        <div class="flex-1 px-4 py-2 m-2 text-center">
          <div
            class="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow-xl"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
            />
          </div>
          <h1 class="pt-16 text-base font-semibold text-gray-900">Food</h1>
        </div>

        <div class="flex-1 px-4 py-2 m-2 text-center">
          <div
            class="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow-xl"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
            />
          </div>
          <h1 class="pt-16 text-base font-semibold text-gray-900">Sketch</h1>
        </div>

        <div class="flex-1 px-4 py-2 m-2 text-center">
          <div
            class="relative w-24 h-24 mx-auto -my-12 overflow-hidden border-4 border-white rounded-full shadow-xl"
          >
            <img
              class="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <h1 class="pt-16 text-base font-semibold text-gray-900">My Work</h1>
        </div>
      </div>

      <hr class="mt-6 border-gray-500" />
      <hr class="w-20 ml-64 border-gray-500 border-t-1" />

      <!--post icon and title-->
      <div class="flex flex-row justify-center mt-4 mr-16">
        <div class="flex py-2 pr-5 m-2 text-center text-gray-700">
          <div class="inline-flex">
            <button
              class="text-gray-800 border-transparent rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div class="inline-flex mt-1 ml-2">
            <h3 class="mr-2 text-sm font-bold text-gray-800">POSTS</h3>
          </div>
        </div>

        <div class="flex py-2 pr-5 m-2 text-center text-gray-700">
          <div class="inline-flex">
            <button
              class="text-gray-600 border-transparent rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div class="inline-flex mt-1 ml-2">
            <h3 class="mr-2 text-sm font-medium text-gray-700">IGTV</h3>
          </div>
        </div>

        <div class="flex py-2 pr-5 m-2 text-center text-gray-700">
          <div class="inline-flex">
            <button
              class="text-gray-600 border-transparent rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
          <div class="inline-flex mt-1 ml-2">
            <h3 class="mr-2 text-sm font-medium text-gray-700">SAVED</h3>
          </div>
        </div>

        <div class="flex py-2 pr-5 m-2 text-center text-gray-700">
          <div class="inline-flex">
            <button
              class="text-gray-600 border-transparent rounded-full hover:text-blue-600 focus:outline-none focus:text-gray-600"
              aria-label="Notifications"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>
          </div>
          <div class="inline-flex mt-1 ml-2">
            <h3 class="mr-2 text-sm font-medium text-gray-700">TAGGED</h3>
          </div>
        </div>
      </div>

      <!--post images-->

      <div class="flex pt-4">
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>

      <div class="flex pt-4">
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>

      <div class="flex pt-4">
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div class="flex-1 px-4 py-2 m-2 text-center">
          <img
            class="w-full"
            src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
}
</script>
