<template>

<div v-if="($route?.name as string)">
  <v-app-bar flat v-if="!['admin-template-website-editor','invitation','preview'].includes($route.name as string)" color="#333333"  class="rounded-0" :height="$vuetify.display.mobile?60:99">
    <v-card-text >
      <v-row no-gutters> 
        <v-spacer  v-if="!$vuetify.display.mobile"></v-spacer>
        <v-col cols="5" md="4" >

          <v-img width="150px" @click="$router.push({name: (($store.state.user?.id || $store.state.user.access_role == 'a1')?'admin-dashboard':'home')})" :src="logo" alt="Logo"></v-img>
   
        </v-col>
        <v-spacer  ></v-spacer> 
        <v-col   v-if="!$vuetify.display.mobile"
          cols="4"
          md="6"
          :class="!$vuetify.display.mobile ? 'text-right' : ''"
          class="my-auto"
        >
          <v-btn v-for="(v,k) in btn.filter(val => val.access_roles.includes($store.state.user?.access_role??null))" :key="k" style="text-transform: none;" color="#FFD700" @click="$router.push({name: v.name, hash: v.hash });" class="mr-4" rounded variant="text">
            <b>{{ v.title }}</b>
          </v-btn>
          <v-btn @click="logout"  v-if="$store.state.user.name" style="text-transform: capitalize;" color="#FFD700">
               <v-icon start>mdi-logout</v-icon> <b>Logout</b>
          </v-btn>
        </v-col>
        <v-spacer ></v-spacer>
        <v-col class="my-auto" v-if="$vuetify.display.mobile">

          <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn aria-label="Menu"  v-bind="props" variant="outlined"><v-icon>mdi-chevron-double-down</v-icon></v-btn>
          </template>
          <v-list width="200">
            <v-list-item v-for="(v,k) in btn" :key="k" @click="$router.push({name: v.name, hash: v.hash });" >
              <v-list-item-title>{{ v.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item  v-if="$store.state.user?.id" @click="logout"   >
              <v-list-item-title>  <v-icon start>mdi-logout</v-icon> <b>Logout</b> </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-col>
      </v-row>
    </v-card-text>


  </v-app-bar>
</div>
</template> 
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'; 
export default defineComponent({
  name: 'App',
  data() {
    return { 
      logo: import.meta.env.VITE_API_URL + '/images/logo.png',
      btn: [
        {title: 'Dashboard', name: 'client-dashboard', hash: '', access_roles: ['b2']},
        {title: 'Dashboard', name: 'admin-dashboard', hash: '', access_roles: ['a','a1']},
        {title: 'Home', name: 'home', hash: '#home', access_roles: [null,'a','a1','b2']},
        // {title: 'Invitations', name: 'home', hash: '#invitation', access_roles: [null,'b2']},
        {title: 'About Us', name: 'home', hash: '#about', access_roles: [null,'a','a1','b2']},
        {title: 'Contact Us', name: 'home', hash: '#contact', access_roles: [null,'a','a1','b2']},
        {title: 'Members', name: 'login', hash: '', access_roles: [null,'a','a1','b2']},
      ]
    } 
  },
  methods: {
    logout(){ 
      localStorage.removeItem("celebrato_user")
      this.$store.state.user = {
        id: null,
        name: null,
        email: null,
      }
      this.$router.push({name: 'login'});
    }
  }
});
</script>



<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px); 
}
</style>

<style> 
.goog-te-spinner-pos, .skiptranslate, .goog-te-spinner-frame, .goog-te-banner-frame.skiptranslate {
    display: none !important;
}
</style>
