<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <vx-card title="Text Only">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-gray"
          @click="addComponent('text-gray')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-red"
          @click="addComponent('text-red')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-orange"
          @click="addComponent('text-orange')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-yellow"
          @click="addComponent('text-yellow')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-green"
          @click="addComponent('text-green')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-teal"
          @click="addComponent('text-teal')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-blue"
          @click="addComponent('text-blue')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-indigo"
          @click="addComponent('text-indigo')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-purple"
          @click="addComponent('text-purple')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-pink"
          @click="addComponent('text-pink')"
        >
          Small
        </button>
      </div>
    </vx-card>

    <vx-card title="Icon and Text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-gray"
          @click="addComponent('text-icon-gary')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-red"
          @click="addComponent('text-icon-red')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-orange"
          @click="addComponent('text-icon-orange')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-yellow"
          @click="addComponent('text-icon-yellow')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-green"
          @click="addComponent('text-icon-green')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-teal"
          @click="addComponent('text-icon-teal')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-blue"
          @click="addComponent('text-icon-blue')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-indigo"
          @click="addComponent('text-icon-indigo')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-purple"
          @click="addComponent('text-icon-purple')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-pink"
          @click="addComponent('text-icon-pink')"
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
          Small
        </button>
      </div>
    </vx-card>

    <vx-card title="Icon Only">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-gray"
          @click="addComponent('icon-gray')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-red"
          @click="addComponent('icon-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-orange"
          @click="addComponent('icon-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-yellow"
          @click="addComponent('icon-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-green"
          @click="addComponent('icon-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-teal"
          @click="addComponent('icon-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-blue"
          @click="addComponent('icon-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-indigo"
          @click="addComponent('icon-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-purple"
          @click="addComponent('icon-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-pink"
          @click="addComponent('icon-pink')"
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

    <vx-card title="Rounded with Text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-gray"
          @click="addComponent('text-rounded-gray')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-red"
          @click="addComponent('text-rounded-red')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-orange"
          @click="addComponent('text-rounded-orange')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-yellow"
          @click="addComponent('text-rounded-yellow')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-green"
          @click="addComponent('text-rounded-green')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-teal"
          @click="addComponent('text-rounded-teal')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-blue"
          @click="addComponent('text-rounded-blue')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-indigo"
          @click="addComponent('text-rounded-indigo')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-purple"
          @click="addComponent('text-rounded-purple')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-rounded-pink"
          @click="addComponent('text-rounded-pink')"
        >
          Small
        </button>
      </div>
    </vx-card>

    <vx-card title="Rounded with icon and text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-gray"
          @click="addComponent('text-icon-rounded-gray')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-red"
          @click="addComponent('text-icon-rounded-red')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-orange"
          @click="addComponent('text-icon-rounded-orange')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-yellow"
          @click="addComponent('text-icon-rounded-yellow')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-green"
          @click="addComponent('text-icon-rounded-green')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-teal"
          @click="addComponent('text-icon-rounded-teal')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-blue"
          @click="addComponent('text-icon-rounded-blue')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-indigo"
          @click="addComponent('text-icon-rounded-indigo')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-purple"
          @click="addComponent('text-icon-rounded-purple')"
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
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="text-icon-rounded-pink"
          @click="addComponent('text-icon-rounded-pink')"
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
          Small
        </button>
      </div>
    </vx-card>

    <vx-card title="Round with Icons">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-gray-500 border-none rounded-full shadow outline-none active:bg-gray-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-gray"
          @click="addComponent('text-icon-rounded-gray')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-red-500 border-none rounded-full shadow outline-none active:bg-red-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-red"
          @click="addComponent('text-icon-rounded-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-orange-500 border-none rounded-full shadow outline-none active:bg-orange-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-orange"
          @click="addComponent('text-icon-rounded-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-yellow-500 border-none rounded-full shadow outline-none active:bg-yellow-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-yellow"
          @click="addComponent('text-icon-rounded-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-green-500 border-none rounded-full shadow outline-none active:bg-green-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-green"
          @click="addComponent('text-icon-rounded-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-teal-500 border-none rounded-full shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-teal"
          @click="addComponent('text-icon-rounded-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-blue-500 border-none rounded-full shadow outline-none active:bg-blue-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-blue"
          @click="addComponent('text-icon-rounded-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-indigo-500 border-none rounded-full shadow outline-none active:bg-indigo-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-indigo"
          @click="addComponent('text-icon-rounded-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-purple-500 border-none rounded-full shadow outline-none active:bg-purple-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-purple"
          @click="addComponent('text-icon-rounded-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase bg-pink-500 border-none rounded-full shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="icon-rounded-pink"
          @click="addComponent('text-icon-rounded-pink')"
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
  name: 'ExampleTailwindButtonSmallFilled',
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
