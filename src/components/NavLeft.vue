<template>
  <div v-if="($route?.name as string)">
      <div v-if="!['home','admin-template-website-editor','invitation', 'preview'].includes($route.name as string)">
        <v-navigation-drawer   color="#333333"  v-model="drawer"   :temporary="$vuetify.display.mobile" >
          <v-list>
            <v-list-item subtitle="" title="">
              <template v-slot:title>
                <span class="mogra-regular" style="font-size: 20px;">{{  $store.state.user.name }}</span>
              </template>
              <template v-slot:subtitle>
                <span class="mogra-regular" style="font-size: 15px;">{{  $store.state.user.email }}</span>
              </template>
            </v-list-item>
          </v-list>
          <v-divider color="primary"></v-divider> 
          <v-list :lines="false" density="compact" nav>
            <v-list-item
              v-for="(item, i) in btn.filter(val => val.access_roles.includes($store.state.user.access_role))"
              :key="i" @click="$router.push({name: item.route})"
              :value="item"
              color="secondary"
            >
              <template v-slot:prepend>
                <v-icon :icon="item.icon"></v-icon>
              </template>

              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-card @click="drawer = !drawer" color="primary"  class="p-0 px-2" style="position: fixed; top: 8.5%;  left: 7px;" v-if="$vuetify.display.mobile">
          <v-icon>mdi-chevron-down</v-icon> menu
        </v-card>
      </div>
  </div>
</template> 
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'; 
export default defineComponent({
  name: 'App',
  data() {
    return {  
      drawer: true,
      btn: [
        {title: 'Dashboard', route: 'admin-dashboard', icon: 'mdi-view-dashboard', access_roles: ['a','a1']},
        {title: 'Product List', route: 'admin-templates',  icon: 'mdi-plus', access_roles: ['a','a1']},
        {title: 'Project List', route: 'admin-project-list',  icon: 'mdi-format-list-bulleted', access_roles: ['a','a1']},
        {title: 'Maintenance', route: 'admin-maintenance',  icon: 'mdi-cog', access_roles: ['a']},

        {title: 'Dashboard', route: 'client-dashboard', icon: 'mdi-view-dashboard', access_roles: ['b2']},
        {title: 'Manage RSVP', route: 'client-rsvp',  icon: 'mdi-clipboard-account', access_roles: ['b2']}, 
        {title: 'My Check List', route: 'client-checklist',  icon: 'mdi-checkbox-marked-circle-outline', access_roles: ['b2']}, 
        {title: 'Messages', route: 'client-messages',  icon: 'mdi-message', access_roles: ['b2']}, 
        {title: 'My Account', route: 'client-account',  icon: 'mdi-account', access_roles: ['a','a1','b2']},  
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

 