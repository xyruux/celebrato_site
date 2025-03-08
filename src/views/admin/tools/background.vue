<template>
    <div>
        <v-card flat style="min-height: 20rem; max-height: 40rem;"> 
            <span>Background</span><br><hr><br>
        <v-row>
            <v-col>
                <v-radio-group hide-details v-model="form[0]" inline >
                    <v-radio label="Image" value="1" ></v-radio>
                    <v-radio label="Color" value="2" ></v-radio>
                </v-radio-group>
            </v-col>
        </v-row>
        <!-- Image -->
        <template v-if="form[0] == '1'"> 
            <v-row>
                <v-col cols="12" md="12">
                    <v-card flat class=" boarder pa-2"   style="overflow-y: auto;" :style="$vuetify.display.mobile?'max-height: 10rem; min-height: 10rem; ': 'max-height: 15rem; min-height: 15rem;'">
                        <v-row dense v-if="images.length > 0">  
                            <v-col cols="4" md="3"  >
                                <v-btn :loading="dropzone_loading" :height="$vuetify.display.mobile?'95':'125'" width="100%" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                            </v-col>
                            <template v-for="(v,k) in images">
                            <v-col cols="4" md="3" :key="k" v-if="['ico','jpg','png','webp','gif'].includes((v as string)?.split('.')[4] )">
                                <v-card class="pa-1" color="#333333"  :height="$vuetify.display.mobile?'95':'125'" width="100%" style="overflow-x: auto;" > 
                                    <v-tooltip location="top" :text="decodeURIComponent((v as string)?.split('%7E')[1] +'.'+ (v as string).split('.')[4])">
                                        <template v-slot:activator="{ props }">
                                            <v-img v-bind="props" @click="selectImage(v)" height="100" class="text-center pa-4"  style="object-position: top;" cover :src="v"> 
                                                <v-icon color="primary" style="text-shadow: -1px -1px 0 black,  1px -1px 0 black, -1px  5px 0 black, 1px  5px 0 black;" size="50" v-if=" form?.[1] ===  v ">mdi-check-circle</v-icon>
                                            </v-img> 
                                        </template>
                                    </v-tooltip>
                                <small class="caption d-flex mx-1"> {{  decodeURIComponent((v as string)?.split("%7E")[1].length > 20? (v as string)?.split("%7E")[1].substr(0,20)+'...'+'.' + (v as string).split(".")[4]: (v as string)?.split("%7E")[1] +'.'+ (v as string).split(".")[4] ) }}</small><a :href="v" target="_blank" ></a>
                                </v-card>
                            </v-col>
                            </template>
                        </v-row>
                        <v-row v-else>
                    <v-col cols="12" class="text-center">
                        <h4>You haven't upload any file yet.</h4><br>
                        <v-btn :loading="dropzone_loading" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                    </v-col>
                </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" md="12"> 
                        <span>Opacity</span>
                        <v-row no-gutters>
                            <v-col cols="5" md="3">
                                <v-text-field hide-details type="number" reverse   density="compact" v-model="form[2]" > 
                                    <template v-slot:append-inner>%</template>
                                </v-text-field>  
                            </v-col>
                            <v-col cols="7" md="9">
                                <v-slider
                                    v-model="form[2]"
                                    :thumb-size="36"
                                    :max=".9"
                                    :step=".1"
                                ></v-slider> 
                            </v-col>
                        </v-row>

                        <span>Grayscale</span>
                        <v-row no-gutters>
                            <v-col cols="5" md="3">
                                <v-text-field hide-details type="number" reverse   density="compact" v-model="form[3]" >
                                <template v-slot:append-inner>%</template>
                            </v-text-field>  
                            </v-col>
                            <v-col cols="7" md="9">
                                <v-slider
                                v-model="form[3]"
                                :thumb-size="36"
                                :max="100"
                                    :step="1"
                            ></v-slider>  
                            </v-col> 
                        </v-row>  
                </v-col>
            </v-row>
        </template>
        <template v-else>
            <v-color-picker  width="100%"
                hide-canvas hide-sliders
                show-swatches v-model="form[1]">
            </v-color-picker>
        </template>
 
    </v-card>
    </div>
</template>

<script lang="ts"> 
import axios from 'axios'
import Swal from 'sweetalert2';
import { useDropzone } from "vue3-dropzone";
import { reactive, toRefs, defineComponent } from "vue";
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
            dropzone_loading: false,
            images: [],  

            option: '1',
            form: [],
        }
    },
    created(){
        this.form = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];
        this.current_id();   
    },
    mounted() {
        const maxFileSize = 10 * 1024 * 1024; // 10MB limit
        const dz = useDropzone({
        accept: "image/*",  // Accept only video files
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
        // upload
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
 
        // files
        selectImage(v: string){
            if(this.form[1] == v){
                this.form[1] = null;
            }else{
                this.form[1] = v; 
            }
        },
        async current_id(){
            try {
                const response = await axios.get('/api/admin-project',{params:{action: 'files',  id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.images = response.data.images;
            } catch (error) {} 
        },   
    },
})
</script>

