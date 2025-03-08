<template>
    <div> 
        <span>Video</span><br><hr><br>
        <v-card flat style="min-height: 20rem; max-height: 40rem;"> 
            <v-card flat class=" boarder pa-2"   style="overflow-y: auto;" :style="$vuetify.display.mobile?'max-height: 10rem; min-height: 10rem; ': 'max-height: 20rem; min-height: 20rem;'">
                <v-row  v-if="images.length > 0">
                    <v-col cols="12" >
                        <v-row>
                            <v-col cols="4" md="3"  >
                                <v-btn :loading="dropzone_loading" :height="$vuetify.display.mobile?'95':'125'" width="100%" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                            </v-col>
                            <template v-if="form[0]">
                                <v-col cols="4" md="4" v-if="!images.includes(form[0])"  >
                                    <v-btn   @click="form[0] = null"   :height="$vuetify.display.mobile?'95':'125'" width="100%" variant="outlined" > <p>Demo</p>
                                        <v-icon color="primary" style="margin-left: 10px; text-shadow:  -1px -1px 0 black,   1px -1px 0 black,   -1px  5px 0 black, 1px  5px 0 black;" size="50"  >mdi-check-circle</v-icon>
                                    </v-btn>
                                </v-col>
                            </template>
                            <template   v-for="(v,k) in images">
                                <v-col cols="4" md="4" :key="k" v-if="['mp4','avi'].includes(v?.split('.')[4] )">
                                    <v-card class=" boarder pa-2"  width="100%"   @click="selectImage(v)"> 
                                        <v-tooltip location="top"  :text="decodeURIComponent(v?.split('%7E')[1] +'.'+ v.split('.')[4])">
                                            <template v-slot:activator="{ props }">
                                                <div v-bind="props"  class="d-flex pa-1">
                                                    <v-icon color="#333333" size="75">mdi-video</v-icon>
                                                    <v-icon color="primary" style="text-shadow:  -1px -1px 0 black,   1px -1px 0 black,   -1px  5px 0 black, 1px  5px 0 black;" size="50" v-if="form?.[0] == v">mdi-check-circle</v-icon>
                                                </div>
                                            </template>
                                            </v-tooltip>
                                            <a target="_blank" :href="v" class="text-caption d-flex mx-1"> {{  decodeURIComponent(v?.split("%7E")[1].length > 25? v?.split("%7E")[1].substr(0,25)+'...'+'.' + v.split(".")[4]: v?.split("%7E")[1] +'.'+ v.split(".")[4] ) }}</a><a :href="v" target="_blank" ></a>
                                    </v-card>
                                </v-col>
                            </template>   
                        </v-row> 
                    </v-col> 
                </v-row>
                <v-row v-else>
                    <v-col cols="12" class="text-center">
                        <h4>You haven't upload any Videos yet.</h4><br>
                        <v-btn :loading="dropzone_loading" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                    </v-col>
                </v-row>   
            </v-card>
        <v-row> 
             <v-col> 
                    <span>Width</span>
                    <v-row no-gutters>
                        <v-col cols="5" md="3">
                            <v-text-field hide-details type="number" reverse   density="compact" v-model="form[1]" > 
                                <template v-slot:append-inner>%</template>
                            </v-text-field>  
                        </v-col>
                        <v-col cols="7" md="9">
                            <v-slider  v-model="form[1]" :step="1" :thumb-size="36" :max="100"  ></v-slider> 
                        </v-col>
                    </v-row>
                    <span>Height</span>
                    <v-row no-gutters>
                        <v-col cols="5" md="3">
                            <v-text-field hide-details type="number" reverse   density="compact" v-model="form[2]" > 
                                <template v-slot:append-inner>px</template>
                            </v-text-field>  
                        </v-col>
                        <v-col cols="7" md="9">
                            <v-slider  v-model="form[2]" :step="1" :thumb-size="36" :max="1000"   ></v-slider> 
                        </v-col>
                        <v-col cols="12">
                            <v-checkbox hide-details v-model="form[3]" label="Add Link below the video"></v-checkbox>
                        </v-col> 
                    </v-row>  
            </v-col>
        </v-row>

        </v-card>

    
    </div>
</template>

<script lang="ts"> 
import axios from 'axios' 
import { useDropzone } from "vue3-dropzone";
import { reactive, toRefs, defineComponent } from "vue";
import Swal from 'sweetalert2';
export default defineComponent({ 
    data() {
        return {  
            form: [], 
            images: [], 
            slides_image: [],

            dropzone: reactive({
                getRootProps: () => ({}),
                getInputProps: () => ({}),
            }),  
            dropzone_loading: false,
        }
    },
    created(){
        this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
        this.current_id();   
    },
    mounted() {
        const maxFileSize = 10 * 1024 * 1024; // 10MB limit
        const dz = useDropzone({
        accept: "video/*",  // Accept only video files
        onDrop: (files) => { 
                const token = this.$store.state.token || localStorage.getItem("authToken");
                  // Check if any file exceeds the size limit
            const hasInvalidFile = files.some(file => file.size > maxFileSize);
            if (hasInvalidFile) {
                this.uploadError("One or more files exceed the 10MB limit. Please upload smaller files.");
                return;
            }

            // Simulating file upload
            const formData = new FormData();
            files.forEach((file) => formData.append("files[]", file));

            this.onFileAdded(files);

            // Append extra params
            Object.entries({ action: 'upload', id: this.$route.query.id }).forEach(([key, value]) => {
                formData.append(key, value);
            });


                // Append extra params
                Object.entries(
                    { action: 'upload', id: this.$route.query.id } 
                ).forEach(([key, value]) => { formData.append(key, value); }); 
                fetch("/api/admin-project", {
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
            this.dropzone_loading = true
        },
        uploadSuccess(response) { 
            this.current_id();
        },
        uploadError(error) { 
             Swal.fire("Unable to Upload file", JSON.stringify(error), 'warning')
        },
        uploadQueueComplete() {
           this.dropzone_loading = false
        }, 
        selectImage(v: string){ 
            if(this.form[0] == null){
                setTimeout(() => {
                    this.form[0] = v; 
                }, 400);
            }else{

                this.form[0] = null; 
            }
        
        },

        async current_id(){
            try {
                const response = await axios.get('/api/admin-project',{params:{action: 'files',  id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.images = response.data.videos 
                if(response.data.theme){
                    this.slides_image =  JSON.parse(response.data.theme).background 
                }
            } catch (error) {
                console.error('Error fetching project:', error);
            } 
        }, 

    },


})
</script>

