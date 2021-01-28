<!-- =========================================================================================
    File Name: ButtonBorder.vue
    Description: Buttons with border
    ----------------------------------------------------------------------------------------
 
========================================================================================== -->

<template>
  <div>
    <vx-card title="Image Grid">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <div
          class="container mx-auto p-8"
          id="image-grid"
          @click="addComponent('image-grid')"
        >
          <div class="flex flex-row flex-wrap -mx-2">
            <div class="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <a
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style="
                  background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                "
              >
                Link
              </a>
            </div>
            <div class="w-full md:w-1/2 mb-4 px-2">
              <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div
                  class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2"
                >
                  <a
                    class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                    style="
                      background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                    "
                  >
                    Link
                  </a>
                </div>
                <div class="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                  <a
                    class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                    style="
                      background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                    "
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
              <a
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style="
                  background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                "
              >
                Link
              </a>
            </div>
            <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 px-2">
              <a
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style="
                  background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                "
              >
                Link
              </a>
            </div>
            <div class="w-full sm:w-1/3 h-32 md:h-48 px-2">
              <a
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
                style="
                  background-image: url(https://via.placeholder.com/800x600/EDF2F7/E2E8F0/&amp;text=Image);
                "
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </vx-card>

    <vx-card title="Two Side">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <section
          class="py-8 px-4"
          id="two-side"
          @click="addComponent('two-side')"
        >
          <div class="flex flex-wrap -mx-4">
            <div class="hidden md:block md:w-1/2 px-4">
              <div
                class="h-full w-full bg-cover rounded shadow-md"
                style="
                  background-image: url('https://source.unsplash.com/random/1280x720');
                "
              ></div>
            </div>
            <div class="md:w-1/2 h-auto px-4">
              <div class="mb-8">
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  class="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </vx-card>

    <vx-card title="Side by Side">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <section
          class="py-8 px-4"
          id="side-by-side"
          @click="addComponent('side-by-side')"
        >
          <div class="flex flex-wrap -mx-4">
            <div class="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </vx-card>

    <vx-card title="Three by Two">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <section
          class="pt-8 px-4"
          id="three-by-two"
          @click="addComponent('three-by-two')"
        >
          <div class="flex flex-wrap -mx-4">
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/3 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </vx-card>

    <vx-card title="Four by Two">
      <p>
        To add a type of button with edges we change the value of
        <code>border</code>
      </p>

      <div class="demo-alignment">
        <section
          class="py-8 px-4"
          id="four-by-two"
          @click="addComponent('four-by-two')"
        >
          <div class="flex flex-wrap -mx-4 -mb-8">
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div class="md:w-1/4 px-4 mb-8">
              <img
                class="rounded shadow-md"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </vx-card>
  </div>
</template>
<script>
export default {
  name: 'ExampleTailwindImageGrid',
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
