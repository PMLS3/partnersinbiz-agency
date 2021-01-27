<template>
  <div>
    <div class="relative">
      <!-- Background image starts -->
      <img
        class="absolute inset-0 z-0 object-cover w-full h-full"
        :src="bgImage"
        alt="bg"
      />
      <!-- Background image ends -->
      <!-- Navigation starts -->
      <nav class="relative z-20 w-full mx-auto shadow">
        <div
          class="container flex items-center justify-between h-16 px-6 mx-auto"
        >
          <div class="flex items-center">
            <div class="relative flex justify-end p-3 text-white rounded-full">
              <input
                type="text"
                class="absolute left-0 w-0 ml-10 text-xs transition duration-150 ease-in-out bg-transparent focus:outline-none"
                placeholder="Type something..."
              />
              <svg
                @click="searchHandler($event)"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <circle cx="10" cy="10" r="7"></circle>
                <line x1="21" y1="21" x2="15" y2="15"></line>
              </svg>
            </div>
          </div>
          <ul class="flex items-start justify-center h-full">
            <li
              class="items-center hidden py-6 pb-4 text-sm font-bold tracking-normal text-white border-b border-white cursor-pointer xl:flex"
            >
              <a class="">Dashboard</a>
            </li>
            <li
              class="relative items-center hidden py-6 ml-0 text-sm font-bold tracking-normal text-gray-300 cursor-pointer hover:text-white xl:flex xl:ml-10"
            >
              Products
            </li>
            <li class="flex items-center h-full mx-0 cursor-pointer xl:mx-12">
              <svg
                aria-label="Home"
                id="logo"
                enable-background="new 0 0 300 300"
                height="44"
                viewBox="0 0 300 300"
                width="43"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    fill="#fff"
                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                  />
                </g>
              </svg>
            </li>
            <li
              class="items-center hidden py-6 mr-10 text-sm font-bold tracking-normal text-gray-300 cursor-pointer hover:text-white xl:flex"
            >
              Performance
            </li>
            <li
              class="items-center hidden py-6 text-sm font-bold tracking-normal text-gray-300 cursor-pointer hover:text-white xl:flex"
            >
              Deliverables
            </li>
          </ul>
          <div
            aria-haspopup="true"
            class="relative items-center justify-end hidden h-full cursor-pointer xl:flex"
            @click="dropdownHandler($event)"
          >
            <ul
              class="absolute right-0 z-40 hidden w-40 p-2 mt-64 bg-white border-r rounded shadow"
            >
              <li
                class="py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="ml-2">My Profile</span>
                </div>
              </li>
              <li
                class="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-help"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="17" x2="12" y2="17.01" />
                  <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                </svg>
                <span class="ml-2">Help Center</span>
              </li>
              <li
                class="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-settings"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <span class="ml-2">Account Settings</span>
              </li>
            </ul>
            <div class="rounded">
              <img
                class="object-cover w-10 h-10 rounded"
                :src="profilePhoto"
                alt="logo"
              />
            </div>
            <div class="ml-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
          <div class="visible cursor-pointer xl:hidden">
            <ul
              class="absolute top-0 left-0 right-0 hidden p-2 mt-16 bg-white border-r rounded shadow md:mt-16"
            >
              <li
                class="flex py-3 mt-2 text-base leading-3 tracking-normal text-gray-600 cursor-pointer xl:hidden hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold leading-6">Dashboard</span>
                </div>
              </li>
              <li
                class="flex flex-col justify-center py-3 text-base leading-3 tracking-normal text-gray-600 cursor-pointer xl:hidden hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <span class="ml-2 font-bold leading-6">Products</span>
                </div>
              </li>
              <li
                class="flex items-center py-3 text-base leading-3 tracking-normal text-gray-600 cursor-pointer xl:hidden hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <span class="ml-2 font-bold leading-6">Performance</span>
              </li>
              <li
                class="flex items-center py-3 mb-2 text-base leading-3 tracking-normal text-gray-600 cursor-pointer xl:hidden hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <span class="ml-2 font-bold leading-6">Deliverables</span>
              </li>
              <li>
                <hr class="w-full border-b border-gray-300" />
              </li>
              <li
                class="flex items-center py-2 mt-2 ml-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <div
                    class="flex w-12 text-sm transition duration-150 ease-in-out border-2 border-transparent rounded cursor-pointer focus:outline-none focus:border-white"
                  >
                    <img
                      class="object-cover w-10 h-10 rounded"
                      :src="profilePhoto"
                      alt="logo"
                    />
                  </div>
                  <p class="ml-1 text-base leading-6 cursor-pointer">
                    Jane Doe
                  </p>
                  <div class="relative text-white sm:ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="cursor-pointer icon icon-tabler icon-tabler-chevron-down"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </li>
              <li
                class="py-2 ml-2 text-base leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
              >
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <span class="ml-2 leading-6">Profile</span>
                </div>
              </li>
            </ul>
            <svg
              @click="MenuHandler($event, true)"
              aria-haspopup="true"
              aria-label="Main Menu"
              xmlns="http://www.w3.org/2000/svg"
              class="show-m-menu icon icon-tabler icon-tabler-menu"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <line x1="4" y1="8" x2="20" y2="8"></line>
              <line x1="4" y1="16" x2="20" y2="16"></line>
            </svg>
            <div
              class="hidden close-m-menu"
              @click="MenuHandler($event, false)"
            >
              <svg
                aria-label="Close"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <!-- Navigation ends -->
      <!-- Page title starts -->
      <div class="relative z-10 pt-8 pb-16">
        <div
          class="container flex flex-col items-start justify-between px-6 mx-auto lg:flex-row lg:items-center"
        >
          <div>
            <p class="flex items-center text-xs text-gray-300">
              <span class="cursor-pointer">Portal</span>
              <span class="mx-2">&gt;</span>
              <span class="cursor-pointer">Dashboard</span>
              <span class="mx-2">&gt;</span>
              <span class="cursor-pointer">KPIs</span>
            </p>
            <h4 class="text-2xl font-bold leading-tight text-white">
              Dashboard
            </h4>
          </div>
          <div class="mt-6 lg:mt-0">
            <button
              class="px-5 py-2 mr-3 text-sm text-white transition duration-150 ease-in-out bg-transparent border border-white rounded focus:outline-none hover:bg-gray-700"
            >
              Back
            </button>
            <button
              class="px-8 py-2 text-sm text-indigo-700 transition duration-150 ease-in-out bg-white border rounded focus:outline-none hover:bg-gray-200"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <!-- Page title ends -->
    </div>
    <div class="w-full pb-8 bg-gray-200">
      <div class="container px-6 mx-auto">
        <div class="relative w-full">
          <!-- Remove class [ h-64 ] when adding a card block -->
          <div class="h-64 mx-auto -mt-8">
            <div class="w-full h-full bg-white rounded shadow">
              <!-- Place your content here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BgImageInHeader',
}
</script>

<style></style>
