<!-- =========================================================================================
    File Name: KnowledgeBaseCategory.vue
    Description: Knowledge Base Category Page
    ----------------------------------------------------------------------------------------

========================================================================================== -->

<template>
  <div id="knowledge-base-category-page">
    <p class="mb-4">{{ categorySubtitle }}</p>

    <div class="vx-row mt-8 match-height">
      <div
        class="vx-col w-full sm:w-1/2 md:w-1/3 mb-base"
        v-for="section in sections"
        :key="section.id"
      >
        <vx-card>
          <h4 class="mb-4">{{ section.title }}</h4>
          <ul class="bordered-items">
            <li
              v-for="que in section.questions"
              :key="que.question"
              class="py-2"
            >
              <router-link :to="que.answerUrl">{{ que.question }}</router-link>
            </li>
          </ul>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categoryTitle: 'Category Name',
      categorySubtitle:
        'petiole antimasquer nonenduring hoofish unbed anergic sweetwood ailsyte.',
      sections: [
        {
          id: 0,
          title: 'Buying',
          questions: [
            {
              id: 0,
              question: 'Cake icing gummi bears?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Jelly soufflé apple pie?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Soufflé apple pie ice cream cotton?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Powder wafer brownie?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 4,
              question: 'Toffee donut dragée cotton candy?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 5,
              question: 'Soufflé chupa chups chocolate bar?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        },
        {
          id: 1,
          title: 'Item Support',
          questions: [
            {
              id: 0,
              question: 'Dessert halvah carrot cake sweet?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Jelly beans bonbon marshmallow?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Marzipan chocolate gummi bears bonbon powder?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Chupa chups lemon drops caramels?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        },
        {
          id: 2,
          title: 'Payments',
          questions: [
            {
              id: 0,
              question: 'Oat cake lemon drops sweet sweet?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Cotton candy brownie ice cream wafer roll?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Chocolate bonbon cake sugar plum?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Cake fruitcake chupa chups?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 4,
              question: 'Fruitcake bonbon dessert gingerbread powder?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        },
        {
          id: 3,
          title: 'Downloads',
          questions: [
            {
              id: 0,
              question: 'Marshmallow jelly beans oat cake?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Cake ice cream jujubes cookie?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Sesame snaps tart cake pie chocolate?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Chocolate cake chocolate tootsi?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 4,
              question: 'Caramels lemon drops tiramisu cake?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 5,
              question: 'Brownie dessert gummies. Tiramisu bear claw apple?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        },
        {
          id: 4,
          title: 'Licenses',
          questions: [
            {
              id: 0,
              question: 'Macaroon tootsie roll?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Cheesecake sweet soufflé jelly tiramisu chocolate?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Carrot cake topping tiramisu oat?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Ice cream soufflé marshmallow?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 4,
              question: 'Dragée liquorice dragée jelly beans?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 5,
              question: 'Lemon drops gingerbread chupa chups tiramisu?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        },
        {
          id: 5,
          title: 'Documents',
          questions: [
            {
              id: 0,
              question: 'Brownie dessert gummies?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 1,
              question: 'Cookie tiramisu lollipop?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 2,
              question: 'Bonbon sugar plum jelly-o?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            },
            {
              id: 3,
              question: 'Halvah chupa chups chupa chups?',
              answerUrl: '/demo/pages/KnowledgeBaseCategoryQuestion'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  methods: {},
  components: {},
  mounted() {
    this.$emit('changeRouteTitle', 'Category')
  }
}
</script>
