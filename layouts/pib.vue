<template>
  <div class="flex flex-col bg-black">
    <header class="sticky top-0 grid grid-cols-2 py-5 bg-black row">
      <h1
        class="ml-8 font-serif text-2xl text-white md:text-4xl"
        @click="$router.push('/')"
      >
        Partners in Biz
      </h1>
      <NuxtLink to="/consultation">
        <h1 class="float-right mr-3 font-serif text-2xl text-white md:text-4xl">
          Schedule Now
        </h1></NuxtLink
      >
    </header>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
