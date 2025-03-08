<template>
    <div>
        <v-card flat style="min-height: 20rem; max-height: 40rem;"> 
            <span>Timeline</span><br><hr><br>
            <v-btn  block variant="outlined" @click="form.push('')">
                    <v-icon start>mdi-plus</v-icon>  Add
                </v-btn>
        <v-col cols="12">  
            <v-row dense  v-for="(v, k) in form" :key="k">
                <v-col cols="12" md="6">
                    <v-text-field  density="compact" hide-details style="background-color: white; color: black"
                        v-model="form[k]['name']">
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field density="compact" hide-details style="background-color: white; color: black" v-model="form[k]['time']">
                    <template v-slot:append><v-icon start color="red" @click="form.splice(k,1)">mdi-close</v-icon></template>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-col>
        </v-card>
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