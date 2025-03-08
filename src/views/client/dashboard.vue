<template>
 
    <v-card-text>
        <span class="poiret-one-regular" ><span :style="$vuetify.display.mobile?'font-size: 40px;':'font-size: 40px;'" style="color: #333333;"  >We cater services such as</span></span><br>
    <hr><br>
      <v-row>
        <v-col cols="12" >
          <v-card color="#333333" class="pa-4">
                <v-row>
                    <v-col v-card>
                        <v-text-field v-model="websiteUrl"></v-text-field>
                        <v-btn @click="fetchPreview()">test</v-btn>
                        {{previewData }}
                    </v-col>
                </v-row>
          </v-card>
        </v-col> 
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Order History</v-card-title>
            <v-data-table :headers="headers" :items="orders" class="elevation-1"></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </template>
  
  <script lang="ts">
  import axios from 'axios';
import { defineComponent } from 'vue';  
  export default defineComponent({
    data() {
      return {
        headers: [
          { text: 'Order ID', value: 'id' },
          { text: 'Product', value: 'product' },
          { text: 'Price', value: 'price' },
          { text: 'Status', value: 'status' }
        ],
        orders: [
          { id: 'ORD12345', product: 'Premium Logo Design', price: '$199.99', status: 'Completed' },
          { id: 'ORD12346', product: 'Website Template', price: '$99.99', status: 'Pending' },
          { id: 'ORD12347', product: 'SEO Optimization', price: '$199.99', status: 'Completed' }
        ],
        websiteUrl: null as string | null,
      previewData: null as any,
      errorMessage: null as string | null,
        } 
    },
    methods: {
        async fetchPreview() {
            try { 
          const response = await axios.get('/api/guest',{params:{action: 'website', website: this.websiteUrl }}); 
          this.previewData = response.data;  
        } catch (error) {}
 
          
        },
    }
  });
  </script>
  
  <style scoped>
  .v-card {
    text-align: center;
  }
  </style>
  