<!-- =========================================================================================
    File Name: DropdownButton.vue
    Description: Create dropdown using button
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->

<template>
  <vx-card title="Button" code-toggler>
    <p>
      You can customize the component or element that initialize the dropdown in
      this case, it is a Button that is the most common
    </p>

    <vs-alert color="primary" icon="new_releases" active="true" class="mt-5">
      <p>
        The component or element that initializes the dropdown is the one inside
        it with the possibility of total customization and flexibility in the
        required use
      </p>
    </vs-alert>

    <vs-alert color="primary" icon="new_releases" active="true" class="my-5">
      <p>
        Vuesax uses the Google Material Icons font library by default. For a
        list of all available icons, visit the official
        <a href="https://material.io/icons/" target="_blank"
          >Material Icons page</a
        >.
      </p>
      <p>
        FontAwesome and other fonts library are supported. Simply use the
        icon-pack with fa or fas. You still need to include the Font Awesome
        icons in your project.
      </p>
    </vs-alert>

    <prism class="rounded-lg">
      &lt;vs-dropdown&gt; &lt;!-- element that initializes the dropdown --&gt;
      &lt;vs-dropdown-menu&gt; &lt;!-- items and elements within the menu or
      custom dropdown --&gt; &lt;/vs-dropdown-menu&gt; &lt;/vs-dropdown&gt;
    </prism>

    <div class="mt-5 demo-alignment">
      <div class="dropdown-button-container">
        <vs-button class="btnx" type="filled">Dropdown</vs-button>
        <vs-dropdown>
          <vs-button
            class="btn-drop"
            type="filled"
            icon="expand_more"
          ></vs-button>
          <vs-dropdown-menu>
            <vs-dropdown-item> option 1 </vs-dropdown-item>
            <vs-dropdown-item> option 2 </vs-dropdown-item>

            <vs-dropdown-group>
              <vs-dropdown-item> option 1 </vs-dropdown-item>
              <vs-dropdown-item> option 2 </vs-dropdown-item>
            </vs-dropdown-group>

            <vs-dropdown-item divider> option 3 </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <div class="dropdown-button-container">
        <vs-button class="btnx" color="success" type="gradient"
          >Dropdown</vs-button
        >
        <vs-dropdown>
          <vs-button
            class="btn-drop"
            color="success"
            type="gradient"
            icon="more_horiz"
          ></vs-button>
          <vs-dropdown-menu>
            <vs-dropdown-item> Home </vs-dropdown-item>
            <vs-dropdown-item> Contributors </vs-dropdown-item>
            <vs-dropdown-item divider> Logout </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <div class="dropdown-button-container">
        <vs-button class="btnx" type="line" color="danger">Icons</vs-button>
        <vs-dropdown>
          <vs-button
            class="btn-drop"
            type="line"
            color="danger"
            icon="mood"
          ></vs-button>
          <vs-dropdown-menu>
            <vs-dropdown-item>
              <i class="material-icons"> mood </i>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <i class="material-icons"> mood_bad </i>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <i class="material-icons"> sentiment_dissatisfied </i>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <i class="material-icons"> sentiment_satisfied </i>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <i class="material-icons"> sentiment_very_dissatisfied </i>
            </vs-dropdown-item>
            <vs-dropdown-item>
              <i class="material-icons"> sentiment_very_satisfied </i>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
    </div>
  </vx-card>
</template>

<script>
import Prism from 'vue-prism-component'

export default {
  data: () => ({
    value1: '',
    value2: ''
  }),
  components: {
    Prism
  }
}
</script>
