import { createApp } from 'vue'
import { createHead } from '@vueuse/head';
import App from './components/App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify' // Import Vuetify plugin 
// import './plugins/google-translate.d.ts';
import "dropzone/dist/dropzone.css";
import 'animate.css';
 
const head = createHead();


const app = createApp(App)
app.use(vuetify) // Use Vuetify
app.use(router)  
app.use(head);
app.use(store)
app.mount('#app')
