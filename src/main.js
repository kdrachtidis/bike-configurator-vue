import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { languages } from './assets/i18n/index.js'
import { defaultLocale } from './assets/i18n/index.js'

import App from './App.vue'
import { Collapse } from 'bootstrap/dist/js/bootstrap'

const messages = Object(languages)

const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages:{
        en: {
            message:{
                title: 'Bike Configurator',
                collapse: 'Collapse',
                expand: 'Expand',
                export: 'Export',
                load: 'Load',
                theme: 'Theme',
                language: 'Language',
                dark: 'Dark',
                light: 'Light',
                components: 'Components',
                accessories: 'Accessories',
                add: 'Add Module',
                items: 'Products added',
                partialsum: 'Partial summary',
                filter: 'Filter',
                productlist: 'Product list',
                shop: 'Shop',

            }
        },
        de:{
            message:{
                title: 'Fahrrad Konfigurator',
                collapse: 'Zusammenbrechen',
                expand: 'Erweitern',
                export: 'Exportieren',
                load: 'Laden',
                theme: 'Motiv',
                language: 'Sprache',
                dark: 'Dunkel',
                light: 'Hell',
                components: 'Komponenten',
                accessories: 'Zubehör',
                add: 'Baugruppe hinzufügen',
                items: 'Artikel hinzugefügt',
                partialsum: 'Teilsumme',
                filter: 'Filtern',
                productlist: 'Produktliste',
                shop: 'Shop',
            }
        },
        gr:{
            message:{
                title: 'Διαμορφωτής ποδηλάτου',
                collapse: 'Ελαχιστοποίηση',
                expand : 'Μεγιστοποίηση',
                export: 'Εξαγωγή',
                load: 'Φόρτωση',
                theme: 'MΜοτίβο',
                language: 'Γλώσσα',
                dark: 'Σκοτεινό',
                light: 'Φωτεινό',
                components: 'Συστατικά',
                accessories: 'Αξεσουάρ',
                add: 'Προσθήκη μονάδας',
                items: 'Προϊόντα που προστέθηκαν',
                partialsum: 'Μερικό σύνολο',
                filter: 'Φίλτρο',
                productlist: 'Λίστα προϊόντων',
                shop: 'Κατάστημα',
            }
        }
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app');