<template>
    <div>
        <span>Spotify</span><br><hr><br>
    
 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
          <span>Spotify Playlist Link</span>
            {{ $store.state.form_theme.demo.spotify }}
            <v-row>
                <v-col cols="12">
                    <v-text-field  hide-details style="background-color: white; color: black" v-model="$store.state.form_theme.demo.spotify[0]"> 
                    </v-text-field> 
                </v-col>
                <v-col cols="12" md="6" class="d-flex" > 
                    <v-text-field type="number" reverse max-width="150" density="compact" v-model="$store.state.form_theme.demo.spotify[1]" >
                        <template v-slot:prepend-inner>Width:</template>
                        <template v-slot:append-inner>%</template>
                    </v-text-field> 
                    <v-slider v-model="$store.state.form_theme.demo.spotify[1]" :step="1" :thumb-size="36" :max="100" ></v-slider>  
                </v-col>
                <v-col cols="12" md="6" class="d-flex" > 
                    <v-text-field type="number" reverse max-width="150" density="compact" v-model="$store.state.form_theme.demo.spotify[2]" >
                        <template v-slot:prepend-inner>Height:</template>
                        <template v-slot:append-inner>px</template>
                    </v-text-field> 
                    <v-slider v-model="$store.state.form_theme.demo.spotify[2]" :step="1" :thumb-size="36" :max="100" ></v-slider>  
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue'   
export default defineComponent({ 
    data() {
        return {  
            type: 1,
            form: [],
        }
    },
    created(){
    //    this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>