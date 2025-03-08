<template>
    <div>
        <v-row style="margin-top: 5%"  v-if="!$store.state.user?.id" class="mx-1">
            <v-spacer></v-spacer>
            <v-col cols="12" md="4">
                    <v-card :class="error_promp?'animate__animated animate__pulse':''" class="rounded-xl pa-6 " width="100%"   color="#333333">
                        <v-row>
                            <v-col cols="12" class="text-center"><span style="color: #fbeb04;" :style="$vuetify.display.mobile?'font-size: 20px;':'font-size: 30px;'" class="poiret-one-regular">Member/s Login</span>
                                <hr>
                            </v-col>
                            <v-col v-if="error_promp" >
                                <v-alert v-if="error_type == 'error'" type="error" color="primary" variant="outlined" class="animate__animated animate__fadeInDown">
                                    {{ error_message }}
                                </v-alert>
                            </v-col>
                            <v-col cols="12">
                                <span><b>Email Address</b></span>
                                <v-text-field v-model="form.email" variant="solo" style="background-color: white; color: black" hide-details="auto" class="rounded-lg"  label=""></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <span><b>Password</b></span>
                                <v-text-field v-model="form.password" @keydown.enter="login" type="password" variant="solo" style="background-color: white; color: black" hide-details="auto" class="rounded-lg"  label=""></v-text-field>
                                <v-btn @click="$router.push({name: 'forgot'})" size="x-small" variant="text">Forgot Password</v-btn>
                              </v-col>
                            <v-col cols="12" >
                                <v-checkbox variant="solo" v-model="form.remember" hide-details class="rounded-lg" style="margin-top: -15px;" label="Remember Me">
                                    <template v-slot:label><small style="margin-top: 5px;">Remember Me</small></template>
                                </v-checkbox>
                            </v-col>   
                        </v-row>
                        <v-row>
                            <v-col cols="12" class="text-center">
                                 <v-btn :block="$vuetify.display.mobile"  class="rounded-xl mogra-regular" :loading="loading"  @click="login" size="large"  color="#fbeb04"><v-icon start>mdi-login</v-icon> Login</v-btn>
                                 <!-- <v-btn class="rounded-xl mogra-regular"  @click="deletes" size="large"  color="#fbeb04"><v-icon start>mdi-login</v-icon> Delete</v-btn> -->
                                </v-col>
                                <!-- <v-btn @click="$router.push({name: 'register'})" size="x-small" variant="text">Register</v-btn> -->
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
  title: import.meta.env.VITE_APP_TITLE + ' - Login',
}); 
import axios from 'axios'
import { defineComponent } from 'vue'   
export default defineComponent({ 
    data() {
          return {
            form: {
                action: 'login',
                email: '',
                password: '',
                remember: false,
            },
            loading: false,
            error_type: "",
            error_message: "",
            error_promp: false,
          }
        },
        created(){
            if(this.$route.query.email){
                this.form.email = this.$route.query.email
            }

            if(localStorage.getItem('celebrato_user')){
                this.$router.push({name: 'admin-dashboard'})
            }

            if(localStorage.getItem('celebrato_remember')){
                this.form = JSON.parse(localStorage.getItem('celebrato_remember'));
            }


        },
    methods: {
        deletes(){
            localStorage.removeItem("celebrato_user");
            window.location.reload()
        },

        async login(){
            this.loading = true 
            this.error_promp = false;
            try { 
            const response = await axios.post('/api/auth',this.form); // Replace with your actual API endpoint
            if(response.data){  
                switch (response.data?.type) {
                    case 'warning':
                        this.error_promp = true;
                            this.error_type = response.data.type
                            this.error_message = response.data.message
                            setTimeout(() => {
                                this.error_promp = false;
                            },9000);
                            this.loading = false
                        break;
                
                        case 'success':
                            if(this.form.remember){
                                localStorage.setItem('celebrato_remember',JSON.stringify(this.form));    
                            }else{
                                localStorage.removeItem("celebrato_remember");
                            }
                            setTimeout(() => {
                                    localStorage.setItem('celebrato_user',JSON.stringify(response.data.user));  
                                    this.$store.state.user = {
                                        id: response.data.user.id,
                                        name: response.data.user.name,
                                        email: response.data.user.email,
                                        access_role: response.data.user.access_role,
                                    }
                                    localStorage.setItem('authToken', response.data.token); // Save to localStorage
                                    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
                                    if(['a','a1'].includes(response.data.user.access_role)){
                                        this.$router.push({name: 'admin-dashboard'})
                                    }else if(response.data.user.access_role == 'b2'){
                                        this.$router.push({name: 'client-dashboard'})
                                    }
                                    this.loading = false
                            },2000);

                        break;
                        default:
                            this.error_type = 'error';
                            this.error_message = 'Somethings gone wrong, Contact Support asap!'
                            this.error_promp = true; 
                            this.loading = false
                        break;
                    }
                }
            } catch (error) {
               this.error_type = 'error';
               this.error_message = 'Somethings gone wrong, Contact Support asap!'
               this.error_promp = true;
               this.loading = false
            }
         }
    }
}) 
</script>