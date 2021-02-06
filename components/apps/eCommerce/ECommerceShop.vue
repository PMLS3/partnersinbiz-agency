<!-- =========================================================================================
  File Name: ECommerceShop.vue
  Description: eCommerce Shop Page
  ----------------------------------------------------------------------------------------
========================================================================================== -->

<template>
  <div>
    <client-only>
      <div class="mb-4 algolia-header" style="margin-top: 125px">
        <div class="flex flex-wrap items-center justify-between md:items-end">
          <!-- TOGGLE SIDEBAR BUTTON -->
          <vs-button
            icon="search"
            class="inline-flex ml-4 mr-4 cursor-pointer"
            @click.stop="toggleFilterSidebar"
          ></vs-button>

          <p class="hidden font-semibold lg:inline-flex algolia-filters-label">
            Filters
          </p>

          <div class="flex items-end justify-between flex-grow">
            <!-- Stats -->

            <p class="hidden font-semibold md:block"></p>

            <div class="flex flex-wrap">
              <!-- SORTING -->

              <vs-select
                :value="high_low_val"
                class="w-48 mr-4 vs-input-shadow-drop vs-select-no-border d-theme-input-dark-bg"
              >
                <vs-select-item
                  v-for="item in high_low"
                  :key="item.value"
                  :value="item.value"
                  :text="item.label"
                />
              </vs-select>

              <!-- ITEM VIEW - GRID/LIST -->
              <div>
                <feather-icon
                  icon="GridIcon"
                  @click="currentItemView = 'item-grid-view'"
                  class="p-2 rounded-lg cursor-pointer shadow-drop d-theme-dark-bg"
                  :svgClasses="{
                    'text-primary stroke-current':
                      currentItemView == 'item-grid-view',
                  }"
                />
                <feather-icon
                  icon="ListIcon"
                  @click="currentItemView = 'item-list-view'"
                  class="hidden p-2 ml-4 rounded-lg cursor-pointer shadow-drop d-theme-dark-bg sm:inline-flex"
                  :svgClasses="{
                    'text-primary stroke-current':
                      currentItemView == 'item-list-view',
                  }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="algolia-content-container"
        class="relative clearfix"
        style="height: 100%"
      >
        <vs-sidebar
          class="items-no-padding vs-sidebar-rounded background-absolute"
          parent="#algolia-content-container"
          :click-not-close="clickNotClose"
          :hidden-background="clickNotClose"
          v-model="isFilterSidebarActive"
        >
          <div class="p-6 filter-container">
            <!-- MULTI RANGE -->
            <h6 class="mb-3 font-bold">Multi Range</h6>
            <ul>
              <li
                v-for="item in numericItems"
                :key="item.value"
                class="flex items-center py-1 cursor-pointer"
              >
                <vs-radio
                  v-model="rangeSelected"
                  vs-name="range"
                  :vs-value="item.label"
                  >{{ item.label }}</vs-radio
                >
              </li>
            </ul>

            <vs-divider />

            <!-- PRICE SLIDER -->
            <h6 class="mb-3 font-bold">Price Slider</h6>
            <div>
              <vs-slider :min="50" v-model="slider" />
            </div>

            <vs-divider />

            <!-- CATEGORIES -->
            <h6 class="mb-4 font-bold">Category</h6>

            <div>
              <ul>
                <li
                  v-for="item in categories"
                  :key="item.value"
                  class="flex items-center py-1 cursor-pointer"
                  @click="refine(item.value)"
                >
                  <vs-radio
                    v-model="categorySelected"
                    vs-name="category"
                    :vs-value="item.category"
                    >{{ item.category }}</vs-radio
                  >
                </li>
              </ul>
            </div>

            <vs-divider />

            <!-- CATEGORIES -->
            <h6 class="mb-4 font-bold">Brands</h6>
            <div>
              <ul>
                <li
                  v-for="item in brands"
                  :key="item.value"
                  class="flex items-center py-1 cursor-pointer"
                  @click="refine(item)"
                >
                  <vs-radio
                    v-model="brandSelected"
                    vs-name="brands"
                    :vs-value="item.brand"
                    >{{ item.brand }}</vs-radio
                  >
                </li>
              </ul>
            </div>

            <vs-divider />

            <!-- Rating -->
            <!-- <h6 class="mb-3 font-bold">Rating</h6>
            <ul>
              <li v-for="item in stars" :key="item.value" class="mb-2">
                <div
                  @click.prevent="refine(item.value)"
                  class="flex items-center justify-between"
                >
                  <div class="flex flex-wrap items-center">
                    <feather-icon
                      icon="StarIcon"
                      :svgClasses="[
                        {
                          'text-warning': full,
                          'text-grey': !full,
                          'ml-1': index
                        },
                        'cursor-pointer stroke-current h-6 w-6'
                      ]"
                      v-for="(full, index) in item.stars"
                      :key="index"
                    />
                    <span class="ml-2">&amp; up</span>
                  </div>
                  <span>({{ item.count }})</span>
                </div>
              </li>
            </ul> -->

            <vs-divider />

            <vs-button class="w-full">Remove Filters</vs-button>
          </div>
        </vs-sidebar>

        <!-- RIGHT COL -->
        <div :class="{ 'sidebar-spacer-with-margin': clickNotClose }">
          <!-- SEARCH BAR -->

          <vs-input
            icon="search"
            placeholder="Search"
            v-model="value1"
            class="mx-3 mb-8"
            style="box-shadow: 5px 5px 5px 5px #1f684d; width: 100%"
          />

          <!-- SEARCH RESULT -->
          <div>
            <!-- {{items}} -->
            <!-- GRID VIEW -->
            <template v-if="currentItemView == 'item-grid-view'">
              <div class="items-grid-view vx-row match-height">
                <div
                  class="w-full vx-col lg:w-1/3 sm:w-1/2"
                  v-for="item in products"
                  :key="item.objectID"
                >
                  <ItemGridView :item="item">
                    <!-- SLOT: ACTION BUTTONS -->
                    <template slot="action-buttons">
                      <div class="flex flex-wrap">
                        <!-- PRIMARY BUTTON: ADD TO WISH LIST -->
                        <div
                          class="flex items-center justify-center flex-grow p-3 cursor-pointer item-view-primary-action-btn"
                          @click="toggleItemInWishList(item)"
                        >
                          <feather-icon
                            icon="HeartIcon"
                            :svgClasses="[
                              {
                                'text-danger fill-current': isInWishList(
                                  item.objectID
                                ),
                              },
                              'h-4 w-4',
                            ]"
                          />

                          <span class="ml-2 text-sm font-semibold"
                            >WISHLIST</span
                          >
                        </div>

                        <!-- SECONDARY BUTTON: ADD-TO/VIEW-IN CART -->
                        <div
                          class="flex items-center justify-center flex-grow p-3 text-white cursor-pointer item-view-secondary-action-btn bg-primary"
                          @click="cartButtonClicked(item)"
                        >
                          <feather-icon
                            icon="ShoppingBagIcon"
                            svgClasses="h-4 w-4"
                          />

                          <span
                            class="ml-2 text-sm font-semibold"
                            v-if="isInCart(item.objectID)"
                            >VIEW IN CART</span
                          >
                          <span class="ml-2 text-sm font-semibold" v-else
                            >ADD TO CART</span
                          >
                        </div>
                      </div>
                    </template>
                  </ItemGridView>
                </div>
              </div>
            </template>

            <!-- LIST VIEW -->
            <template v-else>
              <div
                class="items-list-view mb-base"
                v-for="item in products"
                :key="item.objectID"
              >
                <ItemListView :item="item">
                  <!-- SLOT: ACTION BUTTONS -->
                  <template slot="action-buttons">
                    <div
                      class="flex items-center justify-center flex-grow p-3 mb-3 rounded-lg cursor-pointer item-view-primary-action-btn"
                      @click="toggleItemInWishList(item)"
                    >
                      <feather-icon
                        icon="HeartIcon"
                        :svgClasses="[
                          {
                            'text-danger fill-current': isInWishList(
                              item.objectID
                            ),
                          },
                          'h-4 w-4',
                        ]"
                      />
                      <span class="ml-2 text-sm font-semibold">WISHLIST</span>
                    </div>
                    <div
                      class="flex items-center justify-center flex-grow p-3 text-white rounded-lg cursor-pointer item-view-secondary-action-btn bg-primary"
                      @click="cartButtonClicked(item)"
                    >
                      <feather-icon
                        icon="ShoppingBagIcon"
                        svgClasses="h-4 w-4"
                      />

                      <span
                        class="ml-2 text-sm font-semibold"
                        v-if="isInCart(item.objectID)"
                        >VIEW IN CART</span
                      >
                      <span class="ml-2 text-sm font-semibold" v-else
                        >ADD TO CART</span
                      >
                    </div>
                  </template>
                </ItemListView>
              </div>
            </template>
          </div>

          <!-- PAGINATION -->
          <div>
            <!-- <vs-pagination
              :total="nbPages"
              :max="7"
              :value="pages + 1"
              @input="
                (val) => {
                  refine(val - 1)
                }
              "
            /> -->
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      categories: [],
      brands: [],
      slider: 60,
      brandSelected: '',
      categorySelected: '',
      rangeSelected: '',
      value1: '',
      high_low: [
        { value: 'featured', label: 'Featured' },
        { value: 'low', label: 'Lowest Price' },
        { value: 'high', label: 'Highest Price' },
      ],
      high_low_val: '',
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: 'item-grid-view',
      numericItems: [
        { label: 'All' },
        { label: '<= R10', end: 10 },
        { label: 'R10 - R100', start: 10, end: 100 },
        { label: 'R100 - R500', start: 100, end: 500 },
        { label: '>= R500', start: 500 },
      ],
      brands: [],
      range: {
        min: 20,
        max: 700,
      },
    }
  },
  computed: {
    toValue() {
      return (value, range) => [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max,
      ]
    },
    activeBusinessInfo() {
      return this.$store.state.business.main_business
    },
    activeUserInfo() {
      return this.$store.state.auth.main_user
    },
    activeCompanyInfo() {
      return this.$store.state.crm.company
    },
    // GRID VIEW
    isInCart() {
      return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
    },
    isInWishList() {
      return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
    windowWidth() {
      return this.$store.state.windowWidth
    },
  },
  watch: {
    windowWidth() {
      this.setSidebarWidth()
    },
  },
  methods: {
    refine(val) {
      console.log('val', val)
    },
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true
      }
    },
    // GRID VIEW - ACTIONS
    toggleFilterSidebar() {
      if (this.clickNotClose) return
      this.isFilterSidebarActive = !this.isFilterSidebarActive
    },
    toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    },
    additemInCart(item) {
      this.$store.dispatch('eCommerce/additemInCart', item)
    },
    cartButtonClicked(item) {
      this.isInCart(item.objectID)
        ? this.$router.push('/eCommerce/checkout')
        : this.additemInCart(item)
    },
  },
  created() {
    this.setSidebarWidth()
    let docProd = this.$fireStore
      .collection('apps')
      .doc('crm')
      .collection(this.activeBusinessInfo.b_uid)
      .doc('products')
      .collection('resells')
    docProd.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.products.push({
          objectID: doc.id,
          product_name: doc.data().product_name,
          branch: doc.data().branch,
          price: doc.data().price,
          quantity: doc.data().quantity,
          description: doc.data().description,
          active: doc.data().active,
          vat: doc.data().vat,
          category: doc.data().category,
          featured: doc.data().featured,
          brand: doc.data().brand,
          ctc: doc.data().ctc,
          sellerID: doc.data().companyRef,
          discount: doc.data().discount,
          addedItems: doc.data().addedItems,
          images: doc.data().images,
          comm: doc.data().comm,
        })
      })
    })
    let docBrands = this.$fireStore
      .collection('apps')
      .doc('crm')
      .collection(this.activeBusinessInfo.b_uid)
      .doc('brand')
      .collection('brand')
    docBrands.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.brands.push({
          brand: doc.data().brand,
        })
      })
    })
    let docCat = this.$fireStore
      .collection('apps')
      .doc('crm')
      .collection(this.activeBusinessInfo.b_uid)
      .doc('category')
      .collection('category')
    docCat.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let doc = change.doc
        this.categories.push({
          category: doc.data().category,
        })
      })
    })
  },
}
</script>

<style lang="scss">
#algolia-instant-search-demo {
  .algolia-header {
    .algolia-filters-label {
      width: calc(260px + 2.4rem);
    }
  }
  #algolia-content-container {
    .vs-sidebar {
      position: relative;
      float: left;
    }
  }
  .algolia-search-input-right-aligned-icon {
    padding: 1rem 1.5rem;
  }
  .algolia-price-slider {
    min-width: unset;
  }
  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
    min-width: 50%;
  }
  .item-view-secondary-action-btn {
    min-width: 50%;
  }
}
.theme-dark {
  #algolia-instant-search-demo {
    #algolia-content-container {
      .vs-sidebar {
        background-color: #10163a;
      }
    }
  }
}
@media (min-width: 992px) {
  .vs-sidebar-rounded {
    .vs-sidebar {
      border-radius: 0.5rem;
    }
    .vs-sidebar--items {
      border-radius: 0.5rem;
    }
  }
}
@media (max-width: 992px) {
  #algolia-content-container {
    .vs-sidebar {
      position: absolute !important;
      float: none !important;
    }
  }
}
</style>
