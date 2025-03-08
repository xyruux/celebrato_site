<template>
    <div>
      <v-toolbar class="rounded-0 px-4">
            <span style="font-size: 20px; text-transform: capitalize;"><b>{{  Object.keys($store.state.editor_form)[0] }}</b></span>
        </v-toolbar> 
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" >
          <v-btn @click="type = 1" :color="type==1?'primary':''"  class="mx-1" variant="outlined">Names</v-btn> 
          <v-btn @click="type = 2"  :color="type==2?'primary':''" class="mx-1" variant="outlined">Settings</v-btn> 
            <br><br>
            <hr>
            <br> 
 
 
        <template v-if="type == 2">
          <v-row>
            <v-col cols="12" class="text-center">
              <span :style="{ fontSize: form['font'][1]+'px',  fontFamily: form['font'][0] }">Sample</span> <br><br>
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
        <template v-else>
          <v-tabs class="mt-4" v-model="tab" bg-color="primary">
            <v-tab value="one">Family Members</v-tab>
            <v-tab value="two">Secondary Entourage</v-tab>
            <v-tab value="three">Ceremonial Roles</v-tab>
            <v-tab value="four">Principal Sponsors</v-tab>
          </v-tabs>
          <v-tabs-window class="mt-4" v-model="tab">
                  <v-tabs-window-item value="one">
                    <v-row>
                      <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Groom </b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['groom']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Bride </b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['bride']"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Groom Father</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['groom_father']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Groom Mother</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['groom_mother']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Bride Father</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['bride_father']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Bride Mother</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['bride_mother']"
                            ></v-text-field>
                        </v-col>
                      </v-row> 
                  </v-tabs-window-item>
                  <v-tabs-window-item value="two">
                    <v-row>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Maid of Honor</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['maid_of_honor']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Best Man</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['best_man']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <div class="d-flex my-auto">
                            <span style="text-transform: capitalize;"><b>Bridesmaids</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" v-if="form['bridesmaids'].length != 0" variant="outlined" @click="form['bridesmaids'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['bridesmaids']" :key="k" hide-details style="background-color: white; color: black"
                                v-model="form['bridesmaids'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['bridesmaids'].splice(k,1)">mdi-close</v-icon></template>
                          </v-text-field>
                            <v-btn block size="large" @click="form['bridesmaids'].push('')" v-if="!form['bridesmaids'] || form['bridesmaids'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                          </v-col>
                        <v-col cols="12">
                          <div class="d-flex my-auto">
                            <span style="text-transform: capitalize;"><b>Groomsmen</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" v-if="form['groomsmen'].length != 0" variant="outlined" @click="form['groomsmen'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['groomsmen']" :key="k" hide-details style="background-color: white; color: black"
                                v-model="form['groomsmen'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['groomsmen'].splice(k,1)">mdi-close</v-icon></template>
       
                          </v-text-field>
                            <v-btn block size="large" @click="form['groomsmen'].push('')" v-if="!form['groomsmen'] || form['groomsmen'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
                      </v-row> 
                  </v-tabs-window-item>
                  <v-tabs-window-item value="three">
                    <v-row>
                        <v-col cols="12" >
                            <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Flower Girl</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px"  v-if="form['flower_girl'].length != 0" variant="outlined" @click="form['flower_girl'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['flower_girl']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['flower_girl'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['flower_girl'].splice(k,1)">mdi-close</v-icon></template>
                          </v-text-field>
                            <v-btn block size="large" @click="form['flower_girl'].push('')" v-if="!form['flower_girl'] || form['flower_girl'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Ring Bearer</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['ring_bearer']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6"> 
                            <span style="text-transform: capitalize;"><b>Coin Bearer</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['coin_bearer']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <span style="text-transform: capitalize;"><b>Bible Bearer</b></span>
                            <v-text-field  hide-details style="background-color: white; color: black"
                                v-model="form['bible_bearer']"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" > 
                          <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Candle Sponsors</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" variant="text" @click="form['candle_sponsors'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['candle_sponsors']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['candle_sponsors'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['candle_sponsors'].splice(k,1)">mdi-close</v-icon></template>
                          </v-text-field>
                            <v-btn block size="large" @click="form['candle_sponsors'].push('')" v-if="!form['candle_sponsors'] || form['candle_sponsors'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
                        <v-col cols="12">  
                            <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Viel Sponsors</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" variant="text" @click="form['viel_sponsors'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['viel_sponsors']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['viel_sponsors'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['viel_sponsors'].splice(k,1)">mdi-close</v-icon></template>
                          </v-text-field>
                            <v-btn block size="large" @click="form['viel_sponsors'].push('')" v-if="!form['viel_sponsors'] || form['viel_sponsors'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
                        <v-col cols="12"> 
                            <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Cord Sponsors</b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" variant="text" @click="form['cord_sponsors'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['cord_sponsors']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['cord_sponsors'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['cord_sponsors'].splice(k,1)">mdi-close</v-icon></template>
                            </v-text-field>
                            <v-btn block size="large" @click="form['cord_sponsors'].push('')" v-if="!form['cord_sponsors'] || form['cord_sponsors'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
                      </v-row> 
                  </v-tabs-window-item>
                  <v-tabs-window-item value="four">
                      <v-col cols="12">
                        <span>Principal Sponsor  (Godparents/Ninongs & Ninangs)</span>  
                      </v-col>
                      <v-col cols="12"> 
                            <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Male Principal Sponsors   </b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" variant="outlined" @click="form['sponsor_male'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['sponsor_male']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['sponsor_male'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['sponsor_male'].splice(k,1)">mdi-close</v-icon></template>
                          </v-text-field>
                            <v-btn block size="large" @click="form['sponsor_male'].push('')" v-if="!form['sponsor_male'] || form['sponsor_male'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>

                        <v-col cols="12"> 
                            <div class="d-flex my-auto">
                              <span style="text-transform: capitalize;"><b>Female Principal Sponsors  </b></span>
                            <v-spacer></v-spacer>
                            <v-btn class="my-0 py-0 mx-1" height="20px" variant="outlined" @click="form['sponsor_female'].push('')">
                              <v-icon start>mdi-plus</v-icon>  Add
                            </v-btn></div>
                            <v-text-field  v-for="(v, k) in form['sponsor_female']" :key="k"  hide-details style="background-color: white; color: black"
                                v-model="form['sponsor_female'][k]"
                            >
                            <template v-slot:append><v-icon start color="red" @click="form['sponsor_female'].splice(k,1)">mdi-close</v-icon></template>
                            </v-text-field>
                            <v-btn block size="large" @click="form['sponsor_female'].push('')" v-if="!form['sponsor_female'] || form['sponsor_female'].length == 0">  <v-icon start>mdi-plus</v-icon>  Add</v-btn>
                        </v-col>
  
                  </v-tabs-window-item>
          </v-tabs-window> 
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
            tab: 'one'
        }
    },
    created(){
       this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
    }, 
})
</script>