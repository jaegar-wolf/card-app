import 'vuetify/styles'; // Global CSS has to be imported
import './assets/main.css';
import { createApp } from 'vue'
import { vuetify } from './plugins/vuetify';
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)

app.use(vuetify)

app.mount('#app')