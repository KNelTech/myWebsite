import { createApp } from 'vue'
import MainView from './views/mainView.vue'
import './assets/base.css'
import vuetify from './js/vuetify.js'
import 'vuetify/styles'

const appMain = createApp(MainView)
appMain.use(vuetify)
appMain.mount('#mainBody')
