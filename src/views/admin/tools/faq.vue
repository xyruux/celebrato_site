<template>
    <div>
        <v-col cols="12"> 
            <div class="d-flex my-auto">
                <span style="text-transform: capitalize;"><b>FAQ</b></span>
                 <br><br>
                <v-spacer></v-spacer>
                <v-btn class="my-0 py-0 mx-1"   variant="outlined" @click="form.push({})">
                    <v-icon start>mdi-plus</v-icon>  Add
                </v-btn>
            </div> 
            <v-row dense  v-for="(v, k) in form" :key="k">
                <v-col cols="12">
                    <span>Question {{  k+1 }}</span>
                    <v-text-field hide-details style="background-color: white; color: black"
                        v-model="v.question">
                    </v-text-field>
                </v-col>
                <v-col cols="12" >
                    <span>Answer</span>
                    <v-textarea hide-details style="background-color: white; color: black" v-model="v.answer">
                    <template v-slot:append><v-icon start color="red" @click="form.splice(k,1)">mdi-close</v-icon></template>
                    </v-textarea><br>
                    <hr><br>
                </v-col>
            </v-row>
        </v-col>
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