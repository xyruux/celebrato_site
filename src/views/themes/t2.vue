<template>
    <div>  
     
        <br>
        <br>
        <v-card height="70rem">
        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="11" >
                <v-row >
                    <v-col  md="3">
                        <v-img style="position: absolute; z-index: 10; top: 15%; width: 200px; height: 200px; left: 23%" :src="f1"></v-img>
                        <div class="left-arch">
                            <v-img height="35rem" :style="'    border-radius: 230px 230px 0px 0px;background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'">

                            </v-img>
                        </div>
                    </v-col>
                    <v-col  md="6">
                        <v-card  class="arch  pa-4" 
                        :height="$vuetify.display.mobile?'50%':'50rem'" 
                        :style="'background-color: white;'">
                    
                        <v-card flat class="arch text-center" 
                        :height="$vuetify.display.mobile?'97%':'99%'" 
                        :style="'background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'">
                                <span style="position: relative;  top: 20%;" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme?.demo?.text2?.[2] * 0.7:$store.state.form_theme.demo?.text2?.[2])+'px',  fontFamily: $store.state.form_theme?.demo?.text2?.[1] , color: $store.state.form_theme?.demo?.text2?.[3], lineHeight: $store.state.form_theme?.demo?.text2?.[4] }" v-html="$store.state.form_theme?.demo?.text2?.[0]"> </span><br><br><br>
                                <span style="position: relative;  top: 20%;" :style="{ fontSize: ($vuetify.display.mobile?$store.state.form_theme?.demo?.text3?.[2] * 0.7:$store.state.form_theme.demo?.text3?.[2])+'px',  fontFamily: $store.state.form_theme?.demo?.text3?.[1] , color: $store.state.form_theme?.demo?.text3?.[3], lineHeight: $store.state.form_theme?.demo?.text3?.[4] }" v-html="$store.state.form_theme?.demo?.text3?.[0]"> </span>
                            </v-card> 
                        </v-card> 
                    </v-col>
                    <v-col  md="3">
                        <div class="right-arch"> 
                            <v-img height="35rem" :style="'    border-radius: 230px 230px 0px 0px;background-color: '+$store.state.form_theme?.demo?.colors?.[0]+';'">

                            </v-img>
                        </div>
                    </v-col>
                </v-row> 
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        </v-card>
        <editorDialog/>
    </div>
</template> 
  
<style scoped>
.arch {  
    padding: 30px;
  border-radius: 430px 430px 0px 0px;
  background: #131414;
  -webkit-box-shadow: 0px 2px 12px 2px rgba(4, 0, 52, 0.1);
  box-shadow: 0px 2px 12px 2px rgba(166, 165, 174, 0.359);
  position: relative; 
}
.left-arch{
    border-radius: 230px 230px 0px 0px;
  background: #fff;
  padding: 20px;
  z-index: 11;
  position: relative;
  width: 100%;
  right: -85px;
  margin-top: 150px; 
}
.right-arch{
    border-radius: 230px 230px 0px 0px;
    background: #fff;
  padding: 20px;
  z-index: 12;
  position: relative;
  width: 100%;
  right: 85px;
  margin-top: 150px; 
}


</style>


<script lang="ts">
import { defineComponent } from 'vue'  
import editorDialog from '../admin/setup/editor.vue' 
import axios from 'axios'; 
export default defineComponent({ 
    components: {
        editorDialog 
    },
    computed: {
        ratingChunks() {
            if(this.$store.state.form_theme?.messages?.length > 0){
                return this.chunkArray(this.$store.state.form_theme.messages, 4);
            }
            return []; 
        }
    },
    data() {
          return {
            overlay: true,
            targetDate: new Date('2025-12-31T23:59:59'),
            formattedTime: this.calculateTimeLeft(),
            photo_dialog: false,
            fab_btn: false,
            f1: import.meta.env.VITE_API_URL+'/elements/t2_f2.gif',
            f2: import.meta.env.VITE_API_URL+'/elements/t2_f2.gif',    
            form: [], 
            marque: [],
          };
      },
    watch: {
        '$store.state.form_theme.id'(val){
            setTimeout(() => {
            // this.overlay = false;
            }, 3000);
        }
    },
    created(){
        if(  this.$route.query?.t ){
            window.scrollTo(0,0);
            this.getImages();
            this.interval = setInterval(this.updateTimer, 3600000);
        }
       
    }, 
    mounted(){
        this.updateTimer();
        this.interval = setInterval(() => {
            this.updateTimer();
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.interval);
    },
    methods: {
        calculateTimeLeft() { 
            try {
            const targetDate = new Date(this.$store.state.form_theme.demo?.text6[0]).getTime();
            const now = Date.now();
            const diff = targetDate - now; 
            console.log( new Date(this.$store.state.form_theme.demo?.text6[0]).toDateString() )
            const days = Math.floor(diff / 86400000);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            return [String(days).padStart(2, '0'), String(hours).padStart(2, '0'), String(minutes).padStart(2, '0'), String(seconds).padStart(2, '0')];
            } catch (error) {
                
            }
        },
        updateTimer() {
            this.formattedTime = this.calculateTimeLeft();
        },
        chunkArray(arr: any, size: any) {
            return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
            );
        }, 
       async getImages(){
        try {
            if(this.$route.query.id == 'wedding'){
                const r = await axios.get('/api/guest/theme',{params:{action: 'theme_data',  t: this.$route.query.t }}); // Replace with your actual API endpoint
                this.$store.state.form_theme = r.data; 
            }else{
                const r = await axios.get('/api/editor',{params:{action: 'get_editor',  t: this.$route.query.t , id: this.$route.query.id }}); // Replace with your actual API endpoint
                this.$store.state.form_theme = r.data; 
            }
        } catch (error) {
            this.$router.push({name: "home"})
        }


          
               
        }
    }
})
</script> 