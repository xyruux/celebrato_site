<template>
    <div>
        <v-toolbar class="rounded-0 px-4">
            <span class="poiret-one-regular"  style="font-size: 20px; text-transform: capitalize;"><b>Dress Code</b></span>
        </v-toolbar> 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
            <v-btn @click="type = 1" :color="type == 1?'primary':''" class="mx-1" variant="outlined">Attire</v-btn> 
            <v-btn @click="type = 2"  :color="type == 2?'primary':''"  class="mx-1" variant="outlined">Colors</v-btn> 
            <v-btn @click="type = 3"  :color="type == 3?'primary':''"  class="mx-1" variant="outlined">Settings</v-btn> 
            <br><br>
            <hr>
            <br> 
        <!-- {{ form }} -->
            <template v-if="type == 1">
                <v-row dense >
                    <v-col cols="12" md="12">
                        <v-row>
                            <v-col cols="12" class="text-right">
                                <v-btn class="my-0 py-0 mx-1"   variant="outlined" @click="form['attire'].push([])">
                                <v-icon start>mdi-plus</v-icon>  Add
                                </v-btn>
                            </v-col>
                            <v-col cols="12">
                                <v-card color="transparent" class="pa-4 my-2 border border-primary rounded-xl" v-for="(v,k) in form['attire']" :key="k">
                                    <v-row>
                                        <v-col class="text-right">
                                        <v-btn variant="text" @click="form['attire'].splice(form['attire'].indexOf(v),1)"><v-icon>mdi-close</v-icon></v-btn>
                                        </v-col>
                                            <v-col cols="12" >
                                                <span>Title: </span>
                                                <v-text-field hide-details style="background-color: white; color: black"
                                                    v-model="v[0]">
                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="12" >
                                                <span>Value: </span>
                                                <v-textarea rows="2" hide-details style="background-color: white; color: black"
                                                    v-model="v[1]">
                                                </v-textarea>
                                            </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                            
                        </v-row>
                    
                    
                    </v-col>
                </v-row>
            </template>

            <template v-if="type == 2">
                <br><br>
                Colors: 
                    <v-btn :style="selected_color_index == k?'border: solid 5px #fff':''"  v-for="(v,k) in form['colors']" :key="k" rounded="circle" @click="selected_color_index = k" :color="form['colors'][k]" size="50"></v-btn>
                <br><br><br>
                    <v-text-field v-model="form['colors'][selected_color_index]" hide-details   density="compact">
                        <template v-slot:prepend-inner><abbr style="width: 80px;">Selected:</abbr> </template>
                        <template v-slot:append>
                            <v-btn class="my-0 py-0 mx-1"   variant="outlined" @click="form['colors'].push('')">
                                <v-icon start>mdi-plus</v-icon>  Add
                        </v-btn>
                        </template>
                    </v-text-field> 
                <v-color-picker class="rounded-0" width="100%" hide-canvas hide-sliders show-swatches v-model="form['colors'][selected_color_index]"></v-color-picker> 
            </template>
            
            <template v-if="type == 3">
                <br><br>
               <v-row> 
            <v-col cols="12" class="text-center">
              <span :style="{  fontSize: '30px' ,fontFamily: form['font'][0] }">Sample</span> <br><br>
            </v-col>
            <v-col> 
              <v-autocomplete hide-details item-title="family" :items="$store.state.list_fonts" v-model="form['font'][0]">
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
            </template>
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
            selected_color_index: 0,
        }
    },
    created(){
       this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>