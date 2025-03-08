<template>
    <div>
      <v-row style="height: 50rem;">
          <v-spacer></v-spacer>
          <v-col cols="12" md="4" class="poiret-one-regular ">
            <v-card class="rounded-xl   pa-4 mx-1" style=" transform: rotate(-5deg); " flat color="transparent">
              <span :style="$vuetify.display.mobile? 'font-size: 30px; ':'font-size: 65px; '" style="transform-origin:  left bottom; color: #333333;" >Your Event,<br>Your Way <br>
               <small>—Digitally Perfect.      </small> 
              </span><br>
               <v-icon v-for="i in 5" :key="i" size="25" :class="'animate__animated animate__fadeInDown animate__delay-'+i+'s '" color="yellow" style="-webkit-text-stroke: 2px black;">mdi-star</v-icon>
   
                <br>  <br v-if="!$vuetify.display.mobile">  <br v-if="!$vuetify.display.mobile">   
                <v-btn class="rounded-xl animate__animated animate__pulse animate__infinite " :size="$vuetify.display.mobile?'large':'x-large'"  color="#fbeb04">Contact Us</v-btn>
            </v-card>
          </v-col> 
          <v-col cols="12" md="7"  >
            <br>
            <span class="poiret-one-regular " :style="$vuetify.display.mobile? 'font-size: 30px; ':'font-size: 30px; '" style="transform-origin:  left bottom; color: #333333;" >
              {{ $route.query.type }} <hr> <br></span>
              <v-card v-for="(v,k) in demo?.themes" :key="k" class="pa-2 rounded-lg mb-2" color="#333333" >
                <v-row>
                  <v-col cols="12" md="5"> 
                    <v-img style="max-height: 13rem;min-height: 13rem;" :src="v.cover.images[0]" class="rounded-xl" cover></v-img>
                  </v-col>
                  <v-col cols="12" md="7">
                  
                    <h2>{{ v.name }}</h2>
                    <v-card color="transparent" flat style="max-height: 8rem; overflow-y: auto;">
                      <h5  v-for="(vv,kk) in v.cover.coverage" :key="kk"><v-icon size="18" start>mdi-check-circle-outline</v-icon> {{ vv }} </h5> 

                    <h5  v-for="(vv,kk) in v.cover.coverage" :key="kk"><v-icon size="18" start>mdi-check-circle-outline</v-icon> {{ vv }} </h5> 

                    <h5  v-for="(vv,kk) in v.cover.coverage" :key="kk"><v-icon size="18" start>mdi-check-circle-outline</v-icon> {{ vv }} </h5> 

                    <h5  v-for="(vv,kk) in v.cover.coverage" :key="kk"><v-icon size="18" start>mdi-check-circle-outline</v-icon> {{ vv }} </h5> 
                    </v-card>
                    <v-btn variant="text" :href="'/preview?t=' + v.id" target="_blank" size="small" class="mt-4" color="primary"><v-icon start>mdi-eye</v-icon> View Demo </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            

          </v-col>
          <v-spacer></v-spacer>
      </v-row>
    </div>
</template> 
<script lang="ts">
import { useHead } from '@vueuse/head';
useHead({
  title: import.meta.env.VITE_APP_TITLE + ' - Products',
}); 
import axios from 'axios'
import Swal from 'sweetalert2'
import { defineComponent } from 'vue'   
export default defineComponent({ 
  data() {
        return { 
          demo: {
            themes: []
          },
        }
    },
    mounted(){
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);

      if(this.$route.query?.type){
        this.getTemplates()
      }else{
        this.$router.push({name:"error"})
      }


 
    },
    methods:{
      async getTemplates(){
        try { 
          const response = await axios.get('/api/guest',{params:{action: 'themes',category: this.$route.query.type }}); 
          this.demo = response.data[0];  
        } catch (error) {}
      },
    }
})
</script>