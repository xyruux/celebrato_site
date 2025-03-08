<template>
  <div>  
    
        <v-navigation-drawer  v-if="editor" color="#333333" :class="$vuetify.display.mobile?'text-caption':''" :width="$vuetify.display.mobile?200:300"    :float="$vuetify.display.mobile" >
          <div class="d-flex">
          <v-btn class="mx-1" @click="editor = !editor" size="20"><v-icon>mdi-window-minimize</v-icon></v-btn>
          <v-spacer></v-spacer>
          <v-btn class="mx-1" @click="$router.push({name: 'admin-templates', query: {id: $route.query.id}})" size="20"><v-icon>mdi-arrow-left</v-icon></v-btn>
          <v-btn class="mx-1" @click="$router.push({name: 'admin-dashboard'})" size="20"><v-icon>mdi-home</v-icon></v-btn>
          </div>
          <v-img width="250px" v-if="!$vuetify.display.mobile" class="animate__animated animate__jackInTheBox" :src="logo" alt="Logo"></v-img>  
          <br v-if="!$vuetify.display.mobile">
          <hr class="ma-2">
          <br>
          <v-card  v-if="project_id" class="pa-2" color="transparent mogra-regular"  style="max-height: 45rem; overflow-y: auto;" flat>   
              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                    <div><v-icon size="x-small" start>mdi-pencil</v-icon> Theme Color  </div> 
                    <v-btn v-bind="props" :size="$vuetify.display.mobile?'x-small':'default'" variant="flat" icon class="mx-1"  @click="$store.state.editor_form = {color: [k ,$store.state.form_theme.demo?.colors]}"  v-for="(v,k) in $store.state.form_theme.demo?.colors" :key="k" :color="v"></v-btn>     
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_theme_color /> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                  <v-card  v-bind="props" color="transparent pa-1"  @click="$store.state.editor_form = {background: [0 ,$store.state.form_theme.demo?.background]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Background </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_background /> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                  <v-card  v-bind="props" color="transparent pa-1"  @click="$store.state.editor_form = {carousel: [0 ,$store.state.form_theme.demo?.carousel]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Slides </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_carousel /> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {video: [0 ,$store.state.form_theme.demo?.video]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Video </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_video /> 
                </v-card>
              </v-menu>



              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {tiles: [0 ,$store.state.form_theme.demo?.tiles]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Tiles </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_tiles /> 
                </v-card>
              </v-menu>
                
              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {spotify: [0 ,$store.state.form_theme.demo?.spotify]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Spotify </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_spotify/> 
                </v-card>
              </v-menu>
                
              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {timeline: [0 ,$store.state.form_theme.demo?.timeline]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Timeline </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_timeline/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {venue: [0 ,$store.state.form_theme.demo?.venue]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Venue </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_venue/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {entourage: [0 ,$store.state.form_theme.demo?.entourage]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Entourage </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_entourage/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {dresscode: [0 ,$store.state.form_theme.demo?.dresscode]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Dress Coode </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_dresscode/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {otherdetails: [0 ,$store.state.form_theme.demo?.otherdetails]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Other Details </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_otherdetails/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {faq: [0 ,$store.state.form_theme.demo?.faq]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> FAQ </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_faq/> 
                </v-card>
              </v-menu>

              <v-menu  :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }"> 
                <v-card  v-bind="props" color="transparent pa-1" @click="$store.state.editor_form = {others: [0 ,$store.state.form_theme.demo?.others]}" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Others </v-card>  
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_others/> 
                </v-card>
              </v-menu>

            <br>
        <div style="color: #fbeb04"><v-icon >mdi-circle-medium</v-icon> Text </div> 
            <template v-for="n in 12" :key="n">
              <v-menu :close-on-content-click="false" location="end">
                <template v-slot:activator="{ props }">
                  <v-card v-bind="props" 
                    @click="$store.state.editor_form = { [`text${n}`]: [1, $store.state.form_theme.demo?.[`text${n}`]] }" 
                    color="transparent pa-1" 
                    style="color: #FFD700">
                    <v-icon size="x-small" start>mdi-pencil</v-icon> 
                    {{ $store.state.form_theme.demo?.[`text${n}`]?.[0]?.substr(0, 20) + '...' }}
                  </v-card>
                </template>
                <v-card class="pa-2" :width="$vuetify.display.mobile?'20rem':'40rem'">
                  <component_text /> 
                </v-card>
              </v-menu>
            </template> 
            <br> 
            <template  v-if="['2'].includes($route.query.t as string)">
              <div style="color: #fbeb04"><v-icon >mdi-circle-medium</v-icon> Setup </div> 
              <v-card color="transparent pa-1"  @click="editorForm('12','others',$store.state.form_theme.demo?.others);" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Other Settings </v-card>  
              <br>
              <div style="color: #fbeb04"><v-icon >mdi-circle-medium</v-icon> Home </div> 
              <v-card color="transparent pa-1"  @click="editorForm('2','colors',$store.state.form_theme.demo?.colors);" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Theme Color </v-card>  
              <v-card color="transparent pa-1"  @click="editorForm('1','text2',$store.state.form_theme.demo?.text2);" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> Main Title </v-card>  
              <v-card color="transparent pa-1"  @click="editorForm('1','text3',$store.state.form_theme.demo?.text3);" style="color: #FFD700"><v-icon size="x-small" start>mdi-pencil</v-icon> {{ $store.state.form_theme.demo?.text3?.[0]?.substr(0,20)+'...'}} </v-card>  
            </template>
            <hr class="ma-2">
            <template v-if="$route.query?.id">
              <v-btn size="small"  @click="update_project()" class="mx-1">save</v-btn>
              <v-btn size="small" @click="previewLive" class="mx-1">preview</v-btn>
              <v-btn size="small" @click="deploying" class="mx-1">deploy</v-btn>
            </template>

          </v-card> 
          <v-card v-else class="pa-2" color="transparent mogra-regular"  style="max-height: 45rem; overflow-y: auto;" flat>   
          <v-btn @click="dialog = true" block><v-icon start>mdi-plus</v-icon> New Project</v-btn>
          </v-card>
        </v-navigation-drawer>
          
        <v-btn icon @click="editor = !editor" class="animate__animated animate__rotateIn" v-else style="position: fixed; z-index: 99999; top: 1%; left: 1%; border: 2px solid #fbeb04;">
            <v-avatar :image="icon"></v-avatar>
          </v-btn>
 
        <component :style="editor?'zoom: 80%;':''"  v-if="filteredComponent" :is="filteredComponent"/>
        <v-snackbar v-model="snackbar[0]" :color="snackbar[1]">{{  snackbar[2] }}</v-snackbar>  

    <v-dialog v-model="dialog" width="30%" >
      <v-card>
        <v-form ref="form">
          <v-card-text> 
              <v-row>
                <v-col cols="12" >  
                  <v-row>  
                    <v-col cols="12">
                      <h5><b>Project Name <abbr style="color:red">*</abbr></b></h5>
                      <v-text-field :rules="rules" v-model="form.name" placeholder="Name" hide-details density="compact" variant="outlined">
                      </v-text-field>
                    </v-col>  
                    <v-col cols="12">
                      <h5><b>Description </b></h5>
                      <v-textarea rows="4" v-model="form.description" placeholder="Description"    hide-details density="compact" variant="outlined">
                      </v-textarea>
                    </v-col>  
                  </v-row>
                </v-col> 
              </v-row> 
              <v-row> 
                <v-col cols="12">  
                    <v-btn block   class="mx-1 rounded-lg" size="x-large" color="#333333" @click="save_project"><v-icon size="small" start>mdi-content-save</v-icon> Save</v-btn>
                </v-col>
              </v-row>
          </v-card-text>
        </v-form>
      </v-card>
    </v-dialog>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios'
const modules = import.meta.glob('./*.vue', { eager: true }) as Record<string, { default: any }>;

import component_text from '../admin/tools/text.vue'
import component_background from '../admin/tools/background.vue'
import component_theme_color from '../admin/tools/colors.vue'
import component_carousel from '../admin/tools/carousel.vue'
import component_entourage from '../admin/tools/entourage.vue'
import component_video from '../admin/tools/video.vue'
import component_timeline from '../admin/tools/timeline.vue'
import component_venue from '../admin/tools/venue.vue'
import component_tiles from '../admin/tools/tiles.vue'
import component_dresscode from '../admin/tools/dress_code.vue'
import component_otherdetails from '../admin/tools/other_details.vue'
import component_faq from '../admin/tools/faq.vue'
import component_others from '../admin/tools/others.vue'
import component_spotify from '../admin/tools/spotify.vue'
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
      dialog: false,
      rules: [v => !!v || 'Name is required'],
      list_category: [],
      form: {
        action: '',
        name: '',
        description: '',
        theme: [],
        theme_id: ''
      },

      project_id: null,


      editor: true,
      snackbar: [],
      deploy_dialog: false,
      logo: `${import.meta.env.VITE_API_URL}/images/logo.png`,
      icon: `${import.meta.env.VITE_API_URL}/images/icon.png`,
      components: Object.fromEntries(
        Object.entries(modules).map(([path, module]) => {
          const name = path.split('/').pop()?.replace('.vue', '') ?? '';
          return [name, module.default];
        })
      ) as Record<string, any>
    };
  },
  computed: {
    filteredComponent() {
      const targetName = `t${this.$route.query.t as string}`;
      return this.components[targetName] || null;
    }
  },
  created(){
    this.project_id = this.$route.query?.id
    this.loadFonts()
  },
    methods: { 
    
        async save_project(){   
          try {
            this.form.action = 'save_project';  
            this.form.demo = this.$store.state.form_theme.demo; 
            this.form.theme_id = this.$route.query.t
            const response = await axios.post('/api/admin-project',this.form); 
            if(response.data){  
              this.snackbar = [true,'success','The information has been successfully saved!'];
              const newUrl = `${window.location.origin}${window.location.pathname}?id=${response.data.id}&t=`+this.$route.query.t;
              history.pushState(null, '', newUrl);
              window.location.reload()              
            }
          } catch (error) {
              console.error('Error fetching images:', error);
          } 
        },
        editorForm(type: string, field: any, value: string){
          if(!['12'].includes(type)){
            this.$store.state.editor_dialog = true;
            this.$store.state.editor_form = {[field]: [type,value]};
          }else{
            this.$store.state.editor_dialog = true;
            this.$store.state.editor_form = {[field]: [type,value]};
          }
        }, 
        async loadFonts() {
          const apiKey = "AIzaSyAplhjbqOAIVBBnqgMevrF4PK96xJKJ5Gw"; // Replace with your API key
          const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}`;

          try {
            const response = await fetch(url);
            const data = await response.json();
            const fontNames = data.items.map(font => font.family);
            this.$store.state.list_fonts = fontNames
            // Exclude unwanted fonts
            const excludedFonts = ["Buda", "Molle", "Sunflower", "UnifrakturCook"];
            const fontList = data.items
              .filter(font => !excludedFonts.includes(font.family))
              .map(font => font.family.replace(/ /g, "+"));

            // Chunking to avoid long URLs
            const chunkSize = 20;
            const fontChunks = [];
            for (let i = 0; i < fontList.length; i += chunkSize) {
              fontChunks.push(fontList.slice(i, i + chunkSize).join("&family="));
            }

            // Create a single <style> tag with @import
            const styleSheet = document.createElement("style");
            document.head.appendChild(styleSheet);

            styleSheet.innerHTML = fontChunks.map(chunk => `@import url('https://fonts.googleapis.com/css2?family=${chunk}:wght@400&display=swap');`).join("\n");

            console.log("Fonts loaded successfully!");
          } catch (error) {
            console.error("Error fetching fonts:", error);
          }
        },

 

        async update_project(){   
          try {
            let data = {
            action: 'update_project',
            theme_id: this.$route.query.t,
            id: this.$route.query.id,
            data: this.$store.state.form_theme.demo
          };
            const response = await axios.post('/api/admin-project',data); // Replace with your actual API endpoint
            if(response.data){ 
              this.snackbar = [true,'success','The information has been successfully saved!'];
            }
          } catch (error) {
              console.error('Error fetching images:', error);
          }  
        },
  

        previewLive(){ 
          this.$router.push({name: 'preview',  query: {id: this.$route.query.id, t: this.$route.query.t}})
        },
        deploying(){
          if(!this.$store.state.form_theme?.deploy_id){
            this.deploy_dialog = true;
          }
        },
        async deploy(clicked: boolean){  
            let data = this.$store.state.form_theme;
                try {
                    data.action = 'save_deploy';  
                const response = await axios.post('/api/editor',data); // Replace with your actual API endpoint
                if(response.data){ 
                    if(clicked){
                        this.snackbar = [true,'success','The information has been successfully saved!'];
                    } 
                }
                } catch (error) {
                    console.error('Error fetching images:', error);
                } 
        },
    }
});
</script>
