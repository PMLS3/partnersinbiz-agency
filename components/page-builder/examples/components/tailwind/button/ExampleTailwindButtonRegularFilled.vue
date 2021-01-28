<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <vx-card class="mt-8" title="Text Only">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-gray"
          @click="addComponent('regular-text-gray')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-red"
          @click="addComponent('regular-text-red')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-orange"
          @click="addComponent('regular-text-orange')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-yellow"
          @click="addComponent('regular-text-yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-green"
          @click="addComponent('regular-text-green')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-teal"
          @click="addComponent('regular-text-teal')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-blue"
          @click="addComponent('regular-text-blue')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-indigo"
          @click="addComponent('regular-text-indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-purple"
          @click="addComponent('regular-text-purple')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-pink"
          @click="addComponent('regular-text-pink')"
        >
          Regular
        </button>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Icon and Text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-gray"
          @click="addComponent('regular-text-icon-gary')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-red"
          @click="addComponent('regular-text-icon-red')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-orange"
          @click="addComponent('regular-text-icon-orange')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-yellow"
          @click="addComponent('regular-text-icon-yellow')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-green"
          @click="addComponent('regular-text-icon-green')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-teal"
          @click="addComponent('regular-text-icon-teal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-blue"
          @click="addComponent('regular-text-icon-blue')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-indigo"
          @click="addComponent('regular-text-icon-indigo')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-purple"
          @click="addComponent('regular-text-icon-purple')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-pink"
          @click="addComponent('regular-text-icon-pink')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Icon Only">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-gray"
          @click="addComponent('regular-icon-gray')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-red"
          @click="addComponent('regular-icon-red')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-orange"
          @click="addComponent('regular-icon-orange')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-yellow"
          @click="addComponent('regular-icon-yellow')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-green"
          @click="addComponent('regular-icon-green')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-teal"
          @click="addComponent('regular-icon-teal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-blue"
          @click="addComponent('regular-icon-blue')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-indigo"
          @click="addComponent('regular-icon-indigo')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-purple"
          @click="addComponent('regular-icon-purple')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-pink"
          @click="addComponent('regular-icon-pink')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Rounded with Text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-gray"
          @click="addComponent('regular-text-rounded-gray')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-red"
          @click="addComponent('regular-text-rounded-red')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-orange"
          @click="addComponent('regular-text-rounded-orange')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-yellow"
          @click="addComponent('regular-text-rounded-yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-green"
          @click="addComponent('regular-text-rounded-green')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-teal"
          @click="addComponent('regular-text-rounded-teal')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-blue"
          @click="addComponent('regular-text-rounded-blue')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-indigo"
          @click="addComponent('regular-text-rounded-indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-purple"
          @click="addComponent('regular-text-rounded-purple')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-rounded-pink"
          @click="addComponent('regular-text-rounded-pink')"
        >
          Regular
        </button>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Rounded with icon and text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-gray"
          @click="addComponent('regular-text-icon-rounded-gray')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-red"
          @click="addComponent('regular-text-icon-rounded-red')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-orange"
          @click="addComponent('regular-text-icon-rounded-orange')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-yellow"
          @click="addComponent('regular-text-icon-rounded-yellow')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-green"
          @click="addComponent('regular-text-icon-rounded-green')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-teal"
          @click="addComponent('regular-text-icon-rounded-teal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-blue"
          @click="addComponent('regular-text-icon-rounded-blue')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-indigo"
          @click="addComponent('regular-text-icon-rounded-indigo')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-purple"
          @click="addComponent('regular-text-icon-rounded-purple')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-text-icon-rounded-pink"
          @click="addComponent('regular-text-icon-rounded-pink')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          Regular
        </button>
      </div>
    </vx-card>

    <vx-card class="mt-8" title="Round with Icons">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-gray"
          @click="addComponent('regular-text-icon-rounded-gray')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-red"
          @click="addComponent('regular-text-icon-rounded-red')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-orange"
          @click="addComponent('regular-text-icon-rounded-orange')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-yellow"
          @click="addComponent('regular-text-icon-rounded-yellow')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-green"
          @click="addComponent('regular-text-icon-rounded-green')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-teal"
          @click="addComponent('regular-text-icon-rounded-teal')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-blue"
          @click="addComponent('regular-text-icon-rounded-blue')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-indigo"
          @click="addComponent('regular-text-icon-rounded-indigo')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-purple"
          @click="addComponent('regular-text-icon-rounded-purple')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="regular-icon-rounded-pink"
          @click="addComponent('regular-text-icon-rounded-pink')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="14px"
            height="14px"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        </button>
      </div>
    </vx-card>
  </div>
</template>
<script>
export default {
  name: 'ExampleTailwindButtonRegularFilled',
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
