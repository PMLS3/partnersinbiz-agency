<template>
  <vs-tabs alignment="fixed">
    <!-- Grid -->

    <vs-tab label="Grid">
      <ExampleGridTailwind />
    </vs-tab>
    <!-- Data List -->

    <vs-tab label="Data List" v-if="allowedType == 'all'">
      <vs-tabs alignment="fixed" position="left">
        <vs-tab label="List View"> </vs-tab>
        <vs-tab label="Thumb View"> </vs-tab>
      </vs-tabs>
    </vs-tab>

    <!-- Cards -->
    <vs-tab label="Card" v-if="allowedType == 'all'">
      <div>
        <vs-tabs alignment="fixed" position="left">
          <vs-tab label="Basic"> </vs-tab>
          <vs-tab label="Statistics"> </vs-tab>
          <vs-tab label="Analytics"> </vs-tab>
          <vs-tab label="Card Actions"> </vs-tab>
          <vs-tab label="Card Colors"> </vs-tab>
        </vs-tabs>
      </div>
    </vs-tab>
    <!-- Cards -->
    <vs-tab label="Transitions" v-if="allowedType == 'all'">
      <AnimationTransition />
    </vs-tab>
    <!-- Components -->
    <vs-tab label="Components" v-if="allowedType == 'all'">
      <div>
        <vs-tabs alignment="fixed" position="left">
          <!-- UI -->

          <!-- <vs-tab label="Alert"> </vs-tab> -->
          <vs-tab label="Avatar"> <ExampleTailwindAvatar /> </vs-tab>
          <vs-tab label="Breadcrumb"> </vs-tab>
          <vs-tab label="Button"><ExampleTailwindButton /> </vs-tab>
          <vs-tab label="Button Groups"> </vs-tab>
          <vs-tab label="Chip"> </vs-tab>
          <vs-tab label="Collapse"> </vs-tab>
          <vs-tab label="Dialogs"> </vs-tab>
          <vs-tab label="Divider"> </vs-tab>
          <vs-tab label="Dropdown"> </vs-tab>
          <vs-tab label="List"> </vs-tab>
          <vs-tab label="Images"><ExampleTailwindImage /> </vs-tab>
          <vs-tab label="Loading"> </vs-tab>
          <vs-tab label="Navbar"> </vs-tab>
          <vs-tab label="Notifications"> </vs-tab>
          <vs-tab label="Pagination"> </vs-tab>
          <vs-tab label="Popup"> </vs-tab>
          <vs-tab label="Progress"> </vs-tab>
          <vs-tab label="Sidbar"> </vs-tab>
          <vs-tab label="Slider"> </vs-tab>
          <vs-tab label="Tabs"> </vs-tab>
          <vs-tab label="Tootip"> </vs-tab>
          <vs-tab label="Upload"> </vs-tab>
        </vs-tabs>
      </div>
    </vs-tab>
    <!-- Extensions -->

    <vs-tab label="Extensions" v-if="allowedType == 'all'">
      <div>
        <vs-tabs alignment="fixed" position="left">
          <vs-tab label="Auto Complete"> </vs-tab>
          <vs-tab label="Carousel"> </vs-tab>
          <vs-tab label="Clipboard"> </vs-tab>
          <vs-tab label="Context Menu"> </vs-tab>
          <vs-tab label="Date Picker"> </vs-tab>
          <vs-tab label="Date Time Picker"> </vs-tab>
          <vs-tab label="Drag and drop"> </vs-tab>
          <vs-tab label="Import and Export">
            <vs-tabs alignment="fixed">
              <vs-tab label="Export"> </vs-tab>
              <vs-tab label="Export Selected"> </vs-tab>
              <vs-tab label="Imported">
                <div></div>
              </vs-tab>
            </vs-tabs>
          </vs-tab>
          <vs-tab label="Quill Editor"> </vs-tab>
          <vs-tab label="Select"> </vs-tab>
          <vs-tab label="Star ratings"> </vs-tab>
          <vs-tab label="Tree"> </vs-tab>
        </vs-tabs>
      </div>
    </vs-tab>

    <vs-tab label="Pages" v-if="allowedType == 'all'">
      <ExamplePages />
    </vs-tab>
    <!-- Apps -->
    <vs-tab label="Content">
      <ExampleUiContent />
    </vs-tab>

    <vs-tab label="Apps" v-if="allowedType == 'all'">
      <vs-tabs alignment="fixed" position="left">
        <vs-tab label="Events" @click="item = 'Events'"> </vs-tab>
        <vs-tab label="eCommerce"> </vs-tab>
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
    <vs-tab label="Forms & Tables" v-if="allowedType == 'all'">
      <vs-tabs alignment="fixed" position="left">
        <vs-tab label="Form Elements">
          <vs-tabs alignment="fixed" position="left">
            <vs-tab label="Checkbox"> </vs-tab>
            <vs-tab label="Input"> </vs-tab>
            <vs-tab label="Number Input"> </vs-tab>
            <vs-tab label="Radio"> </vs-tab>
            <vs-tab label="Select"> </vs-tab>
            <vs-tab label="Switch"> </vs-tab>
            <vs-tab label="Text Area"> </vs-tab>
          </vs-tabs>
        </vs-tab>
        <vs-tab label="Form Input Group"> </vs-tab>
        <vs-tab label="Form Validation">
          <!-- <formValidationAdd /> -->
        </vs-tab>
        <vs-tab label="Form Wizard">
          <!-- <formWizardAdd /> -->
        </vs-tab>
        <vs-tab label="Form Layout"> </vs-tab>
        <vs-tab label="Table"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="Own Components" v-if="allowedType == 'all'"> </vs-tab>
    <vs-tab label="TailWind">
      <vs-tabs alignment="fixed" position="left" v-if="allowedType == 'all'">
        <vs-tab label="Buttons"> </vs-tab>
        <vs-tab label="Forms"> </vs-tab>
        <vs-tab label="Navigations"> </vs-tab>
        <vs-tab label="Cards"> </vs-tab>
        <vs-tab label="Widget"> </vs-tab>
        <vs-tab label="Tables"> </vs-tab>
        <vs-tab label="Layouts"> </vs-tab>
      </vs-tabs>
    </vs-tab>
    <vs-tab label="WireFrame">
      <ExampleWireFrame />
    </vs-tab>
  </vs-tabs>
</template>

<script>
export default {
  props: {
    allowedType: {
      type: String,
      default: 'all',
    },
  },
  data() {
    return {}
  },
}
</script>

<style></style>
