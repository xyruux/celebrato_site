<template>
    <div>
        <v-card-text>
             <span class="mogra-regular " style="font-size: 25px;" >Themes</span>
             <hr><br>
             <v-row >
                <v-col cols="6" md="3">
                    <v-autocomplete variant="solo"  class="primary"  v-model="selected" :items="table" item-title="name" item-value="id"></v-autocomplete>
                </v-col> 
                <v-col cols="6" md="3">
                    <v-autocomplete  :items="table.filter(val => val.id == selected)[0]?.themes" item-title="name"  :return-object="true" variant="solo"  v-model="category" ></v-autocomplete>
                </v-col> 
                <v-col class="text-right">
                    <v-btn @click="addNew" size="large" class="my-auto" color="primary"><v-icon start>mdi-plus</v-icon> New</v-btn>
                </v-col>
            
        </v-row> 
        <v-row>
            <v-col cols="12" md="4">
                <v-card class="rounded-xl pa-4" color="#333333" rounded="xl">
                    <v-row>  
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.category"  variant="solo"  hide-details  placeholder="Category"></v-text-field>
                        </v-col> 
                        <v-col cols="12" md="12">
                            <v-text-field v-model="form.name"  variant="solo"  hide-details  placeholder="Name"></v-text-field>
                        </v-col> 
                        <v-col cols="12"><v-textarea rows="4" variant="solo" hide-details v-model="form.description" placeholder="Description"></v-textarea></v-col> 
                        <v-col cols="12"  md="12">
                            <v-btn size="large" height="65" block v-bind="dropzone.getRootProps()" >
                                <input v-bind="dropzone.getInputProps()" />
                                <p>Upload Cover Layout</p>
                            </v-btn>
                        </v-col> 
                       
                        <v-col cols="12" md="12">
                            <v-radio-group v-model="form.status" inline>
                                <v-radio label="ACTIVE" value="ACTIVE" ></v-radio>
                                <v-radio label="INACTIVE" value="INACTIVE" ></v-radio>
                            </v-radio-group>
                        </v-col> 
                        <v-col cols="12" md="12" class="d-flex" style="overflow-x: auto;" v-if="form.cover?.images?.length > 0">
                            <v-img  min-width="200px" max-height="150px" cover :src="vv" v-for="(vv,kk)  in form.cover?.images" :key="kk" class="pa-2 mx-1"> 
                                <v-btn @click="form.cover.images.splice(form.cover?.images.indexOf(vv),1)" style="position: absolute; top: 10px; right: 10px;" color="red" size="20"> <v-icon>mdi-close</v-icon> </v-btn>
                            </v-img>  
                        </v-col>
                        <v-col  cols="12" class="d-flex animate__animated pa-0 animate__flipInX"  style="overflow-x: auto;">
                            <v-img :href="v" v-for="(v,k) in $store.state.form_theme.demo?.tiles?.[0]" :key="k" :class="' animate__animated  animate__flipInX animate__delay-'+k+'s'"  cover :height="($vuetify.display.mobile? $store.state.form_theme.demo?.tiles[2] * 0.7:  $store.state.form_theme.demo?.tiles[2])+'px'" :width="($vuetify.display.mobile? $store.state.form_theme.demo?.tiles[1] + -20: $store.state.form_theme.demo?.tiles[1]) +'%'" class="rounded-lg mr-2" :src="v"></v-img> 
                        </v-col> 
                      
                        <v-col>
                            <v-btn  block size="large" @click="save" color="primary"><template v-if="form.id">Update</template><template v-else>Save</template> </v-btn>
                            <v-btn v-if="form.id" @click="formReset()" block size="large"  variant="tonal">Cancel </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>  
                <v-col cols="12" md="8" >
                    <span><b>Demo Data</b> </span>
                    <v-textarea rows="25" class="json-textarea" variant="solo" hide-details v-model="form.demo" placeholder="Demo"></v-textarea>
            </v-col> 
                  
        </v-row>
        </v-card-text> 
    </div>
</template>

<style scoped>
.json-textarea {
  font-family: monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>

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
            selected: null,
            category: null,
            dropzone: reactive({
                getRootProps: () => ({}),
                getInputProps: () => ({}),
            }),  
            form: {
                action: '',
                category: '',
                cover: {
                    images: [],
                },
                demo: '',
                description: '', 
                id: '',
                name: '',
                product_id: '',
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
    watch:{
        'category'(val){ 
            if(val){
                this.editData(val)

            }
        }
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
                Object.entries({ action: 'theme_upload' }).forEach(([key, value]) => { formData.append(key, value); }); 
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
                this.form.cover.images.push(response[0]);
        },
        uploadError(error) {
            
        },
        uploadQueueComplete() {
        
        }, 
        addNew(){
            this.category = ''
            this.formReset()
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
        editData(v: any){
          
            this.form  = {   
                name: v.name,
                cover: v.cover,
                demo: JSON.stringify(v.demo, null, 2),
                description: v.description,
                id: v.id, 
                product_id: v.product_id,
                status: v.status,
            } 
            console.log(this.form)
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
                        this.form.product_id = this.selected
                        this.form.action = "save_theme";
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
                action: '',
                category: '',
                cover: {
                    images: [],
                },
                demo: '',
                description: '',
                id: '',
                name: '',
                product_id: '',
                status: 'ACTIVE',
            }
        }
    },
})
</script>