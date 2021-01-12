<template>
  <div>
    <vs-row vs-w="12" style="width: 80vw">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="page" class="mr-2"
          >Page</vs-radio
        >
        <vs-radio v-model="b_type" vs-name="b_type" vs-value="component"
          >Component</vs-radio
        >
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="8"
        vs-sm="8"
        vs-xs="8"
      >
        <vs-row v-if="b_type == 'page'">
          <vs-input
            v-model="page_name"
            placeholder="Page Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="savePage()" v-if="!editing_page">Save </vs-button>
          <vs-button @click="savePage()" v-if="editing_page">Update </vs-button>
          <!-- <vs-button @click="newPage()">New Page </vs-button> -->
        </vs-row>

        <vs-row v-else>
          <vs-input
            v-model="component_name"
            placeholder="Component Name"
            v-if="!editing_page"
          ></vs-input>
          <vs-button @click="saveComponent()" v-if="!editing_page"
            >Save
          </vs-button>
        </vs-row>
      </vs-col>
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-lg="2"
        vs-sm="2"
        vs-xs="2"
      >
        <!-- <vs-button icon="pencil">+</vs-button> -->
        <vs-button
          @click="addGrid('grid', true)"
          color="primary"
          type="border"
          icon="add"
        ></vs-button>
        <!-- <vs-button
          @click="addGrid('builder', false)"
          color="warning"
          type="border"
          icon="remove"
          class="ml-2"
        ></vs-button> -->
        <vs-button
          @click="addEdit()"
          color="primary"
          type="border"
          icon="edit"
          class="ml-2"
        ></vs-button>

        <vs-button
          @click="newPage()"
          color="success"
          type="border"
          icon="refresh"
          class="ml-2"
        ></vs-button>
        <!-- <vs-button @click="addGrid('builder', false)">-</vs-button> -->
      </vs-col>
      <vs-divider color="primary" icon="check"></vs-divider>
    </vs-row>

    <vs-popup
      fullscreen
      title="Building Options"
      :active.sync="popup"
      :button-close-hidden="true"
    >
      <!-- <vs-button @click="addGrid('builder', false)">Cancel</vs-button> -->
      <vs-button
        style="float: right"
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-x-circle"
        @click="addGrid('builder', false)"
      ></vs-button>
      <vs-tabs alignment="fixed" position="left">
        <!-- Grid -->

        <vs-tab label="Grid">
          <div>
            <vs-tabs alignment="fixed" position="left">
              <vs-tab label="Grid Layout 1">
                <div>
                  <grid v-if="component_show == 'grid'" />
                </div>
              </vs-tab>
              <vs-tab label="Grid Layout 2">
                <grid2 />
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-tab>
        <!-- Data List -->

        <vs-tab label="Data List">
          <vs-tabs alignment="fixed" position="left">
            <!-- <vs-tab label="Sidebar">
      <dataViewSidebar/> 

      </vs-tab> -->
            <vs-tab label="List View">
              <!-- <dataListListView/> -->
            </vs-tab>
            <vs-tab label="Thumb View">
              <!-- <dataListThumbView /> -->
            </vs-tab>
          </vs-tabs>
        </vs-tab>

        <!-- Cards -->
        <vs-tab label="Card">
          <div>
            <vs-tabs alignment="fixed" position="left">
              <vs-tab label="Basic">
                <cardBasicAdd @addToList="submitToParent" />
              </vs-tab>
              <vs-tab label="Statistics">
                <client-only>
                  <cardStatisticsAdd />
                </client-only>
              </vs-tab>
              <vs-tab label="Analytics">
                <cardAnalyticsAdd />
              </vs-tab>
              <vs-tab label="Card Actions">
                <client-only>
                  <cardActionsAdd />
                </client-only>
              </vs-tab>
              <vs-tab label="Card Colors">
                <cardColorsAdd />
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-tab>

        <!-- Components -->
        <vs-tab label="Components">
          <div>
            <vs-tabs alignment="fixed" position="left">
              <!-- UI -->

              <vs-tab label="Alert">
                <alertAdd />
              </vs-tab>
              <vs-tab label="Avatar">
                <avatarAdd />
              </vs-tab>
              <vs-tab label="Breadcrumb">
                <breadcrumbAdd />
              </vs-tab>
              <vs-tab label="Button">
                <div><button-add /></div>
              </vs-tab>
              <vs-tab label="Button Groups">
                <buttonGroupAdd />
              </vs-tab>
              <vs-tab label="Chip">
                <chipAdd />
              </vs-tab>
              <vs-tab label="Collapse">
                <collapseAdd />
              </vs-tab>
              <vs-tab label="Dialogs">
                <dialogsAdd />
              </vs-tab>
              <vs-tab label="Divider">
                <dividerAdd />
              </vs-tab>
              <vs-tab label="Dropdown">
                <dropdownAdd />
              </vs-tab>
              <vs-tab label="List">
                <listAdd />
              </vs-tab>
              <vs-tab label="Images">
                <imageAdd />
              </vs-tab>
              <vs-tab label="Loading">
                <loadingAdd />
              </vs-tab>
              <vs-tab label="Navbar">
                <navbarAdd />
              </vs-tab>
              <vs-tab label="Notifications">
                <notificationsAdd />
              </vs-tab>
              <vs-tab label="Pagination">
                <paginationAdd />
              </vs-tab>
              <vs-tab label="Popup">
                <popupAdd />
              </vs-tab>
              <vs-tab label="Progress">
                <progressAdd />
              </vs-tab>
              <vs-tab label="Sidbar">
                <sidebarAdd />
              </vs-tab>
              <vs-tab label="Slider">
                <sliderAdd />
              </vs-tab>
              <vs-tab label="Tabs">
                <tabsAdd />
              </vs-tab>
              <vs-tab label="Tootip">
                <tooltipAdd />
              </vs-tab>
              <vs-tab label="Upload">
                <uploadAdd />
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-tab>
        <!-- Extensions -->

        <vs-tab label="Extensions">
          <div>
            <vs-tabs alignment="fixed" position="left">
              <!-- <vs-tab label="Access Control">
                      <access-controll-add/>
  
                    </vs-tab> -->
              <vs-tab label="Auto Complete">
                <autocomplete-add />
              </vs-tab>
              <vs-tab label="Carousel">
                <carousel-add />
              </vs-tab>
              <vs-tab label="Clipboard">
                <clipboardAdd />
              </vs-tab>
              <vs-tab label="Context Menu">
                <contextMenuAdd />
              </vs-tab>
              <vs-tab label="Date Picker">
                <datePickerAdd />
              </vs-tab>
              <vs-tab label="Date Time Picker">
                <dateTimePickerAdd />
              </vs-tab>
              <vs-tab label="Drag and drop">
                <dragAndDropAdd />
              </vs-tab>
              <vs-tab label="Import and Export">
                <vs-tabs alignment="fixed">
                  <vs-tab label="Export">
                    <exportAdd />
                  </vs-tab>
                  <vs-tab label="Export Selected">
                    <exportSelectedAdd />
                  </vs-tab>
                  <vs-tab label="Imported">
                    <div>
                      <importAdd />
                    </div>
                  </vs-tab>
                </vs-tabs>
              </vs-tab>
              <vs-tab label="Quill Editor">
                <quillEditor />
              </vs-tab>
              <vs-tab label="Select">
                <selectAdd />
              </vs-tab>
              <vs-tab label="Star ratings">
                <starRatingsAdd />
              </vs-tab>
              <vs-tab label="Tree">
                <treeAdd />
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-tab>

        <vs-tab label="Pages">
          <vs-tabs alignment="fixed" position="left">
            <vs-tab label="Login">
              <login />
            </vs-tab>
            <vs-tab label="Register">
              <register />
            </vs-tab>
            <vs-tab label="Coming Soon">
              <comingSoon />
            </vs-tab>
            <vs-tab label="Error404">
              <error404 />
            </vs-tab>
            <vs-tab label="Error500">
              <error500 />
            </vs-tab>
            <vs-tab label="FAQ">
              <faq />
            </vs-tab>
            <vs-tab label="Forgot Password">
              <forgotPassword />
            </vs-tab>
            <vs-tab label="Invoice">
              <invoice />
            </vs-tab>
            <vs-tab label="KnowledgeBase">
              <knowledgeBase />
            </vs-tab>
            <vs-tab label="LockScreen">
              <lockScreen />
            </vs-tab>
            <vs-tab label="Maintenance">
              <maintenance />
            </vs-tab>
            <vs-tab label="Not Authorized">
              <notAuthorized />
            </vs-tab>
            <vs-tab label="Profile">
              <profile />
            </vs-tab>
            <vs-tab label="Reset Password">
              <resetPassword />
            </vs-tab>
            <vs-tab label="Search">
              <search />
            </vs-tab>
          </vs-tabs>
        </vs-tab>
        <!-- Apps -->
        <vs-tab label="Content">
          <content-set />
        </vs-tab>

        <vs-tab label="Apps">
          <vs-tabs alignment="fixed" position="left">
            <vs-tab label="Events" @click="item = 'Events'">
              <AgGridTable
                :item="item"
                :schema="schema"
                :columnDefs="columnDefs"
              />
            </vs-tab>
            <vs-tab label="eCommerce">
              <eCommerce />
            </vs-tab>
            <vs-tab label="Loyalty"> </vs-tab>
            <vs-tab label="Email"> </vs-tab>
            <vs-tab label="Form Builder"> </vs-tab>
            <vs-tab label="Todo"> </vs-tab>
            <vs-tab label="Distress Signal"> </vs-tab>
            <vs-tab label="Golfcourse"> </vs-tab>
            <vs-tab label="Chat"> </vs-tab>
            <vs-tab label="Whiteboard"> </vs-tab>
            <vs-tab label="Classroom"> </vs-tab>
          </vs-tabs>
        </vs-tab>
        <vs-tab label="Forms & Tables">
          <vs-tabs alignment="fixed" position="left">
            <vs-tab label="Form Elements">
              <vs-tabs alignment="fixed" position="left">
                <vs-tab label="Checkbox">
                  <checkBoxAdd />
                </vs-tab>
                <vs-tab label="Input">
                  <inputAdd />
                </vs-tab>
                <vs-tab label="Number Input">
                  <numberInputAdd />
                </vs-tab>
                <vs-tab label="Radio">
                  <radioAdd />
                </vs-tab>
                <vs-tab label="Select">
                  <selectAdds />
                </vs-tab>
                <vs-tab label="Switch">
                  <switchAdd />
                </vs-tab>
                <vs-tab label="Text Area">
                  <textareaAdd />
                </vs-tab>
              </vs-tabs>
            </vs-tab>
            <vs-tab label="Form Input Group">
              <formInputGroupAdd />
            </vs-tab>
            <vs-tab label="Form Validation">
              <!-- <formValidationAdd /> -->
            </vs-tab>
            <vs-tab label="Form Wizard">
              <!-- <formWizardAdd /> -->
            </vs-tab>
            <vs-tab label="Form Layout">
              <formLayoutsAdd />
            </vs-tab>
            <vs-tab label="Table">
              <tabled />
            </vs-tab>
          </vs-tabs>
        </vs-tab>
        <vs-tab label="Own Components">
          <ownComponents />
        </vs-tab>
        <vs-tab label="TailWind">
          <vs-tabs alignment="fixed" position="left">
            <vs-tab label="Buttons">
              <buttons-tailwind />
            </vs-tab>
            <vs-tab label="Forms">
              <forms-tailwind />
            </vs-tab>
            <vs-tab label="Navigations">
              <navigations-tailwind />
            </vs-tab>
            <vs-tab label="Cards">
              <cards-tailwind />
            </vs-tab>
            <vs-tab label="Widget">
              <widget-tailwind />
            </vs-tab>
            <vs-tab label="Tables">
              <tables-tailwind />
            </vs-tab>
            <vs-tab label="Layouts">
              <layouts-tailwind />
            </vs-tab>
          </vs-tabs>
        </vs-tab>
      </vs-tabs>
    </vs-popup>

    <vs-popup
      :title="component_show"
      :active.sync="popup2"
      :button-close-hidden="true"
    >
      <vs-button
        style="float: right"
        radius
        color="danger"
        type="gradient"
        icon-pack="feather"
        icon="icon-x-circle"
        @click="$store.commit('page_builder/ACTIVE_EDIT_UPDATE', false)"
      ></vs-button>
      <div v-if="Object.keys(edit_component).length > 0">
        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <contentEdit :schema="edit_component.schema.content" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <classEdit :schema="edit_component.schema.class" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <styleEdit :schema="edit_component.schema.style" />
          </vs-col>
        </vs-row>

        <vs-row vs-justify="center">
          <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="10">
            <inlineEdit :schema="edit_component.schema.inline" />
          </vs-col>
        </vs-row>

        {{ uploaded_images[0] }}
        <img
          :src="uploaded_images[0]"
          v-if="uploaded_images[0]"
          style="height: 125px"
        />
        <br />
        <imageUpload class="mb-2 mr-4 sm:mb-0" label="Image Upload" />
        <br />

        <!-- <vs-button @click="update()">Update</vs-button> -->
      </div>
    </vs-popup>

    <vs-popup
      title="Components tree"
      :active.sync="edit_all"
      :button-close-hidden="true"
    >
      <div>
        <vs-button
          style="float: right"
          radius
          color="danger"
          type="gradient"
          icon-pack="feather"
          icon="icon-x-circle"
          @click="$store.commit('page_builder/EDIT_ALL', false)"
        ></vs-button>

        <Tree :data="component_list" />
      </div>
    </vs-popup>
  </div>
</template>

<script>
//Tailwind
import ButtonsTailwind from '@/components/page-generator/components/views/components/tailwind/button/Buttons.vue'
import FormsTailwind from '@/components/page-generator/components/views/components/tailwind/forms/Forms.vue'
import NavigationTailwind from '@/components/page-generator/components/views/components/tailwind/navigation/Navigation.vue'
import CardsTailwind from '@/components/page-generator/components/views/components/tailwind/cards/Cards.vue'
import WidgetTailwind from '@/components/page-generator/components/views/components/tailwind/widget/Widget.vue'
import TablesTailwind from '@/components/page-generator/components/views/components/tailwind/table/Tables.vue'
import LayoutsTailwind from '@/components/page-generator/components/views/components/tailwind/layout/Layouts.vue'

import mainGrid from '@/components/page-generator/components/grid/mainGrid'

//Grid
import grid from '@/components/page-generator/components/views/ui-elements/grid/tailwind/GridTailwind'
import grid2 from '@/components/page-generator/components/views/ui-elements/grid/vuesax/GridVuesax'

//DataList
// import dataViewSidebar from '@/components/page-generator/components/views/ui-elements/data-list/DataViewSidebar'
// import dataListListView from '@/components/page-generator/components/views/ui-elements/data-list/list-view/DataListListView'
// import dataListThumbView from '@/components/page-generator/components/views/ui-elements/data-list/thumb-view/DataListThumbView'

// //Card Components
import cardActionsAdd from '@/components/page-generator/components/views/ui-elements/card/CardActions'
import cardAnalyticsAdd from '@/components/page-generator/components/views/ui-elements/card/CardAnalytics'
import cardBasicAdd from '@/components/page-generator/components/views/ui-elements/card/CardBasic'
import cardColorsAdd from '@/components/page-generator/components/views/ui-elements/card/CardColors'
import cardStatisticsAdd from '@/components/page-generator/components/views/ui-elements/card/CardStatistics'

// //Forms

// import checkBoxAdd from '@/components/page-generator/components/views/forms/form-elements/checkbox/Checkbox'
// import inputAdd from '@/components/page-generator/components/views/forms/form-elements/input/Input'
// import numberInputAdd from '@/components/page-generator/components/views/forms/form-elements/number-input/NumberInput'
// import radioAdd from '@/components/page-generator/components/views/forms/form-elements/radio/Radio'
// import selectAdds from '@/components/page-generator/components/views/forms/form-elements/select/Select'
// import switchAdd from '@/components/page-generator/components/views/forms/form-elements/switch/Switch'
// import textareaAdd from '@/components/page-generator/components/views/forms/form-elements/textarea/Textarea'
// import formInputGroupAdd from '@/components/page-generator/components/views/forms/form-input-group/FormInputGroup'
// // import formValidationAdd from '@/components/page-generator/components/views/forms/form-validation/FormValidation'
// // import formWizardAdd from '@/components/page-generator/components/views/forms/form-wizard/FormWizard'
// import formLayoutsAdd from '@/components/page-generator/components/views/forms/FormLayouts.vue'

// //Table
// import tabled from '@/components/page-generator/components/views/ui-elements/table/Table.vue'

// //Extra Components
// import accessControllAdd from '@/components/page-generator/components/views/components/extra-components/access-control/AccessControl'
import autocompleteAdd from '@/components/page-generator/components/views/components/extra-components/autocomplete/Autocomplete'
import carouselAdd from '@/components/page-generator/components/views/components/extra-components/carousel/Carousel'
import clipboardAdd from '@/components/page-generator/components/views/components/extra-components/clipboard/Clipboard'
import contextMenuAdd from '@/components/page-generator/components/views/components/extra-components/context-menu/ContextMenu.vue'
import datePickerAdd from '@/components/page-generator/components/views/components/extra-components/datepicker/Datepicker'
import dateTimePickerAdd from '@/components/page-generator/components/views/components/extra-components/datetime-picker/DatetimePicker'
import dragAndDropAdd from '@/components/page-generator/components/views/components/extra-components/drag-and-drop/DragAndDrop'
import exportAdd from '@/components/page-generator/components/views/components/extra-components/import-export/Export'
import exportSelectedAdd from '@/components/page-generator/components/views/components/extra-components/import-export/ExportSelected'
import importAdd from '@/components/page-generator/components/views/components/extra-components/import-export/Import'
import quillEditor from '@/components/page-generator/components/views/components/extra-components/quill-editor/QuillEditor'
import selectAdd from '@/components/page-generator/components/views/components/extra-components/select/Select'
import starRatingsAdd from '@/components/page-generator/components/views/components/extra-components/star-ratings/StarRatings'
import treeAdd from '@/components/page-generator/components/views/components/extra-components/tree/Tree'

// //VUESAX
import alertAdd from '@/components/page-generator/components/views/components/vuesax/alert/Alert'
import avatarAdd from '@/components/page-generator/components/views/components/vuesax/avatar/Avatar'
import breadcrumbAdd from '@/components/page-generator/components/views/components/vuesax/breadcrumb/Breadcrumb'
import buttonAdd from '@/components/page-generator/components/views/components/vuesax/button/Button.vue'
import buttonGroupAdd from '@/components/page-generator/components/views/components/vuesax/button-group/ButtonGroup.vue'
import chipAdd from '@/components/page-generator/components/views/components/vuesax/chip/Chip.vue'
import collapseAdd from '@/components/page-generator/components/views/components/vuesax/collapse/Collapse.vue'
import dialogsAdd from '@/components/page-generator/components/views/components/vuesax/dialogs/Dialogs.vue'
import dividerAdd from '@/components/page-generator/components/views/components/vuesax/divider/Divider.vue'
import dropdownAdd from '@/components/page-generator/components/views/components/vuesax/dropdown/Dropdown.vue'
import listAdd from '@/components/page-generator/components/views/components/vuesax/list/List.vue'
import loadingAdd from '@/components/page-generator/components/views/components/vuesax/loading/Loading.vue'
import imageAdd from '@/components/page-generator/components/views/components/vuesax/images/Images.vue'
import navbarAdd from '@/components/page-generator/components/views/components/vuesax/navbar/Navbar.vue'
import notificationsAdd from '@/components/page-generator/components/views/components/vuesax/notifications/Notifications.vue'
import paginationAdd from '@/components/page-generator/components/views/components/vuesax/pagination/Pagination.vue'
import popupAdd from '@/components/page-generator/components/views/components/vuesax/popup/Popup.vue'
import progressAdd from '@/components/page-generator/components/views/components/vuesax/progress/Progress.vue'
import sidebarAdd from '@/components/page-generator/components/views/components/vuesax/sidebar/Sidebar.vue'
import sliderAdd from '@/components/page-generator/components/views/components/vuesax/slider/Slider.vue'
import tabsAdd from '@/components/page-generator/components/views/components/vuesax/tabs/Tabs.vue'
import tooltipAdd from '@/components/page-generator/components/views/components/vuesax/tooltip/Tooltip.vue'
import uploadAdd from '@/components/page-generator/components/views/components/vuesax/upload/Upload.vue'

// //Apps
// import eCommerce from '@/components/page-generator/components/views/apps/eCommerce/ECommerceShop'

// //Pages
// import login from '@/components/page-generator/components/views/pages/login/Login.vue'
// import register from '@/components/page-generator/components/views/pages/register/Register.vue'
// import comingSoon from '@/components/page-generator/components/views/pages/ComingSoon.vue'
// import error404 from '@/components/page-generator/components/views/pages/Error404.vue'
// import error500 from '@/components/page-generator/components/views/pages/Error500.vue'
// import faq from '@/components/page-generator/components/views/pages/Faq.vue'
// import forgotPassword from '@/components/page-generator/components/views/pages/ForgotPassword.vue'
// import invoice from '@/components/page-generator/components/views/pages/Invoice.vue'
// import knowledgeBase from '@/components/page-generator/components/views/pages/KnowledgeBase.vue'
// import lockScreen from '@/components/page-generator/components/views/pages/LockScreen.vue'
// import maintenance from '@/components/page-generator/components/views/pages/Maintenance.vue'
// import notAuthorized from '@/components/page-generator/components/views/pages/NotAuthorized.vue'
// import profile from '@/components/page-generator/components/views/pages/Profile.vue'
// import resetPassword from '@/components/page-generator/components/views/pages/ResetPassword.vue'
// import search from '@/components/page-generator/components/views/pages/Search.vue'

// import contentSet from '@/components/page-generator/components/views/content/content.vue'
// import ownComponents from '@/components/page-generator/components/views/own_components/index.vue'
// import imageUpload from '@/components/forms/form-generator/components/imageUpload.vue'

import styleEdit from './style/index'
import inlineEdit from './inline/index'
import contentEdit from './content/index'
import classEdit from './class/index'

// // Cell Renderer
// import CellRendererActionBuilder from '@/components/tables/ag-grid-table/cell-renderer/actions_builder.vue'
// import CellRendererAction from '@/components/tables/ag-grid-table/cell-renderer/actions.vue'

// import CellRendererStatus from '@/components/cell-renderer/CellRendererStatus.vue'
// import CellRendererVerified from '@/components/cell-renderer/CellRendererVerified.vue'
// import CellRendererActions from '@/components/cell-renderer/CellRendererActions.vue'
// import CellRendererAddStore from '@/components/cell-renderer/CellRendererAddStore'
// import tree from '@/components/extensions/tree'
import moment from 'moment'
export default {
  layout: 'full_page',
  components: {
    // Cell Renderer
    // CellRendererActionBuilder,
    // CellRendererAction,

    // CellRendererStatus,
    // CellRendererVerified,
    // CellRendererActions,
    // CellRendererAddStore,

    //Edit
    styleEdit,
    inlineEdit,
    contentEdit,
    classEdit,

    // contentSet,
    // ownComponents,

    mainGrid,
    grid,
    grid2,
    //Tailwind
    ButtonsTailwind,
    FormsTailwind,
    NavigationTailwind,
    CardsTailwind,
    WidgetTailwind,
    TablesTailwind,
    LayoutsTailwind,
    //VUESAX
    alertAdd,
    avatarAdd,
    breadcrumbAdd,
    buttonAdd,
    buttonGroupAdd,
    chipAdd,
    collapseAdd,
    dialogsAdd,
    dividerAdd,
    dropdownAdd,
    listAdd,
    imageAdd,
    loadingAdd,
    navbarAdd,
    notificationsAdd,
    paginationAdd,
    popupAdd,
    progressAdd,
    sidebarAdd,
    sliderAdd,
    tabsAdd,
    tooltipAdd,
    uploadAdd,

    // //DataList
    // dataViewSidebar,
    // dataListListView,
    // dataListThumbView,

    //Card Components
    cardActionsAdd,
    cardAnalyticsAdd,
    cardBasicAdd,
    cardColorsAdd,
    cardStatisticsAdd,

    // //Forms
    // checkBoxAdd,
    // inputAdd,
    // numberInputAdd,
    // radioAdd,
    // selectAdds,
    // switchAdd,
    // textareaAdd,
    // formInputGroupAdd,
    // // formValidationAdd,
    // // formWizardAdd,
    // formLayoutsAdd,
    // //Table
    // tabled,

    // //Apps
    // eCommerce,
    // //Pages
    // login,
    // register,
    // comingSoon,
    // error404,
    // error500,
    // faq,
    // forgotPassword,
    // invoice,
    // knowledgeBase,
    // lockScreen,
    // maintenance,
    // notAuthorized,
    // profile,
    // resetPassword,
    // search,

    //Extra Components
    // accessControllAdd,
    autocompleteAdd,
    carouselAdd,
    clipboardAdd,
    contextMenuAdd,
    datePickerAdd,
    dateTimePickerAdd,
    dragAndDropAdd,
    exportAdd,
    exportSelectedAdd,
    importAdd,
    quillEditor,
    selectAdd,
    starRatingsAdd,
    treeAdd,

    // imageUpload,

    //Extensions
    // tree
  },

  data() {
    return {
      page_name: '',
      component_name: '',
      b_type: 'page',
      item: 'Events',
      editAll: false,

      popup: false,
      popup2: false,
      list: [],
    }
  },
  computed: {
    uploaded_images() {
      return this.$store.state.form.uploaded_images
    },

    editing_page() {
      return this.$store.state.page_builder.editing_page
    },
    edited_page() {
      return this.$store.state.page_builder.edited_page
    },
    active_card() {
      return this.$store.state.page_builder.active_card
    },
    component_show() {
      return this.$store.state.page_builder.component_show
    },
    edit_all() {
      return this.$store.state.page_builder.edit_all
    },

    component_list() {
      return this.$store.state.page_builder.component_list
    },
    active_edit_card() {
      return this.$store.state.page_builder.active_edit_card
    },
    edit_component() {
      return this.$store.state.page_builder.edit_component
    },
    activeBusinessInfo() {
      return this.$store.state.business.app_active_business
    },
    activeUserInfo() {
      return this.$store.state.user.app_active_user
    },
    pages() {
      return this.$store.state.page_builder.pages
    },
    columnDefs() {
      switch (this.item) {
        case 'Events':
          //   return [
          //     {
          //       headerName: 'First Name',
          //       field: 'firstname',
          //       width: 175,
          //       filter: true,
          //       checkboxSelection: true,
          //       headerCheckboxSelectionFilteredOnly: true,
          //       headerCheckboxSelection: true
          //     },
          //     {
          //       headerName: 'Last Name',
          //       field: 'lastname',
          //       filter: true,
          //       width: 175
          //     },
          //     {
          //       headerName: 'Email',
          //       field: 'email',
          //       filter: true,
          //       width: 250,
          //       pinned: 'left'
          //     },
          //     {
          //       headerName: 'Company',
          //       field: 'company',
          //       filter: true,
          //       width: 250
          //     },
          //     {
          //       headerName: 'City',
          //       field: 'city',
          //       filter: true,
          //       width: 150
          //     },
          //     {
          //       headerName: 'Country',
          //       field: 'country',
          //       filter: true,
          //       width: 150
          //     },
          //     {
          //       headerName: 'State',
          //       field: 'state',
          //       filter: true,
          //       width: 125
          //     },
          //     {
          //       headerName: 'Zip',
          //       field: 'zip',
          //       filter: true,
          //       width: 125
          //     },
          //     {
          //       headerName: 'Followers',
          //       field: 'followers',
          //       filter: 'agNumberColumnFilter',
          //       width: 125
          //     }
          //   ]
          return [
            {
              headerName: 'Description',
              field: 'desc',
              width: 450,
              filter: true,
              checkboxSelection: true,
              headerCheckboxSelectionFilteredOnly: true,
              headerCheckboxSelection: true,
            },
            {
              headerName: 'Item Name',
              field: 'i_name',
              filter: true,
              width: 250,
              pinned: 'left',
            },
            {
              cellRendererFramework: 'CellRendererActionBuilder',
              headerName: 'Add to Page',
              field: 'i_name',
              width: 250,
            },
            {
              cellRendererFramework: 'CellRendererAction',
              headerName: 'Edit/Delete',
              field: 'i_name',
              width: 250,
            },
          ]
          break
        case 'Customer':
          return [
            {
              headerName: 'Website',
              field: 'website',
              width: 175,
              filter: true,
              checkboxSelection: true,
              headerCheckboxSelectionFilteredOnly: true,
              headerCheckboxSelection: true,
            },

            {
              headerName: 'Title',
              field: 'title',
              filter: true,
              width: 250,
              pinned: 'left',
            },
          ]
          break

        default:
          break
      }
    },
    schema() {
      switch (this.item) {
        case 'Events':
          //   return [
          //     {
          //        title: 'TextInput',
          //       placeholder: 'Name',
          //       type: 'text',
          //       label: 'Name',
          //       name: 'title'
          //     },
          //     {
          //        title: 'TextInput',
          //       placeholder: 'Website',
          //       type: 'text',
          //       label: 'Website',
          //       name: 'website'
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'number',
          //       placeholder: 'Contact Number',
          //       name: 'number',
          //       label: 'Contact Number',
          //       minValue: 0
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'number',
          //       placeholder: 'Secondary Contact Number',
          //       name: 'number2',
          //       label: 'Secondary Contact Number',
          //       minValue: 0
          //     },
          //     {
          //        title: 'TextInput',
          //       type: 'email',
          //       placeholder: 'Email',
          //       label: 'Email',
          //       name: 'email'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'ImageUpload',
          //       placeholder: 'Image Upload',
          //       label: 'Image Upload',
          //       name: 'imageUpload'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'QuilEditor',
          //       name: 'html',
          //       label: 'Description',
          //       placeholder: 'Description'
          //     },
          //     {
          //        title: 'Divider',
          //       name: 'Divider'
          //     },
          //     {
          //        title: 'GoogleAddress',
          //       placeholder: 'Address',
          //       label: 'Address',
          //       name: 'Address'
          //     }
          //   ]
          return [
            {
              title: 'TextInput',
              placeholder: 'Item Name',
              type: 'text',
              label: 'Item Name',
              name: 'i_name',
            },
            {
              title: 'QuilEditor',
              name: 'desc',
              label: 'Description',
              placeholder: 'Description',
            },
          ]
          break
        case 'Customer':
          return [
            {
              title: 'TextInput',
              placeholder: 'Name',
              type: 'text',
              label: 'Name',
              name: 'title',
            },
            {
              title: 'TextInput',
              placeholder: 'Website',
              type: 'text',
              label: 'Website',
              name: 'website',
            },
          ]
          break

        default:
          break
      }
    },
  },
  watch: {
    active_card: function () {
      this.popup = this.active_card
    },
    active_edit_card: function () {
      this.popup2 = this.active_edit_card
    },
  },

  methods: {
    submitToParent(data) {
      this.$emit('askParentToAddToList', data)
    },
    newPage() {
      let page = {
        component_list: [],
      }
      this.$store.commit('page_builder/EDITING_PAGE', false)
      this.$store.commit('page_builder/COMPONENTS_LIST_SET', page)
    },
    saveComponent() {
      let vm = this

      let ref = this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('components')

      ref
        .add({
          uid: vm.activeUserInfo.uid,
          component_name: vm.component_name,
          component_list: vm.component_list,
          created_date: moment().format('DD-MM-YYYY'),
          created_month: moment().format('MM-YYYY'),
        })
        .then(function () {
          vm.successUpload()
        })
    },
    savePage() {
      let vm = this

      let ref = this.$fireStore
        .collection('apps')
        .doc('builder')
        .collection(this.activeBusinessInfo.b_uid)
        .doc('page_builder')
        .collection('page_builder')

      if (this.editing_page) {
        ref
          .doc(vm.edited_page.id)
          .update({
            component_list: vm.component_list,
            updated_date: moment().format('DD-MM-YYYY'),
            updated_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      } else {
        ref
          .add({
            uid: vm.activeUserInfo.uid,
            page_name: vm.page_name,
            component_list: vm.component_list,
            created_date: moment().format('DD-MM-YYYY'),
            created_month: moment().format('MM-YYYY'),
          })
          .then(function () {
            vm.successUpload()
          })
      }
    },
    successUpload() {
      this.$vs.notify({
        color: 'success',
        title: 'Upload Success',
        text: 'Whoop whoop, been uploaded',
      })
    },
    addEdit() {
      let payload = {
        active_card: false,
        active_edit_card: false,
        component_show: 'builder',
        index: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)

      this.$store.commit('page_builder/EDIT_ALL', !this.edit_all)
    },
    addGrid(component, show) {
      let payload = {
        active_card: show,
        active_edit_card: false,
        component_show: component,
        index: -1,
      }
      this.$store.commit('page_builder/COMPONENTS_NEEDED', payload)
    },
  },
}
</script>
