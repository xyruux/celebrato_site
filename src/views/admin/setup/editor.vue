<template>
    <div v-if="$store.state.editor_dialog" >
          <component_theme_color   v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 2" />
               
              <v-card-actions class="my-0 py-0">
              <v-spacer></v-spacer>
                    <v-btn @click="save" color="primary"  ><v-icon start>mdi-check</v-icon> Ok</v-btn>
                    <v-spacer></v-spacer>
            </v-card-actions>    
    </div>
  </template>
  
<style >
.v-color-picker-edit{
  margin-top: 0;
}
.v-color-picker__controls{
  padding-bottom: 0; 
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'   
import component_text from '../tools/text.vue'
import component_background from '../tools/background.vue'
import component_theme_color from '../tools/colors.vue'
import component_carousel from '../tools/carousel.vue'
import component_entourage from '../tools/entourage.vue'
import component_video from '../tools/video.vue'
import component_timeline from '../tools/timeline.vue'
import component_venue from '../tools/venue.vue'
import component_tiles from '../tools/tiles.vue'
import component_dresscode from '../tools/dress_code.vue'
import component_otherdetails from '../tools/other_details.vue'
import component_faq from '../tools/faq.vue'
import component_others from '../tools/others.vue'
import component_spotify from '../tools/spotify.vue'

export default defineComponent({ 
  components: {
    component_text,
    component_background,
    component_theme_color,
    component_carousel,
    component_entourage,
    component_video,
    component_timeline,
    component_venue,
    component_tiles,
    component_dresscode,
    component_otherdetails,
    component_faq,
    component_others,
    component_spotify,
  },
  data() {
        return {  
         
        }
    },
  
    methods: {
        save(){ 
            this.$store.state.editor_dialog = false;
        },
      },
    
})
</script>