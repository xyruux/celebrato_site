
<template>
  <div>
  <v-app >  
    <LoadingScreen v-if="!['admin-template-website-editor','invitation','preview'].includes($route.name as string)" :isLoading="isLoading" />
        <navi/>
        <v-main>
          <navli v-if="$store.state.user?.id"/>
          <div class="bg"></div>
          <router-view  v-if="!isLoading" style="min-height: 50rem; overflow: hidden;"/>
          <foti v-if="!isLoading"/>
        </v-main> 
  </v-app>
</div>
</template>
<style>
 
.mogra-regular {
    font-family: "DynaPuff";
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal; 
}

.poiret-one-regular {
  font-family: "Yellowtail", serif;
  font-weight: 400;
  font-style: normal;
}

</style> 
<script lang="ts"> 
const fontFiles = import.meta.glob<{ default: string }>('/src/assets/fonts/*.ttf', { eager: true });
Object.entries(fontFiles).forEach(([path, module]) => {
  const fontName = path.split('/').pop()?.replace('.ttf', '').split("-")?.[0] || 'CustomFont';
  const fontFace = new FontFace(fontName, `url(${module.default})`);
  fontFace.load().then((loadedFont) => {
    (document.fonts as any).add(loadedFont);
  });
});
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import navi from './NavTop.vue'  
import navli from './NavLeft.vue'  
import foti from './Footer.vue'  
import LoadingScreen from "./SplashScreen.vue";
export default defineComponent({
  
  name: 'App',
  components: {
    navi, navli, foti, LoadingScreen
    
  },
  mounted() { 
     setTimeout(() => {
      this.isLoading = false;
    }, 1500);
 
  },
  data() {
    return {
      isLoading: true,
      route: useRoute(), // Access the route object
    };
  }, 
  created(){ 
  },
  methods: { 
  }
 
})

</script>

<style scoped>
/* Apply background image to the entire app */
.bg {
  /* background-image: url('../bg.png'); */
  background-size: cover; 
  width: 100%;
    height: 51rem;
  position: fixed;
  z-index: -9999;
  
}

/* Make sure the body and html take up full height for proper scrolling */
html, body {
  height: 100%;
  margin: 0;
}

/* Ensure the v-app container fills the page and allows scrolling */
.v-application {
  min-height: 100%;
}

/* Allow content to scroll within the main container */
.v-main {
  overflow-y: auto; /* Enables scrolling when content overflows */
  position: relative;
  z-index: 1;
}
</style>

<style>
.glass-card {
  background: rgba(251, 240, 240, 0.756) !important; /* Adjust the color and opacity */
  backdrop-filter: blur(5px) !important;  
  color: black;
}
</style>
