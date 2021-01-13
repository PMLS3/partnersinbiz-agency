<!-- =========================================================================================
  File Name: FormValidationCustomErrorMessages.vue
  Description: Dispalying custom error messages as error
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Custom error messages" code-toggler>

    <p>With vee-validate you can display your own custom error messages</p>
    <div class="mt-5">
      <form>
        <vs-input v-validate="'required|alpha'" placeholder="First Name" name="first_name" v-model="first_name" class="mt-5" />
        <span class="text-danger text-sm" v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>

        <vs-input v-validate="'required|alpha'" placeholder="Last Name" name="last_name" v-model="last_name" class="mt-5" />
        <span class="text-danger text-sm" v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>

        <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Submit</vs-button>
      </form>
    </div>

   
  </vx-card>
</template>

<script>
// For custom error message
import { Validator } from 'vee-validate'
const dict = {
  custom: {
    first_name: {
      required: 'Please enter your first name',
      alpha: 'Your first name may only contain alphabetic characters'
    },
    last_name: {
      required: 'Please enter your last name',
      alpha: 'Your last name may only contain alphabetic characters'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  data () {
    return {
      first_name: '',
      last_name: ''
    }
  },
  methods: {
    submitForm () {
      this.$validator.validateAll().then(result => {
        if (result) {
          // if form have no errors
          alert('form submitted!')
        } else {
          // form have errors
        }
      })
    }
  }
}
</script>
