// store.ts
import { createStore } from 'vuex';
import axios from "axios";

export interface State {
  user: object,
  token: string | null;
  lang: string | null;
  
  form: object;
  form_theme: object;
  editor_form: object;
  editor_dialog: boolean;
  editor_view: boolean;

  list_fonts: any;
}

const store = createStore<State>({
  state: {
    token: localStorage.getItem("authToken") || '',
    user: (() => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("celebrato_user") || '{}');
        return {
          id: storedUser.id ?? null,
          name: storedUser.name ?? null,
          email: storedUser.email ?? null,
          access_role: storedUser.access_role ?? null,
        };
      } catch (error) {
        return { id: null, name: null, email: null };
      }
    })(),

    lang: 'en',
    form: {
      id: 0, 
      name: null, 
      category: null, 
      file_names: {
        images: [],
      }, 
    },
    form_theme: {
      id: null,
      name: null,
      category: null,
      cover: {images: []},
      demo: []
    },
    editor_dialog: false,
    editor_form: [],
    editor_view: true,
    list_fonts: {
      raw: {
        family: ''
      }
    },
  },
  mutations: { 
    resetForm(state) {
      state.form = {
        id: 0,
        name: null,
        category: null,
        file_names: {
          images: [],
        },
      };
    }
  },
  actions: {
  },

  
  getters: {
    token: (state) => state.token,  
    lang: (state) => state.lang,  
    form: (state) => state.form, 
    form_theme: (state) => state.form_theme, 


    editor_dialog: (state) => state.editor_dialog, 
    editor_form: (state) => state.editor_form, 
    editor_view: (state) => state.editor_view, 
    
    list_fonts: (state) => state.list_fonts,
  },
});

export default store;

const token = localStorage.getItem("authToken");
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
