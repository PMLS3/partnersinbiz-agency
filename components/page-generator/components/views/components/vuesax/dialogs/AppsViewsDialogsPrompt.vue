<!-- =========================================================================================
  File Name: DialogsPrompt.vue
  Description: Add dialog of type prompt
  ----------------------------------------------------------------------------------------

========================================================================================== -->


<template>
  <vx-card title="Prompt" code-toggler>

    <p>To add a dialog of type prompt we have a global function a completely independent component <code>vs-prompt</code>. This allows more flexibility with the input and ability to add any type of input and components</p>

    <div class="my-3">
      <span>The properties of the component are equivalent to those of the global function only with the vs before each property something like</span>
      <vx-list :list="['function: color', 'component = vsColor']"></vx-list>
    </div>

    <div class="demo-alignment">
      <vs-button @click="activePrompt = true" color="primary" type="border">Run prompt</vs-button>
      <vs-button @click="activePrompt2 = true" color="primary" type="border">Run prompt inputs</vs-button>
      <div class="op-block">Security Code: {{ val == null ? 'null' : val }}</div>
      <div class="op-block">
        Name: {{valMultipe.value1}} |
        Last Name: {{valMultipe.value2}}
      </div>

    </div>

    <vs-prompt
      @cancel="val=''"
      @accept="acceptAlert"
      @close="close"
      :active.sync="activePrompt">
      <div class="con-exemple-prompt">
        <span>Enter the security code</span>
        <vs-input placeholder="Code" vs-placeholder="Code" v-model="val" class="mt-3 w-full" />
      </div>
    </vs-prompt>

    <vs-prompt
      @cancel="clearValMultiple"
      @accept="acceptAlert"
      @close="close"
      :is-valid="validName"
      :active.sync="activePrompt2">
      <div class="con-exemple-prompt">
        Enter your first and last name to <b>continue</b>.
      <vs-input placeholder="Name" v-model="valMultipe.value1" class="mt-4 mb-2 w-full" />
      <vs-input placeholder="Last Name" v-model="valMultipe.value2" class="w-full" />

      <vs-alert :active="!validName" color="danger" vs-icon="new_releases" class="mt-4" >
        Fields can not be empty please enter the data
      </vs-alert>
      </div>
    </vs-prompt>

    

  </vx-card>
</template>

<script>
export default {
  data () {
    return {
      activePrompt:false,
      activePrompt2:false,
      val:'',
      valMultipe:{
        value1:'',
        value2:''
      }
    }
  },
  computed:{
    validName () {
      return this.valMultipe.value1.length > 0 && this.valMultipe.value2.length > 0
    }
  },
  methods:{
    acceptAlert () {
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close () {
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
    clearValMultiple () {
      this.valMultipe.value1 = ''
      this.valMultipe.value2 = ''
    }
  }
}
</script>
