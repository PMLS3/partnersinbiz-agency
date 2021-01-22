<template>
  <div id="app">
    <div class="py-5 bg-light">
      <header class="container">
        <ul class="float-right nav">
          <li>
            <a
              class="btn btn-primary btn-sm"
              href="https://github.com/EvodiaAut/vue-UiMarqueeText-component"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
        <h1>vue-UiMarqueeText-component</h1>
        <p class="lead">
          [<a
            href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/"
            target="_blank"
            >CSS GPU Animation</a
          >] Marquee Text for vuejs
        </p>
        <div class="flex-wrap d-flex">
          <a
            href="https://www.npmjs.com/package/vue-UiMarqueeText-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/v/vue-UiMarqueeText-component.svg?style=for-the-badge"
              alt="vue-UiMarqueeText-component npm"
            />
          </a>
          <a
            href="https://github.com/EvodiaAut/vue-UiMarqueeText-component/blob/master/LICENSE.md"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge"
              alt="vue-UiMarqueeText-component license"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/vue-UiMarqueeText-component"
            target="_blank"
          >
            <img
              class="m-1"
              src="https://img.shields.io/npm/dt/vue-UiMarqueeText-component.svg?style=for-the-badge"
              alt="vue-UiMarqueeText-component npm"
            />
          </a>
        </div>
      </header>
    </div>
    <main class="container" role="main">
      <section class="my-4">
        <h2 class="mb-3">Props</h2>
        <div class="table-responsive">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Config</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">duration</th>
                <td>Animation Duration</td>
                <td><code>{ type: Number, default: 15 }</code></td>
              </tr>
              <tr>
                <th scope="row">repeat</th>
                <td>
                  Number of repeat the Slot
                  <b>(It's important for to short content)</b>
                </td>
                <td><code>{ type: Number, default: 2 }</code></td>
              </tr>
              <tr>
                <th scope="row">paused</th>
                <td>
                  The property specifies whether the animation is running or
                  paused
                </td>
                <td><code>{ type: Boolean, default: false }</code></td>
              </tr>
              <tr>
                <th scope="row">reverse</th>
                <td>The animation plays backwards each cycle</td>
                <td><code>{ type: Boolean, default: false }</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section class="my-4">
        <h3 class="mb-3">
          Demo <small>with test data</small>
          <button
            :class="{ active: isPaused }"
            class="ml-2 btn btn-sm btn-outline-primary"
            type="button"
            @click="isPaused = !isPaused"
          >
            Pause
          </button>
        </h3>
        <UiMarqueeText
          :duration="45"
          :repeat="3"
          :paused="isPaused"
          class="py-2 text-white bg-dark"
        >
          <span class="ml-2 badge badge-success">0,38%</span> ATX
          <span class="ml-2 badge badge-danger">0,16%</span> DAX
          <span class="ml-2 badge badge-success">0,04%</span> TecDax
          <span class="ml-2 badge badge-danger">0,19%</span> MDAX
          <span class="ml-2 badge badge-success">0,03%</span> ESTX50
          <span class="ml-2 badge badge-info">0,00%</span> NIKKEI
          <span class="ml-2 badge badge-success">0,03%</span> EUR/CHF
        </UiMarqueeText>
        <UiMarqueeText
          :duration="3"
          :repeat="3"
          :paused="isPaused"
          class="py-2 mt-2 text-white bg-dark"
        >
          <span class="ml-2 badge badge-success">0,38%</span> ATX
          <span class="ml-2 badge badge-danger">0,16%</span> DAX
          <span class="ml-2 badge badge-success">0,04%</span> TecDax
          <span class="ml-2 badge badge-danger">0,19%</span> MDAX
          <span class="ml-2 badge badge-success">0,03%</span> ESTX50
          <span class="ml-2 badge badge-info">0,00%</span> NIKKEI
          <span class="ml-2 badge badge-success">0,03%</span> EUR/CHF
        </UiMarqueeText>
        <UiMarqueeText
          :duration="20"
          :paused="isPaused"
          reverse
          class="py-2 mt-2 bg-light"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </UiMarqueeText>
      </section>
      <section class="my-4">
        <h4 class="mb-3">Listening to Events: Example - Stop on mouse hover</h4>
        <UiMarqueeText
          :repeat="3"
          :paused="isPaused"
          class="py-2 mt-2 text-white bg-dark"
          @mouseenter="isPaused = !isPaused"
          @mouseleave="isPaused = false"
        >
          <span class="ml-2 badge badge-success">0,38%</span> ATX
          <span class="ml-2 badge badge-danger">0,16%</span> DAX
          <span class="ml-2 badge badge-success">0,04%</span> TecDax
          <span class="ml-2 badge badge-danger">0,19%</span> MDAX
          <span class="ml-2 badge badge-success">0,03%</span> ESTX50
          <span class="ml-2 badge badge-info">0,00%</span> NIKKEI
          <span class="ml-2 badge badge-success">0,03%</span> EUR/CHF
        </UiMarqueeText>
      </section>
      <section class="my-4">
        <h4 class="mb-3">To small content</h4>
        <p class="mb-0 font-weight-bold">
          use prop <code>{ :repeat="NUMBER" }</code> when you know the content
          is not wider than parent
        </p>
        <p class="font-italic">Default we clone default slot two times</p>
        <UiMarqueeText :duration="1">
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </UiMarqueeText>
        after add prop <code class="font-weight-bold">{ :repeat="10" }</code>
        <UiMarqueeText :duration="1" :repeat="10">
          <span class="badge badge-success">START</span>
          Short text =(
          <span class="badge badge-danger">END</span>
        </UiMarqueeText>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MarqueeText',
  components: {},
  data() {
    return {
      isPaused: false,
    }
  },
}
</script>

<style scoped>
/* @import '~bootstrap/dist/css/bootstrap.css'; */

table code {
  white-space: nowrap;
}
</style>
