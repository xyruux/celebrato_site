<template>
    <div>   
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" md="4">
    
          <v-card  style="margin-top: 5%;" class="pa-4 mx-4 rounded-xl" color="#333333" > 
          <componentContactUs/>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </div>
 

</template> 
<script lang="ts"> 
import componentContactUs from './contact_us.vue'
import { defineComponent } from 'vue'   
export default defineComponent({ 
  components: {
    componentContactUs
  },
  data() {
  }
})
</script>