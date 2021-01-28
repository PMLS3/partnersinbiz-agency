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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-gray"
          @click="addComponent('outline-large-text-gray')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-red"
          @click="addComponent('outline-large-text-red')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-orange"
          @click="addComponent('outline-large-text-orange')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-yellow"
          @click="addComponent('outline-large-text-yellow')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-green"
          @click="addComponent('outline-large-text-green')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-teal"
          @click="addComponent('outline-large-text-teal')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-blue"
          @click="addComponent('outline-large-text-blue')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-indigo"
          @click="addComponent('outline-large-text-indigo')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-purple"
          @click="addComponent('outline-large-text-purple')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-pink"
          @click="addComponent('outline-large-text-pink')"
        >
          Large
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-gray"
          @click="addComponent('outline-large-text-icon-gary')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-red"
          @click="addComponent('outline-large-text-icon-red')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-orange"
          @click="addComponent('outline-large-text-icon-orange')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-yellow"
          @click="addComponent('outline-large-text-icon-yellow')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-green"
          @click="addComponent('outline-large-text-icon-green')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-teal"
          @click="addComponent('outline-large-text-icon-teal')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-blue"
          @click="addComponent('outline-large-text-icon-blue')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-indigo"
          @click="addComponent('outline-large-text-icon-indigo')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-purple"
          @click="addComponent('outline-large-text-icon-purple')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-pink"
          @click="addComponent('outline-large-text-icon-pink')"
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
          Large
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-gray"
          @click="addComponent('outline-large-icon-gray')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-red"
          @click="addComponent('outline-large-icon-red')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-orange"
          @click="addComponent('outline-large-icon-orange')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-yellow"
          @click="addComponent('outline-large-icon-yellow')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-green"
          @click="addComponent('outline-large-icon-green')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-teal"
          @click="addComponent('outline-large-icon-teal')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-blue"
          @click="addComponent('outline-large-icon-blue')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-indigo"
          @click="addComponent('outline-large-icon-indigo')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-purple"
          @click="addComponent('outline-large-icon-purple')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-pink"
          @click="addComponent('outline-large-icon-pink')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-gray"
          @click="addComponent('outline-large-text-rounded-gray')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-red"
          @click="addComponent('outline-large-text-rounded-red')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-orange"
          @click="addComponent('outline-large-text-rounded-orange')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-yellow"
          @click="addComponent('outline-large-text-rounded-yellow')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-green"
          @click="addComponent('outline-large-text-rounded-green')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-teal"
          @click="addComponent('outline-large-text-rounded-teal')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-blue"
          @click="addComponent('outline-large-text-rounded-blue')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-indigo"
          @click="addComponent('outline-large-text-rounded-indigo')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-purple"
          @click="addComponent('outline-large-text-rounded-purple')"
        >
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-rounded-pink"
          @click="addComponent('outline-large-text-rounded-pink')"
        >
          Large
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-gray"
          @click="addComponent('outline-large-text-icon-rounded-gray')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-red"
          @click="addComponent('outline-large-text-icon-rounded-red')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-orange"
          @click="addComponent('outline-large-text-icon-rounded-orange')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-yellow"
          @click="addComponent('outline-large-text-icon-rounded-yellow')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-green"
          @click="addComponent('outline-large-text-icon-rounded-green')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-teal"
          @click="addComponent('outline-large-text-icon-rounded-teal')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-blue"
          @click="addComponent('outline-large-text-icon-rounded-blue')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-indigo"
          @click="addComponent('outline-large-text-icon-rounded-indigo')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-purple"
          @click="addComponent('outline-large-text-icon-rounded-purple')"
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
          Large
        </button>
        <button
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-text-icon-rounded-pink"
          @click="addComponent('outline-large-text-icon-rounded-pink')"
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
          Large
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-gray-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-gray-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-gray"
          @click="addComponent('outline-large-text-icon-rounded-gray')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-red-500 uppercase bg-opacity-0 border border-red-500 border-solid rounded-full shadow outline-none active:bg-red-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-red"
          @click="addComponent('outline-large-text-icon-rounded-red')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-orange-500 uppercase bg-opacity-0 border border-orange-500 border-solid rounded-full shadow outline-none active:bg-orange-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-orange"
          @click="addComponent('outline-large-text-icon-rounded-orange')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-yellow-500 uppercase bg-opacity-0 border border-yellow-500 border-solid rounded-full shadow outline-none active:bg-yellow-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-yellow"
          @click="addComponent('outline-large-text-icon-rounded-yellow')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-green-500 uppercase bg-opacity-0 border border-green-500 border-solid rounded-full shadow outline-none active:bg-green-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-green"
          @click="addComponent('outline-large-text-icon-rounded-green')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-teal-500 uppercase bg-opacity-0 border border-teal-500 border-solid rounded-full shadow outline-none active:bg-teal-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-teal"
          @click="addComponent('outline-large-text-icon-rounded-teal')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-blue-500 uppercase bg-opacity-0 border border-blue-500 border-solid rounded-full shadow outline-none active:bg-blue-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-blue"
          @click="addComponent('outline-large-text-icon-rounded-blue')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-indigo-500 uppercase bg-opacity-0 border border-indigo-500 border-solid rounded-full shadow outline-none active:bg-indigo-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-indigo"
          @click="addComponent('outline-large-text-icon-rounded-indigo')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold uppercase bg-purple-500 bg-opacity-0 border border-solid rounded-full shadow outline-none active:bg-purple-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-purple"
          @click="addComponent('outline-large-text-icon-rounded-purple')"
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
          class="px-8 py-3 mb-1 mr-1 text-base font-bold text-pink-500 uppercase bg-opacity-0 border border-pink-500 border-solid rounded-full shadow outline-none active:bg-pink-600 hover:bg-orange-500 hover: focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="outline-large-icon-rounded-pink"
          @click="addComponent('outline-large-text-icon-rounded-pink')"
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
  name: 'ExampleTailwindButtonLargeOutline',
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
