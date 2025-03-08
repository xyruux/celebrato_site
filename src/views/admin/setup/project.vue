<template>
    <div>
        <v-form ref="form">
            
        <v-card-text>
            <span class="mogra-regular " style="font-size: 25px;" >Library</span>
                            <hr class="ma-4">
            <v-card class="pa-2">
                <v-row>
                    <v-col cols="12">
                        <v-card class="pa-4" color="#F1F2F6" >
                            <v-row>
                                <v-col cols="12" >  
                                    <v-row>  
                                        <v-col cols="12" md="4">
                                            <h5><b>Project Name <abbr style="color:red">*</abbr></b></h5>
                                            <v-text-field :rules="rules" @input="save"  v-model="$store.state.form.name" placeholder="Wedding of ... " hide-details density="compact" variant="outlined">
                                            </v-text-field>
                                        </v-col>  
                                        <v-col cols="12" md="4">
                                            <h5><b>Category <abbr style="color:red">*</abbr></b></h5>
                                            <v-select :rules="rules"   v-model="$store.state.form.category" placeholder="Wedding"  :items="list_category" item-value="value" item-title="name"  hide-details density="compact" variant="outlined">
                                            </v-select>
                                        </v-col>  
                                        <v-spacer></v-spacer>
                                        <v-col class="my-auto">
                                            <v-btn     class="mx-1 rounded-lg" color="#333333" @click="$router.push({name: 'admin-templates', query: {id: $store.state.form.id, t: $store.state.form.t}})"><v-icon size="small" start>mdi-pencil</v-icon> Go to design</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col> 
                            </v-row>
                        </v-card> 
                    </v-col>
                    <v-col cols="12" v-if="$store.state.form.id"> 
                        <v-card class="pa-4" color="#333333" max-height="40rem" height="40rem" style="overflow-y: auto;">
                            <v-btn :loading="dropzone_loading" :height="$vuetify.display.mobile?'95':'55'" width="100%" class="mb-4" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><v-icon start>mdi-upload</v-icon> <p>Upload</p></v-btn>
                         
                            <v-row dense v-if="$store.state.form.file_names?.images?.length > 0"> 
                                <v-col cols="2" md="2"  v-for="(v,k) in $store.state.form?.file_names?.images" :key="k">
                                    <v-card class=" pt-0 border" max-height="120px"   width="100%" style="overflow-x: auto;"  > 
                                        <v-tooltip location="top" :text="decodeURIComponent((v as string)?.split('%7E')[1] +'.'+ (v as string).split('.')[4])">
                                        <template v-slot:activator="{ props }">
                                        <v-img v-bind="props" v-if="['ico','jpg','png','webp','gif'].includes(v?.split('.')[4] )" height="100"  style="object-position: top;" cover :src="v"> 
                                            <div class="d-flex pa-1">
                                            <v-spacer></v-spacer>
                                            <v-chip size="x-small" style="background-color: white; margin-right: 5px"  color="red"><b>.{{ (v as string).split(".")[4] }}</b></v-chip>
                                            <v-btn size="18" color="red" @click="remove_image(v)"> <v-icon >mdi-close</v-icon></v-btn>
                                            </div>
                                         </v-img>
                                         <div v-bind="props" v-else>
                                            <div class="d-flex pa-1">
                                            <v-spacer></v-spacer>
                                            <v-btn size="18" color="red" @click="remove_image(v)"> <v-icon >mdi-close</v-icon></v-btn>
                                            </div>
                                            <v-icon color="#333333" size="75">mdi-file</v-icon>
                                            <v-chip  color="red"><b>.{{ (v as string).split(".")[4] }}</b></v-chip>
                                        </div>
                                      <a target="_blank" :href="v" class="text-caption d-flex mx-1"> {{  decodeURIComponent((v as string)?.split("%7E")[1].length > 25? (v as string)?.split("%7E")[1].substr(0,25)+'...'+'.' + v.split(".")[4]: (v as string)?.split("%7E")[1] +'.'+ (v as string).split(".")[4] ) }}</a><a :href="v" target="_blank" ></a>
                                    </template>
                                    </v-tooltip>
                                    </v-card>
                                </v-col>
                            </v-row>
                            <v-row v-else>
                                <v-col cols="12" class="text-center">
                                    <h4>You haven't upload any Image/Videos yet.</h4><br>
                                    <v-btn :loading="dropzone_loading" variant="outlined" v-bind="dropzone.getRootProps()"><input v-bind="dropzone.getInputProps()" /><p>Upload</p></v-btn>
                
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card>
        </v-card-text>
        </v-form> 
    </div>
</template>
<script lang="ts"> 
import axios from 'axios'
import Swal from 'sweetalert2';
import { reactive, toRefs, defineComponent } from "vue";
import { useDropzone } from "vue3-dropzone";
export default defineComponent({
    components: {
      useDropzone
    },
    data() {
        return { 
            rules: [v => !!v || 'Name is required'],
            form: {
                carousel: [],
            }, 
            dropzone: reactive({
                getRootProps: () => ({}),
                getInputProps: () => ({}),
            }),  
            dropzone_loading: false,
            project_list: [],
            project_list_dialog: false,
            list_category: [
                {name: 'Wedding', value:'wedding'},
                {name: 'Birthday', value:'birthday'},
            ]
        }
    },
    created(){
        if(this.$route.query.id){
            this.current_id()
        }else{
            this.$router.push({name: 'admin-templates'})
        }
       
    },  
    mounted() {
    const maxFileSize = 10 * 1024 * 1024; // 10MB limit

    const dz = useDropzone({
        accept: "image/*,video/*",
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

            fetch("/api/editor", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => res.json())
            .then((data) => this.uploadSuccess(data))
            .catch((err) => this.uploadError(err))
            .finally(() => { this.uploadQueueComplete(); });
        },
    });

    // Assign the reactive dropzone properties
    Object.assign(this.dropzone, toRefs(dz));
},

    methods: {

        // file uploading. 
        onFileAdded(files) {
            this.dropzone_loading = true
        },
        uploadSuccess(response) { 
          this.current_id(); 
        },
         uploadError(error) { 
             Swal.fire( {
                title: "Unable to Upload!",
                icon: "warning",
                html: error,
                confirmButtonColor: "#fbeb04", 
                confirmButtonText: "Ok",
                showLoaderOnConfirm: true,})
        },
        uploadQueueComplete() {
           this.dropzone_loading = false
        }, 



        async current_id(){
            try {
                const response = await axios.get('/api/project',{params:{action: 'project',  id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.$store.state.form = response.data; 
            } catch (error) {
                console.error('Error fetching project:', error);
            } 
        },
     
        remove_image(id: string){
            this.$store.state.form.file_names.images.splice(this.$store.state.form.file_names.images.indexOf(id),1);
        },


        async save(clicked: boolean){  
            const { valid } = await this.$refs.form.validate()
            if(valid){
                try {
                this.$store.state.form.action = 'save';
                const response = await axios.post('/api/project',this.$store.state.form); // Replace with your actual API endpoint
                if(response.data){  
                    this.$store.state.form.id = response.data.id;
                    const newUrl = `${window.location.origin}${window.location.pathname}?id=${response.data.id}`;
                    history.pushState(null, '', newUrl);
                }
                } catch (error) {
                    console.error('Error fetching images:', error);
                }
            } 
        },
    },
    watch:{
        '$store.state.form.file_names.images': {
            handler(val = '') {
                if(val.length > 0){
                    this.save();  
                }
            },
            deep: true  
        },
        '$store.state.form.category'(val) {
           this.save();   
        }
    }
})
</script>
