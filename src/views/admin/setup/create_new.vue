<template>
    <div>  
        <v-card-text>
            <div class="d-flex">
             <span class="mogra-regular " style="font-size: 25px;" >Product List</span>
             <v-spacer></v-spacer>
             <v-autocomplete :items="types" v-model="filter"  @update:modelValue="getThemeList"  max-width="400" item-title='type' variant="outlined"></v-autocomplete>
            </div>
             <hr class="mb-4">
                <v-row> 
                    <v-col cols="12"   v-for="(dt, key) in data" :key="key">
                        <v-card class="pa-4 rounded-xl border"  >
                           <v-row> 
                                <v-col cols="12" >
                                    <v-expansion-panels flat> 
                                    <v-expansion-panel>
                                        <v-expansion-panel-title>{{ dt.name  }}</v-expansion-panel-title>
                                        <v-expansion-panel-text > 
                                            <v-row>
                                                <v-col cols="12" md="3">
                                                    <v-img cover :src="dt.cover"></v-img>
                                                </v-col>
                                                <v-col cols="12" md="8">
                                                    <div style="font-size: 15px;" v-html="dt.description"></div>
                                                </v-col>
                                            </v-row> 
                                        </v-expansion-panel-text>
                                    </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-col>
                                 
                                <v-col cols="6" md="3" v-for="(v,k) in dt.themes" :key="k">  
                                    <v-card @click="$router.push({name: 'admin-template-website-editor', query: {id:  $route.query?.id, t: v?.id }})" max-height="250px" min-height="250px" class="pa-2 rounded-xl text-center" color="#333333"  >
                                       <b :style="$vuetify.display.mobile?'font-size: 12px':'font-size: 15px'">{{  v.name }}</b>  
                                        <v-carousel cycle class="rounded-xl my-3" height="200" hide-delimiters :show-arrows="false" >
                                            <v-carousel-item v-for="(vv,kk) in v.cover.images" cover :src="vv" :key="kk" >
                                            </v-carousel-item>
                                        </v-carousel> 
                                    </v-card>
                                    
                                </v-col>
                           </v-row>
                        </v-card>
                    </v-col> 
                </v-row>
            </v-card-text>

        <v-dialog>
            <v-card>
                <v-toolbar>
                </v-toolbar>
                    <v-card-text>
                        <v-row>
                            <v-col  >
                                <v-card>

                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                <v-card-actions>
                    <v-btn>
                        OK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script lang="ts"> 
import axios from 'axios'
import { defineComponent } from 'vue' 
export default defineComponent({
    components: { 
    },
    data() {
        return { 
            data: [],
            types: [],
            filter: 'All'
        }
    },
    created(){
        this.getThemeList()
    },
    methods: {
        async getThemeList(){
            try {
                const response = await axios.get('/api/admin-theme',{params:{action: 'theme_list', filter: this.filter }}); // Replace with your actual API endpoint
                this.data = response.data.data;
                this.types = response.data.types 
                this.types.unshift({type: 'All'})
            } catch (error) {
                console.error('Error fetching demo:', error);
            } 
        },
    }
})
</script>
