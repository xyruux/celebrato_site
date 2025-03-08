<template>
  <div translate="no">
    <div class="notranslate grid md:grid-cols-2 lg:grid-cols-3 p-4 shadow m-4 rounded-lg"> 
      <v-text-field v-model="search" placeholder="Search" outlined dense hide-details>
        <template #prepend-inner>
          <v-icon left>mdi-magnify</v-icon>
        </template>
      </v-text-field>  
      <v-data-table :search="search" hide-default-header height="300" :items-per-page="-1" :headers="headers" hide-default-footer :items="filteredCountries">
        <template v-slot:[`item.title`]="{ item }">
          <v-card width="100%" flat color="transparent" height="50px" class="d-flex py-0 mx-0" @click="doTranslation(item.code)">
            <country-flag
                style="margin-top: -8px; max-width: 50px; height: 40px;"
                class="rounded-xl my-auto"
                :country="item.flag"
              />
            <abbr class="my-auto ml-4"><b>{{ item?.title }}</b></abbr>
          </v-card>
        </template>
      </v-data-table>
    </div> 
    <v-overlay v-if="loading">
      <v-progress-circular size="55" color="primary darken-2" indeterminate></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'; 
import { useStore } from 'vuex';
import countryFlag from 'vue-country-flag-next'
interface Country {
  title: string;
  code: string;
  flag: string;
}

export default defineComponent({
  name: 'Translator',
  components: { 
    countryFlag
  }, 
  setup(props) { 
    const doGTranslate = (window as any).doGTranslate;

    const store = useStore(); // Accessing Vuex store
    const search = ref('');
    const loading = ref(false);
 
    const headers = ref([
      { name: 'Country', value: 'title' }
    ]);

    // Computed for filtered countries based on search
    const filteredCountries = computed<Country[]>(() => {
      return store.state.list_languages.filter((country: Country) =>
        country.title.toLowerCase().includes(search.value.toLowerCase())
      );
    });

  // Method for initiating translation
  const doTranslation = (data: string) => {
    doGTranslate(data);
    const [fromLang, toLang] = data.split('|');
    store.dispatch('changeLang', toLang); // Update language in Vuex
  };
  
    return { 
      search,
      loading,
      filteredCountries,
      headers,
      doTranslation
    };
  }
});
</script>


<style>
/* Hide the Google Translate spinner */
.goog-te-spinner-pos,
.goog-te-spinner-pos * {
  display: none !important;
}

.goog-te-gadget .goog-te-spinner-pos {
  visibility: hidden !important;
  display: none !important;
}

/* Other styles */
a:link {
  text-decoration: none;
  font-size: large;
  cursor: pointer;
}

.language-item {
  display: flex;
}

.language__text {
  color: black;
  margin-top: 7px;
  padding-left: 5px;
  text-decoration: none;
}

.language-item:hover {
  cursor: pointer;
  text-decoration: underline;
}

.flag {
  height: 40px;
}

h3 {
  cursor: pointer;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
