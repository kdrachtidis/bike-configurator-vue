import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import i18nPlugin from '/plugins/i18nPlugin'

const app = createApp(App);

app.use(i18nPlugin, {
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
})

app.mount('#app');