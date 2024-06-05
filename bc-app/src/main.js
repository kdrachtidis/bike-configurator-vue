import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        en: {
            TemplateName: 'My Road Bike',
            TemplateButtonAddComp: 'Add Components Group'
        },
        de: {
            TemplateName: 'Mein Rennrad',
            TemplateButtonAddComp: 'Baugruppe hinzufügen'
        },
        gr: {
            TemplateName: 'Το αγωνιστικό μου',
            TemplateButtonAddComp: 'Πρόσθεσε ομάδα'
        }
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app');