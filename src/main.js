import { createApp } from 'vue'
import App from './App.vue'

/*//Pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

//Vue-Router
import router from './router/router.js'*/

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

createApp(App).use(vuetify).mount('#app')
//.use(router).use(pinia)