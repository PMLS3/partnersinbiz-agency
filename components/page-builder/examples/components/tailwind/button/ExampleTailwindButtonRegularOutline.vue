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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-gray"
          @click="addComponent('outline-regular-text-gray')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-red"
          @click="addComponent('outline-regular-text-red')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-orange"
          @click="addComponent('outline-regular-text-orange')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-yellow"
          @click="addComponent('outline-regular-text-yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-green"
          @click="addComponent('outline-regular-text-green')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-teal"
          @click="addComponent('outline-regular-text-teal')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-blue"
          @click="addComponent('outline-regular-text-blue')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-indigo"
          @click="addComponent('outline-regular-text-indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-purple"
          @click="addComponent('outline-regular-text-purple')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-pink"
          @click="addComponent('outline-regular-text-pink')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-gray"
          @click="addComponent('outline-regular-text-icon-gary')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-red"
          @click="addComponent('outline-regular-text-icon-red')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-orange"
          @click="addComponent('outline-regular-text-icon-orange')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-yellow"
          @click="addComponent('outline-regular-text-icon-yellow')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-green"
          @click="addComponent('outline-regular-text-icon-green')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-teal"
          @click="addComponent('outline-regular-text-icon-teal')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-blue"
          @click="addComponent('outline-regular-text-icon-blue')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-indigo"
          @click="addComponent('outline-regular-text-icon-indigo')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-purple"
          @click="addComponent('outline-regular-text-icon-purple')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-pink"
          @click="addComponent('outline-regular-text-icon-pink')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-gray"
          @click="addComponent('outline-regular-icon-gray')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-red"
          @click="addComponent('outline-regular-icon-red')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-orange"
          @click="addComponent('outline-regular-icon-orange')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-yellow"
          @click="addComponent('outline-regular-icon-yellow')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-green"
          @click="addComponent('outline-regular-icon-green')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-teal"
          @click="addComponent('outline-regular-icon-teal')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-blue"
          @click="addComponent('outline-regular-icon-blue')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-indigo"
          @click="addComponent('outline-regular-icon-indigo')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-purple"
          @click="addComponent('outline-regular-icon-purple')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-pink"
          @click="addComponent('outline-regular-icon-pink')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-gray"
          @click="addComponent('outline-regular-text-rounded-gray')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-red"
          @click="addComponent('outline-regular-text-rounded-red')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-orange"
          @click="addComponent('outline-regular-text-rounded-orange')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-yellow"
          @click="addComponent('outline-regular-text-rounded-yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-green"
          @click="addComponent('outline-regular-text-rounded-green')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-teal"
          @click="addComponent('outline-regular-text-rounded-teal')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-blue"
          @click="addComponent('outline-regular-text-rounded-blue')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-indigo"
          @click="addComponent('outline-regular-text-rounded-indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-purple"
          @click="addComponent('outline-regular-text-rounded-purple')"
        >
          Regular
        </button>
        <button
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-rounded-pink"
          @click="addComponent('outline-regular-text-rounded-pink')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-gray"
          @click="addComponent('outline-regular-text-icon-rounded-gray')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-red"
          @click="addComponent('outline-regular-text-icon-rounded-red')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-orange"
          @click="addComponent('outline-regular-text-icon-rounded-orange')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-yellow"
          @click="addComponent('outline-regular-text-icon-rounded-yellow')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-green"
          @click="addComponent('outline-regular-text-icon-rounded-green')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-teal"
          @click="addComponent('outline-regular-text-icon-rounded-teal')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-blue"
          @click="addComponent('outline-regular-text-icon-rounded-blue')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-indigo"
          @click="addComponent('outline-regular-text-icon-rounded-indigo')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-purple"
          @click="addComponent('outline-regular-text-icon-rounded-purple')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-text-icon-rounded-pink"
          @click="addComponent('outline-regular-text-icon-rounded-pink')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-gray-500 text-gray-500 rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-gray"
          @click="addComponent('outline-regular-text-icon-rounded-gray')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-red-500 text-red-500 rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-red"
          @click="addComponent('outline-regular-text-icon-rounded-red')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-orange-500 text-orange-500 rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-orange"
          @click="addComponent('outline-regular-text-icon-rounded-orange')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-yellow-500 text-yellow-500 rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-yellow"
          @click="addComponent('outline-regular-text-icon-rounded-yellow')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-green-500 text-green-500 rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-green"
          @click="addComponent('outline-regular-text-icon-rounded-green')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-teal-500 text-teal-500 rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-teal"
          @click="addComponent('outline-regular-text-icon-rounded-teal')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-blue-500 text-blue-500 rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-blue"
          @click="addComponent('outline-regular-text-icon-rounded-blue')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-indigo-500 text-indigo-500 rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-indigo"
          @click="addComponent('outline-regular-text-icon-rounded-indigo')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-purple-500 text-purple-500 rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-purple"
          @click="addComponent('outline-regular-text-icon-rounded-purple')"
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
          class="px-6 bg-opacity-0 border border-solid py-3 mb-1 mr-1 text-sm font-bold uppercase border-pink-500 text-pink-500 rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-regular-icon-rounded-pink"
          @click="addComponent('outline-regular-text-icon-rounded-pink')"
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
  name: 'ExampleTailwindButtonRegularOutline',
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
