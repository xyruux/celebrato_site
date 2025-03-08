<template>
    <div> 
        <v-snackbar
        v-model="snackbar[0]"
        :color="snackbar[1]"
        >
        {{  snackbar[2] }}
        </v-snackbar>  
 
        
        <v-card-text> 
            <v-row v-if="$store.state.form_theme">
                <v-col cols="10">
                  
                </v-col>
                <v-col>
                    <v-btn   class="mx-1" size="small" color="black" @click="$store.state.editor_form.colors = $store.state.form_theme.demo?.colors; editorForm('2','colors',$store.state.form_theme.demo?.colors);"><v-icon size="small" start>mdi-content-save</v-icon> Theme Color</v-btn>
                    <v-btn   v-if="!$store.state.form_theme.id" class="mx-1" size="small" color="black" @click="save"><v-icon size="small" start>mdi-content-save</v-icon> Save</v-btn>
                    <v-btn v-else class="mx-1" size="small" color="black" @click="save(false)"><v-icon size="small" start>mdi-content-save</v-icon> Update</v-btn>
                </v-col>
            </v-row>

     </v-card-text>

     <editorDialog/>
   
    </div>
</template>
<script lang="ts"> 
import axios from 'axios'
import editorDialog from './setup/editor.vue'
import { defineComponent } from 'vue' 
export default defineComponent({ 
    components: {
        editorDialog
    },
    data() {
        return { 
            hideTitle: false,
            snackbar: [],
            rules: [v => !!v || 'Name is required'], 
            dropzoneUrl1: import.meta.env.VITE_API_URL +'/api/invitation/post',
            dropzoneOptions1: {
                maxFilesize: 5, 
                maxFiles: null, 
                uploadMultiple: true,
                acceptedFiles: "image/*", 
                addRemoveLinks: true,  
            },
            project_list: [],
            project_list_dialog: false,
            list_category: [
                {name: 'Wedding', value:'wedding'},
                {name: 'Birthday', value:'birthday'},
            ],
            iframeSrc: 'http://127.0.0.1:5173/templates/demo/s?id='+this.$route.query.id+'&t='+this.$route.query.t + '&timestamp=' + new Date().getTime(),
        }
    },
    created(){
       this.getData();
    },
    methods: {
        editorForm(type: string,field: string, value: string){
            this.$store.state.editor_dialog = true;
            this.$store.state.editor_form = {[field]: [type,value]};
        },
        async getData(){
            const r = await axios.get('/api/invitation/get',{params:{action: 'get_admin_themes',  t: 1 }}); // Replace with your actual API endpoint
                this.$store.state.form_theme = r.data; 

                const response = await axios.get('/api/invitation/get',{params:{action: 'get_admin_themes', t: 1, id: this.$route.query.id  }}); // Replace with your actual API endpoint
                this.$store.state.form_theme.demo = response.data.demo; 
       
        },
        reloadIframe() {
            this.iframeSrc = 'http://127.0.0.1:5173/templates/demo/s?id='+this.$route.query.id+'&t='+this.$route.query.t + '&timestamp=' + new Date().getTime();
        },

        async save(clicked: boolean){  
            let data = this.$store.state.form_theme;
                try {
                    data.action = 'save_theme_to_project';
                    data.id = this.$route.query.id;

                const response = await axios.post('/api/invitation/post',data); // Replace with your actual API endpoint
                if(response.data){ 

                    this.reloadIframe();
                    if(clicked){
                        this.snackbar = [true,'success','The information has been successfully saved!'];
                    } 
                }
                } catch (error) {
                    console.error('Error fetching images:', error);
                } 
        },
    },
    watch:{
        '$store.state.editor_dialog'(val){
            if(!val){
                this.save();
            }
        }
    }
})
</script>
