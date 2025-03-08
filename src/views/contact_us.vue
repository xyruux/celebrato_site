<template>
    <div>  <v-form ref="form">
        <v-row  style="margin-top: 5%;margin-bottom: 5%;" >
                <v-col cols="12" class="text-center">   <span class="poiret-one-regular" ><span :style="$vuetify.display.mobile?'font-size: 40px;':'font-size: 60px;'" style=" color: #fbeb04;"  >Contact Us</span></span><br>
                </v-col>
                <v-col cols="12" md="12" class="text-white"> 
                  <span><b>Name</b></span>
                  <v-text-field :rules="rules" v-model="form.name"   variant="solo" density="compact" hide-details="auto" class="rounded-lg"></v-text-field></v-col>
                 <v-col cols="12" md="6" class="text-white"> 
                  <span><b>Email Address</b></span>
                  <v-text-field :rules="rulesEmail" v-model="form.email" type="email"   variant="solo"   density="compact" hide-details="auto" class="rounded-lg"></v-text-field></v-col>
                  <v-col cols="12" md="6" class="text-white"> 
                  <span><b>CP. / Tel. Number</b></span>
                  <v-text-field :rules="rules" v-model="form.phone"   variant="solo"   density="compact" hide-details="auto" class="rounded-lg"></v-text-field></v-col>
                  <v-col cols="12" class="text-white"> 
                  <span><b>Message / Inquiry</b></span>
                  <v-textarea :rules="rules" v-model="form.message"   rows="2" variant="solo"  density="compact" hide-details="auto" class="rounded-lg"></v-textarea></v-col>
                  <v-col cols="12" class="text-white"> 
                    <v-btn block :loading="loading" @click="submit" size="large" color="#fbeb04" class="mogra-regular"><v-icon start size="small">mdi-send</v-icon> Submit </v-btn>
                  </v-col> 
                
              </v-row></v-form>
    </div>
</template> 
<script lang="ts"> 
import axios from 'axios'
import Swal from 'sweetalert2'
import { defineComponent } from 'vue'   
export default defineComponent({ 
  data() {
        return {
            loading: false,
            rulesEmail: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
          ],
          rules: [  v => !!v || 'Email is required',], 
          form: {
            action: 'inquiry',
            name: '',
            email: '',
            phone: '',
            message: '',
          }
        }
    },

    methods: {
        async submit() {
      const { valid } = await this.$refs.form.validate()
        if(valid){
          this.loading = true
            try { 
            const response = await axios.post('/api/guest',this.form); // Replace with your actual API endpoint
            if(response.data){  
              Swal.fire({
                    title: "Success!",
                    text: "Inquiry has been successfully sent!",
                    html: 'Your inquiry will be keep and received!, We will contact you for the next step.',
                    icon: "success"
                });
                this.loading = false
            }
            } catch (error) {
                this.loading = false
                console.error('Error fetching images:', error);
            }
        } 
      },
    }
})
</script>