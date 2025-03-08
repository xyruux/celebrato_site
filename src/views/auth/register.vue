<template>
    <div>
        <v-row style="margin-top: 5%"  class="mx-1">
            <v-spacer></v-spacer>
            <v-col cols="12" md="4">
                    <v-card :class="error_promp?'animate__animated animate__pulse':''" class="rounded-xl pa-6 " width="100%"   color="#333333">
                        <v-row>
                            <v-col cols="12" class="text-center"><span style="color: #fbeb04;" :style="$vuetify.display.mobile?'font-size: 20px;':'font-size: 30px;'" class="poiret-one-regular">Member Registration</span>
                                <hr>
                            </v-col>
                            <v-col v-if="error_promp" >
                                <v-alert  type="error" color="primary" variant="outlined" class="animate__animated animate__fadeInDown">
                                    {{ error.message }}
                                </v-alert>
                            </v-col>
                            <v-col cols="12">
                                <span><b>Name</b></span>
                                <v-text-field v-model="form.name" variant="solo" style="background-color: white; color: black" hide-details="auto" class="rounded-lg"  label=""></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <span><b>Email Address</b></span>
                                <v-text-field v-model="form.email" variant="solo" style="background-color: white; color: black" hide-details="auto" class="rounded-lg"  label=""></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <span><b>Password</b></span>
                                <v-text-field v-model="form.password" type="password" variant="solo" style="background-color: white; color: black" hide-details="auto" class="rounded-lg"  label=""></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="text-center">
                                <v-btn :block="$vuetify.display.mobile"  class="rounded-xl mogra-regular ma-1"  @click="$router.push({name: 'login'})" size="large" variant="outlined" color="#fbeb04"><v-icon start>mdi-arrow-left</v-icon> Back to Login</v-btn>
                                <v-btn :block="$vuetify.display.mobile"  class="rounded-xl mogra-regular ma-1"  @click="register" size="large"  color="#fbeb04"><v-icon start>mdi-login</v-icon> Sign Up</v-btn>
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
  title: import.meta.env.VITE_APP_TITLE + ' - Register',
}); 
import axios from 'axios'
import { defineComponent } from 'vue'   
export default defineComponent({ 
    data() {
          return {
            form: {
                action: 'register',
                email: null,
                name: null,
                password: null,
                remember: false,
            },
            error: {
                type: '',
                message: '',
            },
            error_promp: false,
          }
        },
    methods: {
         async register(){
            try { 
            const response = await axios.post('/api/auth',this.form); // Replace with your actual API endpoint
            if(response.data){  
                console.log(response.data)
                if(response.data.type == 'error'){
                    this.error_promp = true;
                        this.error.type = response.data.type
                        this.error.message = response.data.message
                        setTimeout(() => {
                        this.error_promp = false;
                    },9000);
                }else{
                    this.$router.push({name: 'login'});
                }
            }
            } catch (error) {
               this.error.type = '500';
               this.error.message = 'Somethings gone wrong, Contact Support asap!'
               this.error_promp = true;
            }
         }
    }
}) 
</script>