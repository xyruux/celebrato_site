<template>
    <div v-if="!['invitation','preview'].includes($route.name as string)">
      <v-dialog :fullscreen="$vuetify.display.mobile" width="auto" v-model="$store.state.editor_dialog">
        <v-card flat  class="rounded-xl"   style="border: 2px solid #fbeb04;" color="#333333" > 
              <v-row>  
        <!-- 0 --> 
                <v-col cols="12" style="width: 80rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == '0'"> 
                  <!-- Background -->
                  <component_background/>
                  </v-col>
        <!-- 1 --> 
                  <v-col cols="12"  style="min-width: 60rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 1"> 
                    <!-- Title -->
                    <!-- Subtitle -->
                    <!-- Message -->
                    <!-- Date -->
                      <component_text/>
                  </v-col>
        <!-- 2 --> 
                  <v-col cols="12" style="width: 50rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 2"> 
                    <component_theme_color/>
                  </v-col>
        <!-- 3 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 3"> 
                    <component_carousel/>
                  </v-col>
        <!-- 4 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 4"> 
                    <component_entourage /> 
                  </v-col> 
        <!-- 5 -->
                  <v-col cols="12" style="width:70rem; " v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 5"> 
                    <component_video /> 
                  </v-col>
        <!-- 6 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 6"> 
                    <component_timeline /> 
                  </v-col> 
        <!-- 7 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 7"> 
                    <component_venue /> 
                  </v-col> 
        <!-- 8 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 8"> 
                    <component_tiles /> 
                  </v-col> 
        <!-- 9 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 9"> 
                    <component_dresscode /> 
                  </v-col>  
        <!-- 10 -->
                  <v-col cols="12" style="width:40rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 10"> 
                    <component_otherdetails /> 
                  </v-col>  
       <!-- 11 -->
                 <v-col cols="12" style="width:60rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 11"> 
                    <component_faq /> 
                  </v-col>  
       <!-- 12 -->
                  <v-col cols="12" style="width:60rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 12"> 
                    <component_others /> 
                  </v-col>  
       <!-- 13 -->
       <v-col cols="12" style="width:60rem;" v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 13"> 
                    <component_spotify /> 
                  </v-col>  
              </v-row> 
              <v-card-actions class="my-0 py-0">
              <v-spacer></v-spacer>
                    <v-btn @click="save" color="primary"  ><v-icon start>mdi-check</v-icon> Ok</v-btn>
                    <v-spacer></v-spacer>
            </v-card-actions>  
              </v-card>
      </v-dialog>
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
import component_theme_color from '../tools/theme_colors.vue'
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