<template>
  <div>
    <div class="grid grid-cols-3 gap-4 auto-x">
      <div class="flex items-center px-8 py-8">
        <div class="flex items-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <p class="ml-1">012 321 3124</p>
        </div>

        <div class="flex items-center mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <p class="ml-1">kay@bfn.co.za</p>
        </div>
      </div>
      <div class="flex items-center">
        <img
          class="h-24 auto-x"
          src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FScreenshot%202020-12-31%20at%2012.36.17.png?v=1612327482545"
        />
      </div>
      <div>
        <div class="flex items-center justify-end px-8 py-8">
          <div class="flex items-center justify-end mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p class="ml-1">kay@bfn.co.za</p>
          </div>
        </div>
      </div>
    </div>
    <nav class="sticky top-0 w-full bg-white shadow" id="nav-hor">
      <div
        class="container flex items-center justify-between h-16 px-6 mx-auto lg:items-stretch"
      >
        <div class="flex items-center">
          <div class="flex items-center mr-10">
            <img
              class="h-12 auto-x"
              src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FScreenshot%202020-12-31%20at%2012.36.17.png?v=1612327482545"
            />
            <h3
              class="hidden ml-3 text-base font-bold leading-tight tracking-normal text-gray-800 lg:block"
            >
              KAY
            </h3>
          </div>
          <ul class="items-center hidden h-full xl:flex">
            <li
              class="flex items-center h-full text-sm tracking-normal text-pink-400 cursor-pointer"
              @click="$router.push('/')"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-grid"
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
                  <rect x="4" y="4" width="6" height="6" rx="1" />
                  <rect x="14" y="4" width="6" height="6" rx="1" />
                  <rect x="4" y="14" width="6" height="6" rx="1" />
                  <rect x="14" y="14" width="6" height="6" rx="1" />
                </svg>
              </span>
              Home
            </li>
            <li
              @click="$router.push('/shop')"
              class="relative flex items-center h-full mx-10 text-sm tracking-normal text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-pink-400"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-puzzle"
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
                    d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                  />
                </svg>
              </span>
              Products
            </li>
            <li
              @click="$router.push('/bookings')"
              class="flex items-center h-full mr-10 text-sm tracking-normal text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-pink-400"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-compass"
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
                  <polyline points="8 16 10 10 16 8 14 14 8 16" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
              Bookings
            </li>
            <li
              @click="openmail"
              class="relative flex items-center h-full text-sm tracking-normal text-gray-800 transition duration-150 ease-in-out cursor-pointer hover:text-pink-400"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-code"
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
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </span>
              Franchises
            </li>
          </ul>
        </div>
        <div class="items-center justify-end hidden h-full xl:flex">
          <div class="flex h-full">
            <div
              class="flex items-center justify-center w-20 h-full text-gray-800 border-l border-r border-gray-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-messages"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"
                />
                <path
                  d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"
                />
              </svg>
            </div>
            <div
              class="flex items-center justify-center w-20 h-full text-gray-800 border-r border-gray-300 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-bell"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </div>
            <div
              class="relative flex items-center pl-8 cursor-pointer"
              v-on:click="dropdownHandler($event)"
            >
              <ul
                class="absolute top-0 left-0 hidden w-40 p-2 mt-16 bg-white border-r rounded shadow"
              >
                <li
                  class="py-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-pink-400 focus:text-pink-400 focus:outline-none"
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
                  class="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-pink-400 focus:text-pink-400 focus:outline-none"
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
                    <path
                      d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"
                    />
                  </svg>
                  <span class="ml-2">Help Center</span>
                </li>
                <li
                  class="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-pink-400 focus:text-pink-400 focus:outline-none"
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
              <img
                class="object-cover w-10 h-10 rounded"
                src="https://cdn.glitch.com/27b1bdd9-fb15-4dfc-8ea1-f35c87391df8%2FScreenshot%202020-12-31%20at%2012.36.17.png?v=1612327482545"
                alt="logo"
              />
              <p class="ml-2 text-sm text-gray-800"></p>
            </div>
          </div>
        </div>
        <div class="flex items-center visible xl:hidden">
          <ul
            class="absolute top-0 left-0 right-0 hidden p-2 mt-16 bg-white border-r rounded shadow md:mt-16"
          >
            <li
              class="flex py-2 mt-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer xl:hidden hover:text-pink-400 focus:text-pink-400 focus:outline-none"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-grid"
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
                  <rect x="4" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="4" width="6" height="6" rx="1"></rect>
                  <rect x="4" y="14" width="6" height="6" rx="1"></rect>
                  <rect x="14" y="14" width="6" height="6" rx="1"></rect>
                </svg>
                <span class="ml-2 font-bold">Dashboard</span>
              </div>
            </li>
            <li
              class="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer xl:hidden hover:text-pink-400 focus:text-pink-400 focus:outline-none"
              v-on:click="dropdownHandler($event)"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-puzzle"
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
                  <path
                    d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                  ></path>
                </svg>
                <span class="ml-2 font-bold">Products</span>
              </div>
              <ul class="hidden mt-1 ml-6">
                <li
                  class="px-3 py-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Landing Pages
                </li>
                <li
                  class="px-3 py-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Templates
                </li>
                <li
                  class="px-3 pt-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Components
                </li>
              </ul>
            </li>
            <li
              class="flex items-center py-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer xl:hidden hover:text-pink-400 focus:text-pink-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-compass"
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
                <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                <circle cx="12" cy="12" r="9"></circle>
              </svg>
              <span class="ml-2 font-bold">Performance</span>
            </li>
            <li
              class="flex flex-col justify-center pt-2 pb-4 text-sm leading-3 tracking-normal text-gray-800 border-b border-gray-300 cursor-pointer xl:hidden hover:text-pink-400 focus:text-pink-400 focus:outline-none"
              v-on:click="dropdownHandler($event)"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-code"
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
                  <polyline points="7 8 3 12 7 16"></polyline>
                  <polyline points="17 8 21 12 17 16"></polyline>
                  <line x1="14" y1="4" x2="10" y2="20"></line>
                </svg>
                <span class="ml-2 font-bold">Deliverables</span>
              </div>
              <ul class="hidden mt-1 ml-6">
                <li
                  class="px-3 py-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Landing Pages
                </li>
                <li
                  class="px-3 py-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Templates
                </li>
                <li
                  class="px-3 pt-2 text-xs font-normal leading-3 tracking-normal text-gray-800 cursor-pointer hover:bg-pink-700 hover:text-white"
                >
                  Components
                </li>
              </ul>
            </li>
            <li
              class="flex items-center py-2 mt-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-pink-400 focus:text-pink-400 focus:outline-none"
            >
              <div class="flex items-center">
                <div
                  class="flex w-12 text-sm transition duration-150 ease-in-out border-2 border-transparent rounded cursor-pointer focus:outline-none focus:border-white"
                >
                  <!-- <img
                    class="object-cover w-10 h-10 rounded"
                    :src="profilePhoto"
                    alt="logo"
                  /> -->
                </div>
                <p class="ml-2 text-sm cursor-pointer">Jane Doe</p>
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
              class="py-2 text-sm leading-3 tracking-normal text-gray-800 cursor-pointer hover:text-pink-400 focus:text-pink-400 focus:outline-none"
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
                <span class="ml-2">Profile</span>
              </div>
            </li>
          </ul>
          <svg
            v-on:click="MenuHandler($event, true)"
            aria-haspopup="true"
            aria-label="Main Menu"
            xmlns="http://www.w3.org/2000/svg"
            class="show-m-menu icon icon-tabler icon-tabler-menu"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
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
            v-on:click="MenuHandler($event, false)"
          >
            <svg
              aria-label="Close"
              xmlns="http://www.w3.org/2000/svg"
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
