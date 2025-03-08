<template>
    <div id="dropzone" class="dropzone"></div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Dropzone, { DropzoneOptions } from "dropzone";
  import "dropzone/dist/dropzone.css";
  
  export default defineComponent({
    name: "VueDropzone",
    props: {
      url: {
        type: String,
        required: true,
      },
      options: {
        type: Object as () => Partial<DropzoneOptions>,
        default: () => ({}),
      },
      additionalParams: {
        type: Object as () => Record<string, any>,
        default: () => ({}),
      },
    },
    data() {
      return {
        dropzoneInstance: null as Dropzone | null,
      };
    },
    mounted() {
      // Prevent Dropzone from auto-instantiating
      Dropzone.autoDiscover = false;
  
      // Initialize Dropzone
      this.dropzoneInstance = new Dropzone("#dropzone", {
        url: this.url,
        ...this.options,
      });
  
      // Add dynamic parameters during the "sending" event
      this.dropzoneInstance.on("sending", (file, xhr, formData) => {
        Object.keys(this.additionalParams).forEach((key) => {
          formData.append(key, this.additionalParams[key]);
        });
      });
  
      // Add other event listeners
      this.dropzoneInstance.on("success", this.onSuccess);
      this.dropzoneInstance.on("error", this.onError);
      this.dropzoneInstance.on("queuecomplete", this.onQueueComplete);
      this.dropzoneInstance.on("addedfile", this.onFileAdded);
    },
    beforeUnmount() {
      // Clean up Dropzone instance
      this.dropzoneInstance?.destroy();
      this.dropzoneInstance = null;
    },
    methods: {
      onSuccess(file: Dropzone.DropzoneFile, response: any) {
   
          response.data.forEach(element => { 
            this.$store.state.form_theme.cover.images.push(element) 
          });
            
          this.$store.state.form_theme.cover.images = [
            ...new Set(this.$store.state.form_theme.cover.images.map((img: any) => JSON.stringify(img))),
          ].map((img: string) => JSON.parse(img));
    
      },
      onError(file: Dropzone.DropzoneFile, errorMessage: string | Error, xhr: XMLHttpRequest) {
        // console.error("Error uploading file:", file, errorMessage);
      },
      onQueueComplete() {  this.dropzoneInstance.removeAllFiles(true); 
      },
      onFileAdded(file: Dropzone.DropzoneFile) {
        // console.log("File added:", file);
      },
    },
  });
  </script>
   