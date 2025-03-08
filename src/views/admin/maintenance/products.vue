<template>
    <div>
        <v-card-text>
             <span class="mogra-regular " style="font-size: 25px;" >Products</span>
             <hr><br>
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="rounded-xl pa-4" color="#333333" rounded="xl">
                    <v-row>
                        <v-col cols="12"><v-text-field variant="solo" hide-details v-model="form.name" placeholder="Name"></v-text-field></v-col> 
                        <v-col cols="12"><v-textarea rows="4" variant="solo" hide-details v-model="form.description" placeholder="Description"></v-textarea></v-col> 
                        <v-col cols="12"><v-textarea rows="4" variant="solo" hide-details v-model="form.short_description" placeholder="Short Description"></v-textarea></v-col> 
                        <v-col cols="12" :md="form.cover?8:12">
                            <v-btn size="large" height="65" block v-bind="dropzone.getRootProps()" >
                                <input v-bind="dropzone.getInputProps()" />
                                <p>Upload Cover Layout</p>
                            </v-btn>
                        </v-col> 
                        <v-col cols="12" md="4" class="text-right" v-if="form.cover">
                            <v-img :src="form.cover" target="_blank" class="pa-2"> 
                              <v-btn color="red" size="20"> <v-icon @click="form.cover = ''">mdi-close</v-icon> </v-btn>
                            </v-img>
                        </v-col>
                        <v-col cols="12"><v-text-field variant="solo" hide-details v-model="form.code" placeholder="Code"></v-text-field></v-col> 
                        <v-col cols="12">
                            <v-radio-group v-model="form.status" inline>
                                <v-radio label="ACTIVE" value="ACTIVE" ></v-radio>
                                <v-radio label="INACTIVE" value="INACTIVE" ></v-radio>
                            </v-radio-group>
                        </v-col> 
                        <v-col>
                            <v-btn  block size="large" @click="save" color="primary"><template v-if="form.id">Update</template><template v-else>Save</template> </v-btn>
                            <v-btn v-if="form.id" @click="formReset()" block size="large"  variant="tonal">Cancel </v-btn>
                         
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" md="8" > 
                <v-row>
                    <v-col cols="12" v-for="(v,k) in table" :key="k">

                        <v-card @click="form = v" class="rounded-xl pa-4" color="#333333"   rounded="xl">
                    <v-row>
                        <v-col cols="4">
                            <v-img :src="v.cover"></v-img>
                        </v-col>
                        <v-col>
                            <b><h2> <v-icon start>mdi-circle-medium</v-icon>  {{  v.name }}</h2></b>
                            <span v-html="v.description"></span><br>
                        </v-col>
                    </v-row>
                 
                </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        </v-card-text> 
    </div>
</template>


<script lang="ts">  
import axios from 'axios'
import { defineComponent } from 'vue'   
import { useDropzone } from "vue3-dropzone";
import { reactive, toRefs } from "vue";
import Swal from 'sweetalert2'
import "dropzone/dist/dropzone.css"; 
export default defineComponent({ 
    components:{
        useDropzone
    },
    data() {
        return {   
            dropzone: reactive({
                getRootProps: () => ({}),
                getInputProps: () => ({}),
            }),  
            form: {
                id: '',
                action: '',
                name: '',
                description: '',
                short_description: '',
                cover: '',
                code: '',
                status: 'ACTIVE',
            },
            fields: [], 
            search: '',
            table: [],
        }
    },
    created(){
        this.getTable();
    }, 

    mounted() {
        const dz = useDropzone({
        onDrop: (files) => {
                console.log("Files dropped:", files);
                const token = this.$store.state.token || localStorage.getItem("authToken");
        
                // Simulating file upload
                const formData = new FormData();
                files.forEach((file) => formData.append("files[]", file));
            
                // Append extra params
                Object.entries({ action: 'product_upload' }).forEach(([key, value]) => { formData.append(key, value); }); 
                fetch("/api/maintenance", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                })
                .then((res) => res.json())
                .then((data) => this.uploadSuccess(data))
                .catch((err) =>  this.uploadError(err))
                .finally(() => { this.uploadQueueComplete()});
            },
        });

    // Assign the reactive dropzone properties
    Object.assign(this.dropzone, toRefs(dz));
  },
    methods: {
         onFileAdded(files) {
            console.log("Files added:", files);
            },
            uploadSuccess(response) {
                 this.form.cover =  response[0];
            },
            uploadError(error) {
                this.form.cover = error[0]
            },
            uploadQueueComplete() {
            console.log("All uploads completed.");
            }, 
        async getTable(){
            try {
                this.headers= [];
                this.form.action = 'products'
                const response = await axios.get('/api/maintenance',{params: this.form}); // Replace with your actual API endpoint
                this.table = response.data;
            } catch (error) {
                console.error('Error fetching project:', error);
            } 
        },
        async save() {
            Swal.fire({
                title: "Do you want to save this information?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#fbeb04", 
                confirmButtonText: "Continue",
                showLoaderOnConfirm: true, // Shows a loader while processing
                allowOutsideClick: () => !Swal.isLoading(), // Prevent closing while loading
                preConfirm: async () => {
                    try {
                        this.form.action = "save_product";
                        const response = await axios.post("/api/maintenance", this.form);

                        if (!response.data) {
                            throw new Error("Invalid response from server");
                        }
                        return response.data; // Return data for further handling
                    } catch (error) {
                        Swal.showValidationMessage(`Save failed: ${error.message}`);
                        console.error("Save error:", error);
                        return false;
                    }
                }
            }).then((result) => {
                if (result.isConfirmed && result.value) {
                    Swal.fire({
                        title: "Success!",
                        text: "The information has been successfully saved!",
                        icon: "success"
                    });
                    this.formReset();
                    this.getTable();
                }
            });
        },
        formReset(){
            this.form = { 
                id: '',
                action: '',
                name: '',
                description: '',
                cover: '',
                code: '',
                status: 'ACTIVE'
            }
        }
    },
})
</script>