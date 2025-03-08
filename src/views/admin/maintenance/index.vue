<template>
    <div>
        <v-card-text>
        <v-row >
            <v-col cols="6" md="2" v-for="(v,k) in data" :key="k" >
                <v-card @click="component_to_show = v.route; "   class="pa-4 elevation-4"  :color="component_to_show == v.route?'#fbeb04':'#333333'" >
                    <v-icon size="20" start>mdi-cog</v-icon> <b style="font-size: 15px; " :style="component_to_show != v.route?'color: #fbeb04':'color: #333333'">{{v.title}}</b>
                </v-card>
            </v-col>
        </v-row> 
                <component class="border rounded-xl mt-2" v-if="filteredComponent" :is="filteredComponent"/> 
        </v-card-text>
    </div>
</template>

<script lang="ts">  
import { defineComponent } from 'vue'   
const modules = import.meta.glob('./*.vue', { eager: true }) as Record<string, { default: any }>;
export default defineComponent({ 
    data() {
        return {  
            data: [
                {title: 'Products', route: 'products'},
                {title: 'Product Themes', route: 'themes'},
                // {title: 'Products', route: 'products'},
                // {title: 'Products', route: 'products'}
            ],
            components: Object.fromEntries(
                Object.entries(modules).map(([path, module]) => {
                const name = path.split('/').pop()?.replace('.vue', '') ?? '';
                return [name, module.default];
                })
            ) as Record<string, any> ,
            component_to_show: '',
        }
    },
    computed: {
        filteredComponent() {
            const targetName = this.component_to_show;
            return this.components[targetName] || null;
        },
    },
  
    created(){
       
    }, 
})
</script>