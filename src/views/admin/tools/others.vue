<template>
    <div>
        <v-toolbar class="rounded-0 px-4">
            <span   style="font-size: 20px; text-transform: capitalize;"><b>Other Settings</b></span>
        </v-toolbar> 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" > 
        <hr>
        <br>  
        <v-checkbox  hide-details label="Lock this page" v-model="form['lock']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Splash" v-model="form['splash_screen']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Playlist area" v-model="form['playlist']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Video area" v-model="form['video']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Questions area" v-model="form['questions']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable FAQ area" v-model="form['faq']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Floating Button" v-model="form['floating_button']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable RSVP area/button " v-model="form['rsvp']"> </v-checkbox> 
        <v-checkbox  hide-details label="Enable Message to the couple area" v-model="form['messages']"> </v-checkbox> 
        
        </v-card-text>
    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue'   
export default defineComponent({ 
    data() {
        return {   
            form: [],
        }
    },
    created(){
       this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>