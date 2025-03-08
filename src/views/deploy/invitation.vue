<template>
    <div> 
      <component 
        v-if="filteredComponent"
        :is="filteredComponent"
      />
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from 'vue';
  const modules = import.meta.glob('../themes/*.vue', { eager: true }) as Record<string, { default: any }>;
  export default defineComponent({
    data() {
      return {
        editor: true,
        snackbar: [],
        components: Object.fromEntries(
          Object.entries(modules).map(([path, module]) => {
            const name = path.split('/').pop()?.replace('.vue', '') ?? '';
            return [name, module.default];
          })
        ) as Record<string, any>
      };
    },
    computed: {
      filteredComponent() {
        const targetName = `t${this.$route.query.t as string}`;
        return this.components[targetName] || null;
      }
    },
  });
  </script>
  