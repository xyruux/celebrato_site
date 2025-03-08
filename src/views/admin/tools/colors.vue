<template>
    <div>
        <template v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 0">
            <v-text-field  :style="'background-color:'+form[0] " v-model="form[0]" hide-details   density="compact">
                <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
            </v-text-field> 
            <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[0]"></v-color-picker> 
        </template>
  
        <template v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 1">
            <v-text-field :style="'background-color:'+form[1] " v-model="form[1]" hide-details   density="compact">
                <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
            </v-text-field> 
            <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[1]"></v-color-picker> 
         </template>

        <template v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == 2">
            <v-text-field :style="'background-color:'+form[2] " v-model="form[2]" hide-details   density="compact">
                <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
            </v-text-field> 
            <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[2]"></v-color-picker> 
        </template>

        <template v-if="$store.state.editor_form[Object.keys($store.state.editor_form)[0]][0] == '3'">
            <v-text-field :style="'background-color:'+form[3] " v-model="form[3]" hide-details   density="compact">
                <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
            </v-text-field> 
            <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form[3]"></v-color-picker> 
        </template>
  
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