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
          class="px-3 py-1 mb-1 mr-1 text-xs font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
        >
          With Text
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-gray"
          @click="addComponent('links-regular-text-gray')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-red"
          @click="addComponent('links-regular-text-red')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-orange"
          @click="addComponent('links-regular-text-orange')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-yellow"
          @click="addComponent('links-regular-text-yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-green"
          @click="addComponent('links-regular-text-green')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-teal"
          @click="addComponent('links-regular-text-teal')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-blue"
          @click="addComponent('links-regular-text-blue')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-indigo"
          @click="addComponent('links-regular-text-indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-purple"
          @click="addComponent('links-regular-text-purple')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-pink"
          @click="addComponent('links-regular-text-pink')"
        >
          Regular
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-gray"
          @click="addComponent('links-regular-text-icon-gary')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-red"
          @click="addComponent('links-regular-text-icon-red')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-orange"
          @click="addComponent('links-regular-text-icon-orange')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-yellow"
          @click="addComponent('links-regular-text-icon-yellow')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-green"
          @click="addComponent('links-regular-text-icon-green')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-teal"
          @click="addComponent('links-regular-text-icon-teal')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-blue"
          @click="addComponent('links-regular-text-icon-blue')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-indigo"
          @click="addComponent('links-regular-text-icon-indigo')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-purple"
          @click="addComponent('links-regular-text-icon-purple')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon-pink"
          @click="addComponent('links-regular-text-icon-pink')"
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

    <vx-card title="Icon Only">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-gray"
          @click="addComponent('links-regular-icon-gray')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-red"
          @click="addComponent('links-regular-icon-red')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-orange"
          @click="addComponent('links-regular-icon-orange')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-yellow"
          @click="addComponent('links-regular-icon-yellow')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-green"
          @click="addComponent('links-regular-icon-green')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-teal"
          @click="addComponent('links-regular-icon-teal')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-blue"
          @click="addComponent('links-regular-icon-blue')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-indigo"
          @click="addComponent('links-regular-icon-indigo')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-purple"
          @click="addComponent('links-regular-icon-purple')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon-pink"
          @click="addComponent('links-regular-icon-pink')"
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

    <vx-card title=" with Text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--gray"
          @click="addComponent('links-regular-text--gray')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--red"
          @click="addComponent('links-regular-text--red')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--orange"
          @click="addComponent('links-regular-text--orange')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--yellow"
          @click="addComponent('links-regular-text--yellow')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--green"
          @click="addComponent('links-regular-text--green')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--teal"
          @click="addComponent('links-regular-text--teal')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--blue"
          @click="addComponent('links-regular-text--blue')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--indigo"
          @click="addComponent('links-regular-text--indigo')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--purple"
          @click="addComponent('links-regular-text--purple')"
        >
          Regular
        </button>
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text--pink"
          @click="addComponent('links-regular-text--pink')"
        >
          Regular
        </button>
      </div>
    </vx-card>

    <vx-card title=" with icon and text">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--gray"
          @click="addComponent('links-regular-text-icon--gray')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--red"
          @click="addComponent('links-regular-text-icon--red')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--orange"
          @click="addComponent('links-regular-text-icon--orange')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--yellow"
          @click="addComponent('links-regular-text-icon--yellow')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--green"
          @click="addComponent('links-regular-text-icon--green')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--teal"
          @click="addComponent('links-regular-text-icon--teal')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--blue"
          @click="addComponent('links-regular-text-icon--blue')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--indigo"
          @click="addComponent('links-regular-text-icon--indigo')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--purple"
          @click="addComponent('links-regular-text-icon--purple')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-text-icon--pink"
          @click="addComponent('links-regular-text-icon--pink')"
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

    <vx-card title="Round with Icons">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <button
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-gray-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--gray"
          @click="addComponent('links-regular-text-icon--gray')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-red-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--red"
          @click="addComponent('links-regular-text-icon--red')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-orange-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--orange"
          @click="addComponent('links-regular-text-icon--orange')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-yellow-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--yellow"
          @click="addComponent('links-regular-text-icon--yellow')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-green-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--green"
          @click="addComponent('links-regular-text-icon--green')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-teal-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--teal"
          @click="addComponent('links-regular-text-icon--teal')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-blue-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--blue"
          @click="addComponent('links-regular-text-icon--blue')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-indigo-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--indigo"
          @click="addComponent('links-regular-text-icon--indigo')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-purple-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--purple"
          @click="addComponent('links-regular-text-icon--purple')"
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
          class="px-6 py-3 mb-1 mr-1 text-sm font-bold text-pink-500 uppercase bg-indigo-200 bg-opacity-0 border-none outline-none focus:outline-none"
          type="button"
          style="transition: all 0.15s ease"
          id="links-regular-icon--pink"
          @click="addComponent('links-regular-text-icon--pink')"
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
  name: 'ExampleTailwindButtonLinks',
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
