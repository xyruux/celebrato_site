<template>  
      <!-- Disclaimer Banner -->
      <v-card v-if="isVisible"
          color="transparent"
        class="sticky-disclaimer text-right py-3 px-5"
        
      >
      <v-icon size="40"  @click="scrollToTop"  color="#1c3764">mdi-arrow-up-bold-circle</v-icon> 
      </v-card> 
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onBeforeUnmount  } from 'vue';
  
  export default defineComponent({
    name: '',
    setup() {
      const isVisible = ref(true); 
      // Check scroll position
      const checkScrollPosition = () => {
        if (window.scrollY > 300) {
          isVisible.value = true; // Show button when scrolled down
        } else {
          isVisible.value = false; // Hide button when at the top
        }
      };

 
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
 
      // Add scroll event listener on mount
      onMounted(() => {
        window.addEventListener('scroll', checkScrollPosition);
      });

      // Remove scroll event listener on unmount
      onBeforeUnmount(() => {
        window.removeEventListener('scroll', checkScrollPosition);
      });
      return {
        isVisible,scrollToTop, 
      };
    },
  });
  </script>
  
  <style scoped>
  .sticky-disclaimer { 
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 10;
    color: #1c3764;
  }
  </style>
  