<template>
  <div
    class="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-8"
  >
    <h4 class="text-2xl font-bold leading-tight text-gray-800">Dashboard</h4>
    <div class="mt-6 md:mt-0">
      <button
        class="mr-3 bg-gray-200 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 px-5 py-2 text-sm"
      >
        Back
      </button>
      <button
        class="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
      >
        Edit Profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleWithButtons',
}
</script>
