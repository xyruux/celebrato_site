<template>
    <div>
        <v-toolbar class="rounded-0 px-4">
            <span class="poiret-one-regular"  style="font-size: 20px; text-transform: capitalize;"><b>Venue</b></span>
        </v-toolbar> 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
            <v-btn  class="my-0 py-0 mx-1" @click="option = 1" :color="option == 1?'primary':''"  variant="outlined">Venue Details</v-btn> 
            <v-btn  class="my-0 py-0 mx-1" @click="option = 2" :color="option == 2?'primary':''"  variant="outlined"> Settings </v-btn> 
           <br><br>
            <hr>
            <br>  
        <v-row> 
            <v-col cols="12" v-if="option == 1" >
                <v-btn class="my-0 py-0 mx-1"   variant="outlined" @click="form[1][1].push([]);">
                    <v-icon start>mdi-plus</v-icon>  Add
                </v-btn>
                <v-tabs class="mt-4" v-model="type" >
                    <v-tab v-for="(a,b) in form[1][1]" :key="a" :value="b"> 
                    <template v-if="!a?.[0]">Venue {{ b   }}</template> 
                    <template v-else> {{ a?.[0] }}</template> 
                    </v-tab>   
                </v-tabs>   
                <v-tabs-window class="mt-4" v-model="type" v-if="option == 1">
                    <v-tabs-window-item v-for="(a,b) in form[1][1]" :key="b" :value="b" > 
                        <v-row  no-gatters >
                        <v-col class="text-right">
                            <v-btn @click="type=b-1; form.splice(form.indexOf(a),1); " variant="outlined" size="small"><v-icon color="red">mdi-close</v-icon></v-btn>
                        </v-col>
                        <v-col cols="12">
                            <span>Title</span>
                            <v-text-field  hide-details style="background-color: white; color: black" v-model="a[0]"> 
                            </v-text-field> 
                        </v-col>
                        <v-col cols="12">
                            <span>Name</span>
                            <v-text-field  hide-details style="background-color: white; color: black" v-model="a[1]"> 
                            </v-text-field> 
                        </v-col>
                        <v-col cols="12">
                            <span>Address</span>
                            <v-text-field  hide-details style="background-color: white; color: black" v-model="a[2]"> 
                            </v-text-field> 
                        </v-col>
                        <v-col cols="12">
                            <span>Google Map Address</span> <small>(optional) when no value then hide button</small>
                            <v-text-field  hide-details style="background-color: white; color: black" v-model="a[3]"> 
                            </v-text-field> 
                        </v-col> 
                    </v-row><br>
                    <span>Image</span> <small>(optional) when no value then hide image</small><br><br>
                    <v-row style="height: 400px; overflow-y: auto;" class="pt-4"> 
                    <template   v-for="(v,k) in images">
                            <v-col cols="2" md="3" :key="k" v-if="['ico','jpg','png','webp','gif'].includes(v?.split('.')[4] )">
                                <v-card class=" pa-1 "  width="100%" style="overflow-x: auto;" > 
                                    <v-tooltip location="top" :text="decodeURIComponent(v?.split('%7E')[1] +'.'+ v.split('.')[4])">
                                        <template v-slot:activator="{ props }">
                                            <v-img v-bind="props" @click="a[4] = v" height="100" class="text-center pa-4"  style="object-position: top;" cover :src="v"> 
                                                <v-icon color="primary" style="text-shadow: 
                                                -1px -1px 0 black,  
                                                1px -1px 0 black,  
                                                -1px  5px 0 black,  
                                                1px  5px 0 black;" size="50" v-if="a[4] == v">mdi-check-circle</v-icon>
                                            </v-img> 
                                        </template>
                                    </v-tooltip>
                                    <small class="caption d-flex mx-1"> {{  decodeURIComponent(v?.split("%7E")[1].length > 20? v?.split("%7E")[1].substr(0,20)+'...'+'.' + v.split(".")[4]: v?.split("%7E")[1] +'.'+ v.split(".")[4] ) }}</small><a :href="v" target="_blank" ></a>
                                </v-card>
                            </v-col>
                    </template>  
                    </v-row>
                    </v-tabs-window-item>
                </v-tabs-window> 
            </v-col>
            <v-col cols="12" v-if="option == 2" >
                <br><br>
               <v-row> 
            <v-col cols="12" class="text-center">
              <span :style="{  fontSize: '30px' ,fontFamily: form[1][0] }">Sample</span> <br><br>
            </v-col>
            <v-col> 
              <v-autocomplete hide-details item-title="family" :items="$store.state.list_fonts" v-model="form[1][0]">
                   <template v-slot:selection="{ item }">
                       <abbr  :style="{ fontFamily: item.raw.family, fontSize: '20px' }" >{{ item.raw.family }}</abbr>
                   </template>
                   <template v-slot:item="{ item, props }">
                       <div  class="ma-2" :style="{ fontFamily: item.raw.family, fontSize: '30px' }" v-bind="props">
                          {{ item.raw.family }} 
                       </div>
                   </template>
               </v-autocomplete>  
            </v-col>
        </v-row>
        </v-col>
    </v-row>
        </v-card-text>
        
    </div>
</template>

<script lang="ts"> 
import axios from 'axios'
import { defineComponent } from 'vue'   
export default defineComponent({ 
    data() {
        return {  
            option: 1,
            type: 0,
            form: [],
            images: [], 
            slides_image: [],
        }
    },
    created(){
        this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]] ;
        this.current_id();   
    },
    methods: {
        async current_id(){
            try {
                const response = await axios.get('/api/project',{params:{action: 'project',  id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.images = response.data.file_names.images 
            } catch (error) {
                console.error('Error fetching project:', error);
            } 
        }, 

    },


})
</script>

