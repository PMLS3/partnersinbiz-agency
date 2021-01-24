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
        <div class="flex w-full h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex" @click="addComponent('w-full')"
            >w-full</span
          >
        </div>
      </div>

      <!-- Two columns -->
      <div class="flex mb-4" @click="addComponent('w-1/2')">
        <div class="flex w-1/2 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/2</span>
        </div>
        <div class="flex w-1/2 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/2</span>
        </div>
      </div>

      <!-- Three columns -->
      <div class="flex mb-4" @click="addComponent('w-1/3')">
        <div class="flex w-1/3 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
        <div class="flex w-1/3 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/3</span>
        </div>
      </div>

      <!-- Four columns -->
      <div class="flex mb-4" @click="addComponent('w-1/4')">
        <div class="flex w-1/4 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
        <div class="flex w-1/4 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/4</span>
        </div>
      </div>

      <!-- Five columns -->
      <div class="flex mb-4" @click="addComponent('w-1/5')">
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
        <div class="flex w-1/5 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/5</span>
        </div>
      </div>

      <!-- Six columns -->
      <div class="flex" @click="addComponent('w-1/6')">
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color-secondary">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
        <div class="flex w-1/6 h-12 bg-grid-color">
          <span class="hidden m-auto sm:flex">w-1/6</span>
        </div>
      </div>
    </div>
  </vx-card>
</template>
<script>
export default {
  methods: {
    addComponent(name) {
      let payload = []

      if (name == 'w-full') {
        payload.push({
          title: 'grid',
          content: {
            name: name,
          },
          inline: {
            size: {
              lg: 12,
              sm: 12,
              xs: 12,
            },

            type: 'flex',
            justify: 'center',
            align: 'center',
          },
          children: [],
        })
      } else if (name == 'w-1/2') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 6,
                sm: 6,
                xs: 6,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 6,
                sm: 6,
                xs: 6,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          }
        )
      } else if (name == 'w-1/3') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 4,
                sm: 4,
                xs: 4,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          }
        )
      } else if (name == 'w-1/4') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 3,
                sm: 3,
                xs: 3,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          }
        )
      } else if (name == 'w-1/5') {
        payload.push(
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4,
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: [],
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4,
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: [],
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4,
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: [],
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4,
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: [],
          },
          {
            title: 'grid',
            size: {
              lg: 2.4,
              sm: 2.4,
              xs: 2.4,
            },
            type: 'flex',
            justify: 'center',
            align: 'center',
            name: name,
            children: [],
          }
        )
      } else if (name == 'w-1/6') {
        payload.push(
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          },
          {
            title: 'grid',
            content: {
              name: name,
            },
            inline: {
              size: {
                lg: 2,
                sm: 2,
                xs: 2,
              },

              type: 'flex',
              justify: 'center',
              align: 'center',
            },
            children: [],
          }
        )
      }

      // this.$store.commit('page_builder/COMPONENTS_LIST', payload)
      $nuxt.$emit('component-added', payload)

      // let payloads = {
      //   active_card: false,
      //   component_show: 'builder',
      //   active_edit_card: false,
      //   index: -1
      // }
      // this.$store.commit('page_builder/COMPONENTS_NEEDED', payloads)
    },
  },
}
</script>
