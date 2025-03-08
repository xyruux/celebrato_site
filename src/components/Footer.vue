<template> 
    <!-- Footer -->
     <div v-if="!['admin-template-editor','invitation', 'preview'].includes($route.name as string)">
    <v-footer color="#333333" v-if="!$store.state.user?.id"  class="pa-4">
      <v-container>
        <br v-if="!$vuetify.display.mobile">
        <v-row>
          <!-- Support or Contact Us -->
          <v-col cols="12" md="4">


            <v-img width="150px" :src="logo" alt="Logo"></v-img>
            <h4 class="font-weight-bold">Support or Contact Us</h4><br>
            <p>Have questions or need help? Reach out to us anytime!</p><br>
                <v-btn variant="text"> <v-icon>mdi-email</v-icon></v-btn> {{  email }}<br>
                <v-btn variant="text"> <v-icon>mdi-phone</v-icon></v-btn> {{  contact }}
          </v-col>

          <!-- Map -->
          <v-col cols="12" md="5">
            <h4 class="font-weight-bold">Our Location</h4>
            {{  address }}
          </v-col>

          <!-- Email Us -->
          <v-col cols="12" md="3">
            <h4 class="font-weight-bold">Our Socials</h4>
            <v-btn variant="text" icon href="https://www.facebook.com/celebrato.co" target="_blank" > <v-icon  :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04"  >mdi-facebook</v-icon></v-btn>
            <v-btn variant="text" icon href="https://www.instagram.com/celebrato.co" target="_blank" > <v-icon :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04" >mdi-instagram</v-icon></v-btn> 
            <v-btn variant="text" icon @click="dialog_info = !dialog_info" > <v-icon :size="$vuetify.display.mobile?'30px':'40px'" color="#fbeb04" >mdi-phone</v-icon></v-btn> 
          </v-col>
        </v-row>
      </v-container>  
    </v-footer> 
 
    <v-dialog width="30%" :fullscreen="$vuetify.display.mobile" v-model="dialog_info">
        <v-card  class="pa-4" color="#333333">
          <div class="d-flex">  <h2>Contact Information/s: </h2>
            <v-spacer></v-spacer>
          </div>
          <hr class="my-4"> 
          <v-row>
            <v-col> 
              <h4>CP #: {{env.VITE_CONTACT}} <small>(Smart)</small></h4>
              <h4>Tel #: {{env.VITE_CONTACT}}</h4>
              <h4>Email: {{env.VITE_EMAIL}}</h4>
              <h4>Address: {{env.VITE_ADDRESS}}</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn @click="dialog_info = !dialog_info" block color="primary">Ok</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-dialog>

    </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'; 
export default defineComponent({
  name: 'App',
  data() {
    return { 
      dialog_info: false,
      logo: import.meta.env.VITE_API_URL + '/images/logo.png',
      env: import.meta.env,
      contact: import.meta.env.VITE_CONTACT,
      address: import.meta.env.VITE_ADDRESS ,
      email: import.meta.env.VITE_EMAIL ,
      site: import.meta.env.VITE_APP_TITLE 
    } 
  },
});
</script>


<style scoped>
h4 {
  margin-bottom: 1rem;
  color: #ffffff; /* Optional: Adjust the heading color */
}
p {
  color: #ddd; /* Optional: Adjust text color for better contrast */
}
</style>
