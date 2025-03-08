<template>
    <div>  
        <v-card flat style="min-height: 20rem; max-height: 40rem;"> 
            <span>Tile</span><br><hr><br>
        <v-card-text style="min-height: 20rem; max-height: 40rem; overflow-y: auto;" > 
            <v-card class="pa-4" color="#333333" max-height="30rem" min-height="30rem"  >
                <v-row dense v-if="images.length > 0">  
                <v-col cols="4" md="3"  >
                    <v-btn :loading="dropzone_loading" height="125" width="100%" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                </v-col>
                <template v-if="$store.state.form_theme.demo?.tiles[0].length > 0">
                    <v-col cols="4" md="3" v-if="!images.includes($store.state.form_theme.demo?.tiles[0][0])"  >
                        <v-btn   @click="$store.state.form_theme.demo.tiles[0] =[]"   :height="$vuetify.display.mobile?'95':'125'" width="100%" variant="outlined" > <p>Demo</p>
                            
                            <v-icon color="primary" style="margin-left: 10px; text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px  5px 0 black, 1px 5px 0 black;" size="50">mdi-check-circle</v-icon>
                        </v-btn>
                    </v-col>
                </template>
                <template v-for="(v,k) in images" :key="k">
                <v-col cols="4" md="3"  v-if="['ico','jpg','png','webp','gif'].includes((v as string)?.split('.')[4] )">
                    <v-card class="pa-1" color="#333333"  :height="$vuetify.display.mobile?'95':'125'" width="100%" style="overflow-x: auto;" > 
                        <v-tooltip location="top" :text="decodeURIComponent((v as string)?.split('%7E')[1] +'.'+ v.split('.')[4])">
                            <template v-slot:activator="{ props }">
                                <v-img v-bind="props" @click="selectImage(v)" height="100" class="text-center pa-4"  style="object-position: top;" cover :src="v"> 
                                    <v-icon color="primary" style="text-shadow:  -1px -1px 0 black, 1px -1px 0 black,  -1px  5px 0 black, 1px  5px 0 black;" size="50" v-if="$store.state.form_theme.demo?.tiles[0].includes(v )">mdi-check-circle</v-icon>
                                </v-img> 
                            </template>
                        </v-tooltip>
                    <small class="caption d-flex mx-1"> {{  decodeURIComponent((v as string)?.split("%7E")[1].length > 15? (v as string)?.split("%7E")[1].substr(0,15)+'... '+'.' + (v as string)?.split(".")[4]: (v as string)?.split("%7E")[1] +'.'+ (v as string)?.split(".")[4] ) }}</small><a :href="v" target="_blank" ></a>
                    </v-card>
                </v-col>
                </template>
            </v-row>
                <v-row v-else>
                    <v-col cols="12" class="text-center">
                        <h4>You haven't upload any Image/Videos yet.</h4><br>
                        <v-btn :loading="dropzone_loading" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                    </v-col>
                </v-row>
            </v-card> 
            <v-col cols="12">
                <br>
                    <v-row>
                        <v-col cols="12" md="6" class="d-flex" > 
                            <v-text-field type="number" reverse max-width="150" density="compact" v-model="$store.state.form_theme.demo.tiles[1]" >
                                <template v-slot:prepend-inner>Width:</template>
                                <template v-slot:append-inner>%</template>
                            </v-text-field> 
                            <v-slider v-model="$store.state.form_theme.demo.tiles[1]" :step="1" :thumb-size="36" :max="100" ></v-slider>  
                        </v-col>
                        <v-col cols="12" md="6" class="d-flex" > 
                            <v-text-field type="number" reverse max-width="150" density="compact" v-model="$store.state.form_theme.demo.tiles[2]" >
                                <template v-slot:prepend-inner>Height:</template>
                                <template v-slot:append-inner>px</template>
                            </v-text-field> 
                            <v-slider v-model="$store.state.form_theme.demo.tiles[2]" :step="1" :thumb-size="36" :max="1000" ></v-slider>  
                        </v-col>
                        <v-col cols="12" md="6"  > 
                            <span>Count per Row:</span>
                        <v-text-field type="number" reverse   density="compact" v-model="$store.state.form_theme.demo.tiles[4]" >
                      
                        </v-text-field>
                        </v-col>
                        <v-col>
                            <v-checkbox v-model="$store.state.form_theme.demo.tiles[3]" label="Show Gallery Button"></v-checkbox>
                        </v-col> 
                    </v-row>
                </v-col> 
        
    </v-card-text>
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
            type: 1,
            images: [], 
            form: [],

            dropzone: reactive({
                getRootProps: () => ({}),
                getInputProps: () => ({}),
            }),  
            dropzone_loading: false,
        }
    },
    created(){ 
    //    this.form  = this.$store.state.editor_form[Object.keys(this.$store.state.editor_form)[0]][1];

       console.log(this.form)
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
            if(!this.$store.state.form_theme.demo?.tiles[0].includes(v)){
                this.$store.state.form_theme.demo?.tiles[0].push(v)
            }else{
                this.$store.state.form_theme.demo?.tiles[0].splice(this.$store.state.form_theme.demo?.tiles[0].indexOf(v),1)
            }    
        },
        
        remove_image(v){
            this.images.splice(this.images.indexOf(v),1)
        },
        async current_id(){
            try {
                const response = await axios.get('/api/admin-project',{params:{action: 'files',  id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.images = response.data.images;
            } catch (error) {} 
        }, 

}
})
</script>