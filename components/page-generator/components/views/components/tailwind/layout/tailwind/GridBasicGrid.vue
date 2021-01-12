<!-- =========================================================================================
    File Name: GridBasicGrid.vue
    Description: Example of building grid layouts with Tailwind CSS
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Basic Grids" code-toggler>
    <p>
      Use the existing
      <a href="https://tailwindcss.com/docs/flexbox-display" rel="nofollow"
        >Flexbox</a
      >
      and
      <a href="https://tailwindcss.com/docs/width" rel="nofollow"
        >percentage width</a
      >
      utilities to construct basic grids
    </p>

    <div class="mt-5">
      <!-- Full width column -->
      <div class="flex mb-4" @click="addComponent('w-full')">
        <div class="w-full bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto" @click="addComponent('w-full')"
            >w-full</span
          >
        </div>
      </div>

      <!-- Two columns -->
      <div class="flex mb-4" @click="addComponent('w-1/2')">
        <div class="w-1/2 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/2</span>
        </div>
        <div class="w-1/2 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/2</span>
        </div>
      </div>

      <!-- Three columns -->
      <div class="flex mb-4" @click="addComponent('w-1/3')">
        <div class="w-1/3 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/3</span>
        </div>
        <div class="w-1/3 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/3</span>
        </div>
        <div class="w-1/3 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/3</span>
        </div>
      </div>

      <!-- Four columns -->
      <div class="flex mb-4" @click="addComponent('w-1/4')">
        <div class="w-1/4 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/4</span>
        </div>
        <div class="w-1/4 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/4</span>
        </div>
        <div class="w-1/4 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/4</span>
        </div>
        <div class="w-1/4 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/4</span>
        </div>
      </div>

      <!-- Five columns -->
      <div class="flex mb-4" @click="addComponent('w-1/5')">
        <div class="w-1/5 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/5</span>
        </div>
        <div class="w-1/5 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/5</span>
        </div>
        <div class="w-1/5 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/5</span>
        </div>
        <div class="w-1/5 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/5</span>
        </div>
        <div class="w-1/5 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/5</span>
        </div>
      </div>

      <!-- Six columns -->
      <div class="flex" @click="addComponent('w-1/6')">
        <div class="w-1/6 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
        <div class="w-1/6 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
        <div class="w-1/6 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
        <div class="w-1/6 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
        <div class="w-1/6 bg-grid-color-secondary h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
        <div class="w-1/6 bg-grid-color h-12 flex">
          <span class="sm:flex hidden m-auto">w-1/6</span>
        </div>
      </div>
    </div>
  </vx-card>
</template>
<script>
export default {
  data() {
    return {
      place: 0
    }
  },
  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag
    },
    newPlace() {
      let newPlace = []
      let build

      if (this.place.length > 0) {
        for (let e = 0; e < this.place.length; e++) {
          if (e == 0) {
            build = this.$store.state.page_builder.component_list[this.place[e]]
          } else {
            build = build.children[this.place[e]]
          }
        }
        let pos = build.children.length

        newPlace.push(...this.place)
        newPlace.push(pos)
      }

      return newPlace
    }
  },
  created() {
    this.place = this.$store.getters['page_builder/place']
  },
  methods: {
    addComponent(name) {
      let payload = []

      if (name == 'w-full') {
        payload.push({
          title: 'divi',
          content: {
            name: name
          },
          class: 'flex mb-4',
          place: [...this.newPlace, 0],
          children: [
            {
              title: 'divi',
              content: {
                name: name
              },
              class: 'w-full bg-grid-color h-12 flex',
              place: [...this.newPlace, 0, 0],
              children: [
                {
                  title: 'spanAdd',
                  content: {
                    name: name
                  },
                  class: 'sm:flex hidden m-auto',
                  place: [...this.newPlace, 0, 0, 0],
                  children: [
                    {
                      title: 'h1Tag',
                      content: {
                        html: name
                      },
                      place: [...this.newPlace, 0, 0, 0, 0]
                    }
                  ]
                }
              ]
            }
          ]
        })
      } else if (name == 'w-1/2') {
        payload.push({
          title: 'divi',
          content: {
            name: name
          },
          class: 'flex mb-4',
          place: [...this.newPlace, 0],
          children: [
            {
              title: 'divi',
              content: {
                name: name
              },
              class: 'w-1/2 bg-grid-color-secondary h-12 flex',
              place: [...this.newPlace, 0, 0],
              children: [
                {
                  title: 'spanAdd',
                  content: {
                    name: name
                  },
                  class: 'sm:flex hidden m-auto',
                  place: [...this.newPlace, 0, 0, 0],
                  children: [
                    {
                      title: 'h1Tag',
                      content: {
                        html: name
                      },
                      place: [...this.newPlace, 0, 0, 0, 0]
                    }
                  ]
                }
              ]
            },
            {
              title: 'divi',
              content: {
                name: name
              },
              class: 'w-1/2 bg-grid-color h-12 flex',
              place: [...this.newPlace, 0, 1],
              children: [
                {
                  title: 'spanAdd',
                  content: {
                    name: name
                  },
                  class: 'sm:flex hidden m-auto',
                  place: [...this.newPlace, 0, 1, 0],
                  children: [
                    {
                      title: 'h1Tag',
                      content: {
                        html: name
                      },
                      place: [...this.newPlace, 0, 1, 0, 0]
                    }
                  ]
                }
              ]
            }
          ]
        })
      } else if (name == 'w-1/3') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          }
        )
      } else if (name == 'w-1/4') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          }
        )
      } else if (name == 'w-1/5') {
        payload.push(
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: []
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: []
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: []
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: []
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: []
          }
        )
      } else if (name == 'w-1/6') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          },
          {
            title: 'grid',
            content: {
              name: name
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2
              },

              type: 'flex',
              justify: 'center',
              align: 'center'
            },
            children: []
          }
        )
      }

      this.$store.commit('page_builder/COMPONENTS_LIST', payload)

      let payloads = {
        active_card: false,
        component_show: 'builder',
        active_edit_card: false,
        index: -1
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    }
  }
}
</script>
