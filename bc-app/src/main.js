import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { languages } from './assets/i18n/index.js'

import App from './App.vue'

const messages = Object.assign(languages)

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n)
app.mount('#app');