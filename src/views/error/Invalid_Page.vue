<template>
  <v-container class=" d-flex justify-center  flex-column align-center text-center">
    <v-icon size="100" color="error">mdi-alert-circle-outline</v-icon>
    <h1 class="text-h4 font-weight-bold mt-4">Page Not Found</h1>
    <p class="text-body-1">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
    <v-btn color="primary" class="mt-4" @click="$router.push({name: 'inquiry'})">Contact Us</v-btn>
  </v-container>
</template>

<!-- <script lang="ts">
import { useHead } from '@vueuse/head';
useHead({
  title: import.meta.env.VITE_APP_TITLE + ' - Page Not Found',
});  
</script>
  -->