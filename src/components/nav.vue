<template>
    <div>
      <v-card color="black" class="rounded-0  pa-4" height="70">
        <v-spacer></v-spacer>
        <v-row>
            <v-col cols="12" class="text-right">
                <v-btn class="mx-1" @click="$router.push({name: 'admin-project'});  $store.commit('resetForm')"><v-icon start>mdi-plus</v-icon> New</v-btn>
                <v-btn class="mx-1"  @click="view_list()"><v-icon size="small" start>mdi-format-list-bulleted</v-icon> Recently Added</v-btn>
                <!-- <v-btn class="mx-1" @click="$router.push({name: 'templates'})">Templates</v-btn> -->
            </v-col>
        </v-row>
      </v-card>
  
      <v-dialog max-width="500" persistent v-model="project_list_dialog">
                <v-card class="pa-2">
                    <v-toolbar color="transparent" class="px-4">
                             Recently Added
                        <v-spacer></v-spacer>
                        <v-btn color="red" size="small" @click="project_list_dialog = false"><v-icon>mdi-close</v-icon></v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-table density="compact">
                            <thead>
                            <tr>
                                <th class="text-left"> Project Name </th>
                                <th class="text-left"> Category </th>
                                <th class="text-left"> Action </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr
                                v-for="item in project_list"
                                :key="item.name"
                            >
                                <td>{{ item.project_name }}</td>
                                <td>{{ item.category }}</td>
                                <td><v-btn size="x-small" color="info" @click="view_recent(item.id)"><v-icon start >mdi-eye</v-icon> View</v-btn></td>
                            </tr>
                            </tbody>
                        </v-table>
                    </v-card-text>
                </v-card>
        </v-dialog>

    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'  
import axios from 'axios'; 
export default defineComponent({ 
    data() {
          return { 
            project_list_dialog: false,
            project_list: [],
          };
      },
    created(){
        // this.getImages();
    },
    methods: {
       async getImages(){ 
        try {
            const response = await axios.get('/api/invitation/get',{params:{action: 'carousel', type: this.$route.query.type}}); // Replace with your actual API endpoint
            this.images = response.data;
            console.log(response.data)
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        },
        async view_list(){
            try {
                const response = await axios.get('/api/invitation/get',{params:{action: 'get_project_list'   }}); // Replace with your actual API endpoint
                this.project_list = response.data; 
                this.project_list_dialog = true 
            } catch (error) {
                console.error('Error fetching project list:', error);
            } 
        }, 
        async view_recent(id: string){
            const response = await axios.get('/api/invitation/get',{params:{action: 'get_project',  id:  id  }}); // Replace with your actual API endpoint
            this.$store.state.form = response.data;  
                    const newUrl = `${window.location.origin}${window.location.pathname}?id=${response.data.id}`;
                    history.pushState(null, '', newUrl);
            this.project_list_dialog = false
        },
    }
})
</script>
