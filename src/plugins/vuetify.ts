import 'vuetify/styles'; // Vuetify styles
import { createVuetify } from 'vuetify'; // Vuetify library
import '@mdi/font/css/materialdesignicons.css'; // Material Design Icons
import * as components from 'vuetify/components';

const vuetify = createVuetify({
  components,
  icons: {
    defaultSet: 'mdi', // Use Material Design Icons
  },
  theme: {
    defaultTheme: 'customTheme', // Set your custom theme as the default
    themes: {
      customTheme: {
        dark: false, // Light mode
        colors: {
          primary: '#fbeb04', // yellow
          secondary: '#fbeb04', 
          accent: '#82B1FF', 
          error: '#FF5252', 
          info: '#2196F3',  
          success: '#4CAF50',  
          warning: '#FFC107', 
        },
      },
      
    },
  },
});

export default vuetify;
