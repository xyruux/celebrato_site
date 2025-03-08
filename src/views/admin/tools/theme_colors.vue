<template>
    <div>
        <v-toolbar class="rounded-0 px-4">
            <span style="font-size: 20px; text-transform: capitalize;"><b>Theme Color</b></span>
        </v-toolbar> 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
            <v-icon>mdi-circle-small</v-icon> ( A ) Stands for Transparency, others is the RGB color. 
            <br><br>
            <hr>
            <br> 
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field :style="'background-color:'+form[0] " v-model="form[0]" hide-details   density="compact">
                        <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
                    </v-text-field> 
                    <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[0]"></v-color-picker> 
                    <v-icon>mdi-circle-small</v-icon> Front of Image color <br>
                    <v-icon>mdi-circle-small</v-icon> Transparency cover <br>
                    <v-icon>mdi-circle-small</v-icon> Intro Logo or loading cover <br>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field :style="'background-color:'+form[1] " v-model="form[1]" hide-details   density="compact">
                        <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
                    </v-text-field> 
                    <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[1]"></v-color-picker> 
                    <v-icon>mdi-circle-small</v-icon> Font Color <br>
                    <v-icon>mdi-circle-small</v-icon> Borders <br> 
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field :style="'background-color:'+form[2] " v-model="form[2]" hide-details   density="compact">
                        <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
                    </v-text-field> 
                    <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[2]"></v-color-picker> 
                    <v-icon>mdi-circle-small</v-icon> Square Tiles Background Color <br>
                    <v-icon>mdi-circle-small</v-icon> Other Fonts <br>
                    <v-icon>mdi-circle-small</v-icon> Links <br>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field :style="'background-color:'+form[3] " v-model="form[3]" hide-details   density="compact">
                        <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
                    </v-text-field> 
                    <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[3]"></v-color-picker> 
                    <v-icon>mdi-circle-small</v-icon> Additional Collors <br> 
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
            form: [],
        }
    },
    created(){
       this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>