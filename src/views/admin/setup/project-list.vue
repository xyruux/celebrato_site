<template>
    <div>
        <v-card-text> 
                <v-data-table :items-per-page="-1" hide-default-footer
                    :headers="headers"
                    :search="search" 
                    :items="table"  density="compact"
                    item-key="name" class="border rounded-xl"
                >

                <template v-slot:top>
                    <div class="d-flex pa-4">
                    <span class="mogra-regular " style="font-size: 25px;" >Project List</span>
                    <v-spacer></v-spacer>
                        <v-btn @click="$router.push({name: 'admin-templates'})" color="primary" class="mx-4 my-auto" size="large"><v-icon>mdi-plus</v-icon></v-btn>
                        <v-text-field v-model="search" hide-details max-width="400"  variant="outlined" rounded="lg" label="Search">
                            <template v-slot:append-inner><v-icon>mdi-magnify</v-icon></template>
                        </v-text-field>
            </div>
                </template>






                <template v-slot:[`item.status`]="{ item }">
                    <v-chip v-if="item.status=='COMPLETED'" color="success">  {{ item.status }}  </v-chip>
                        <v-chip v-if="item.status=='PENDING'" color="warning">  {{ item.status }}  </v-chip>
                        <v-chip v-if="item.status=='NEED ACTION'" color="error">  {{ item.status }}  </v-chip>
                        <v-chip v-if="item.status=='CANCELLED'" color="">  {{ item.status }}  </v-chip>
                </template>
                <template v-slot:[`item.user`]="{ item }">
                   <b>{{ item.user.name }}</b> <br><small>{{ item.user.email }}</small>
                </template>
                <template v-slot:[`item.theme`]="{ item }">
                    <b>{{ item?.theme?.name }}</b> <br><small>{{ item?.theme?.category }}</small>
                </template>
                <template v-slot:[`item.created_at`]="{ item }">
                    {{ getFormatDate(item.created_at, "MM/DD/YYYY HH:MM A") }}  
                </template>
                    
                <template v-slot:[`item.id`]="{ item }">
                        <v-chip class="mx-1" @click="viewWebsite(item)" color="info"><v-icon>mdi-eye</v-icon>  </v-chip>
                        <v-chip class="mx-1" @click="filesUploaded(item)" color="info"><v-icon>mdi-folder-file</v-icon>  </v-chip>
                        <!-- <v-chip class="mx-1" @click="schedulesDates(item)" color="info"><v-icon>mdi-calendar</v-icon>  </v-chip> -->
                    </template>
                </v-data-table>  
         </v-card-text>
    </div>
</template>
<script lang="ts"> 
import axios from 'axios'
import moment from 'moment'
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return { 
            search: '',
            table: [],
            headers: []
        }
    },
    created(){
        this.getData()
    },
    methods: {
        getFormatDate(e, format) {
        const date = moment(e);
        return date.format(format);
        },
        async filesUploaded(val: any){
            this.$router.push({name: 'admin-project', query: { id: val.id, t: val.theme.id } })
        },
        async viewWebsite(val: any){
            this.$router.push({name: 'admin-template-website-editor', query: { id: val.id, t: val.theme.id } })
        },
        async schedulesDates(val: any){
        },


        async getData(){
            try {
                const response = await axios.get('/api/admin-project',{params:{action: 'project_list' }}); 
                this.table = response.data.data; 
                this.headers = response.data.column;
            } catch (error) {
                console.error('Error fetching project:', error);
            } 
        },
    }
}
)
</script>