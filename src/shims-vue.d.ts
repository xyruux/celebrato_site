import { ComponentCustomProperties } from 'vue';
import { Vuetify } from 'vuetify';
import { Store } from "vuex";
import { Router, RouteLocationNormalized } from 'vue-router'; 
import { RootState } from "@/store"; 

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $vuetify: Vuetify;    
    $router: Router;                   
    $route: RouteLocationNormalized; 
    $store: Store<RootState>;
  }
}