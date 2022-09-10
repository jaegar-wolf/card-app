import 'vuetify/styles'; // Global CSS has to be imported
import './assets/main.css';
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)

app.mount('#app')