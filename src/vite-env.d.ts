/// <reference types="vite/client" />
interface ImportMetaEnv {
  // DEFAULT
    readonly VITE_APP_DOMAIN: string;
    readonly VITE_APP_TITLE: string;
    readonly VITE_ADDRESS: string;
    readonly VITE_CONTACT: string;
    readonly VITE_EMAIL: string;



  // API
    readonly VITE_API_URL: string;
    readonly VITE_API_FONT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }