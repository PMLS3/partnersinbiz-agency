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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-gray"
          @click="addComponent('outline-text-gray')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-red"
          @click="addComponent('outline-text-red')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-orange"
          @click="addComponent('outline-text-orange')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-yellow"
          @click="addComponent('outline-text-yellow')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-green"
          @click="addComponent('outline-text-green')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-teal"
          @click="addComponent('outline-text-teal')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-blue"
          @click="addComponent('outline-text-blue')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-indigo"
          @click="addComponent('outline-text-indigo')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-purple"
          @click="addComponent('outline-text-purple')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-pink"
          @click="addComponent('outline-text-pink')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-gray"
          @click="addComponent('outline-text-icon-gary')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-red"
          @click="addComponent('outline-text-icon-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-orange"
          @click="addComponent('outline-text-icon-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-yellow"
          @click="addComponent('outline-text-icon-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-green"
          @click="addComponent('outline-text-icon-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-teal"
          @click="addComponent('outline-text-icon-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-blue"
          @click="addComponent('outline-text-icon-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-indigo"
          @click="addComponent('outline-text-icon-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-purple"
          @click="addComponent('outline-text-icon-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-pink"
          @click="addComponent('outline-text-icon-pink')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-gray"
          @click="addComponent('outline-icon-gray')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-red"
          @click="addComponent('outline-icon-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-orange"
          @click="addComponent('outline-icon-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-yellow"
          @click="addComponent('outline-icon-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-green"
          @click="addComponent('outline-icon-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-teal"
          @click="addComponent('outline-icon-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-blue"
          @click="addComponent('outline-icon-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-indigo"
          @click="addComponent('outline-icon-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-purple"
          @click="addComponent('outline-icon-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-pink"
          @click="addComponent('outline-icon-pink')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-gray"
          @click="addComponent('outline-text-rounded-gray')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-red"
          @click="addComponent('outline-text-rounded-red')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-orange"
          @click="addComponent('outline-text-rounded-orange')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-yellow"
          @click="addComponent('outline-text-rounded-yellow')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-green"
          @click="addComponent('outline-text-rounded-green')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-teal"
          @click="addComponent('outline-text-rounded-teal')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-blue"
          @click="addComponent('outline-text-rounded-blue')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-indigo"
          @click="addComponent('outline-text-rounded-indigo')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-purple"
          @click="addComponent('outline-text-rounded-purple')"
        >
          Small
        </button>
        <button
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-rounded-pink"
          @click="addComponent('outline-text-rounded-pink')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-gray"
          @click="addComponent('outline-text-icon-rounded-gray')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-red"
          @click="addComponent('outline-text-icon-rounded-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-orange"
          @click="addComponent('outline-text-icon-rounded-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-yellow"
          @click="addComponent('outline-text-icon-rounded-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-green"
          @click="addComponent('outline-text-icon-rounded-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-teal"
          @click="addComponent('outline-text-icon-rounded-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-blue"
          @click="addComponent('outline-text-icon-rounded-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-indigo"
          @click="addComponent('outline-text-icon-rounded-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-purple"
          @click="addComponent('outline-text-icon-rounded-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-text-icon-rounded-pink"
          @click="addComponent('outline-text-icon-rounded-pink')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-gray-500 text-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-gray"
          @click="addComponent('outline-text-icon-rounded-gray')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-red-500 text-red-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-red"
          @click="addComponent('outline-text-icon-rounded-red')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-orange-500 text-orange-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-orange"
          @click="addComponent('outline-text-icon-rounded-orange')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-yellow-500 text-yellow-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-yellow"
          @click="addComponent('outline-text-icon-rounded-yellow')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-green-500 text-green-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-green"
          @click="addComponent('outline-text-icon-rounded-green')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-teal-500 text-teal-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-teal"
          @click="addComponent('outline-text-icon-rounded-teal')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-blue-500 text-blue-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-blue"
          @click="addComponent('outline-text-icon-rounded-blue')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-indigo-500 text-indigo-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-indigo"
          @click="addComponent('outline-text-icon-rounded-indigo')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-purple-500 text-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-purple"
          @click="addComponent('outline-text-icon-rounded-purple')"
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
          class="px-4 py-2 mb-1 mr-1 text-xs font-bold uppercase border-pink-500 text-pink-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-icon-rounded-pink"
          @click="addComponent('outline-text-icon-rounded-pink')"
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
  name: 'ExampleTailwindButtonSmallOutline',
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
