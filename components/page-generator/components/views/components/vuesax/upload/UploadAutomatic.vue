<!-- =========================================================================================
    File Name: UploadAutomatic.vue
    Description: Uploading files automatically
    ----------------------------------------------------------------------------------------
  
========================================================================================== -->


<template>
    <vx-card title="Automatic" code-toggler>

        <p>You can enable automatic submission with the <code>Automatic</code> property that executes the shipment by changing the value of the <code>input</code></p>

        <div class="mt-5">
            <vs-upload automatic action="https://jsonplaceholder.typicode.com/posts/" @on-success="successUpload" />
        </div>

      

    </vx-card>
</template>

<script>
export default {
  methods: {
    successUpload () {
      this.$vs.notify({ color: 'success', title: 'Upload Success', text: 'Lorem ipsum dolor sit amet, consectetur' })
    }
  }
}
</script>
