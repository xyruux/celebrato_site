<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-icon size="50" color="primary">mdi-chart-line</v-icon>
          <h3 class="text-h6 mt-2">Total Sales</h3>
          <p class="text-h5 font-weight-bold">$12,345</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-icon size="50" color="success">mdi-account-group</v-icon>
          <h3 class="text-h6 mt-2">New Users</h3>
          <p class="text-h5 font-weight-bold">1,234</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-icon size="50" color="warning">mdi-package-variant</v-icon>
          <h3 class="text-h6 mt-2">Orders</h3>
          <p class="text-h5 font-weight-bold">567</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card class="pa-4">
          <v-icon size="50" color="error">mdi-alert-circle</v-icon>
          <h3 class="text-h6 mt-2">Issues</h3>
          <p class="text-h5 font-weight-bold">12</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Recent Transactions</v-card-title>
          <v-data-table :headers="headers" :items="transactions" class="elevation-1"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      headers: [
        { text: 'Date', value: 'date' },
        { text: 'Description', value: 'description' },
        { text: 'Amount', value: 'amount' }
      ],
      transactions: [
        { date: '2025-02-28', description: 'Order #12345', amount: '$99.99' },
        { date: '2025-02-27', description: 'Subscription', amount: '$19.99' },
        { date: '2025-02-26', description: 'Refund', amount: '-$10.00' }
      ]
    };
  }
});
</script>

<style scoped>
.v-card {
  text-align: center;
}
</style>
