<template>
    <div>
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
        <v-btn @click="type = 1" :color="type==1?'info':''" class="mx-1" variant="outlined">Input Text</v-btn> 
        <v-btn @click="type = 2" :color="type==2?'info':''" class="mx-1" variant="outlined">Settings</v-btn> 
        <br><br>
        <hr>
        <br> 

        <!-- Objects -->
        <div v-if="type == 1">
            <!-- Title Value -->
        <v-textarea  hide-details style="background-color: white; color: black" v-model="form[0]">  </v-textarea> 
        </div>
        <div v-else  class="text-center"> 
            <!-- Fonts Dropdown -->
                <v-autocomplete item-title="title" :items="$store.state.list_fonts" v-model="form[1]">
                    <template v-slot:selection="{ item }">
                        <abbr :style="{ fontFamily: item?.title }">{{ item?.title }}</abbr>
                    </template>
                    <template v-slot:item="{ item, props }">
                        <div  class="ma-2" :style="{ fontFamily: item?.title, fontSize: '20px' }" v-bind="props">
                           {{ item?.title }} 
                        </div>
                    </template>
                </v-autocomplete> 
            <!-- Font Size -->
                <v-slider v-model="form[2]" :thumb-size="36" :max="200" :step="1" thumb-label="always" ></v-slider> 
                <v-slider v-model="form[4]" :thumb-size="36" :max="10" :step=".3" thumb-label="always" ></v-slider>  
                <v-color-picker width="100%" hide-canvas hide-sliders show-swatches v-model="form[3]"> </v-color-picker>
        </div> 
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
       this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>