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
                /* App Header */
                title: 'Bike Configurator',
                export: 'Export',
                load: 'Load',
                theme: 'Theme',
                language: 'Language',
                dark: 'Dark',
                light: 'Light',
                /* Template Header */
                components: 'Components',
                accessories: 'Accessories',
                add: 'Add Module',
                /* Template's Module */
                expand: 'Expand and Collapse',
                edit: 'Edit',
                items: 'Products added',
                partialsum: 'Partial summary',
                filter: 'Filter',
                /* Basket */
                productlist: 'Product list',
                shop: 'Shop',

            }
        },
        de:{
            message:{
                /* App Header */
                title: 'Fahrrad Konfigurator',
                export: 'Exportieren',
                load: 'Laden',
                theme: 'Motiv',
                language: 'Sprache',
                dark: 'Dunkel',
                light: 'Hell',
                /* Template Header */
                expand: 'Erweitern und Zusammenbrechen',
                edit: 'Bearbeiten',
                components: 'Komponenten',
                accessories: 'Zubehör',
                add: 'Baugruppe hinzufügen'
                /* Template's Module */,
                items: 'Artikel hinzugefügt',
                partialsum: 'Teilsumme',
                filter: 'Filtern',
                /* Basket */
                productlist: 'Produktliste',
                shop: 'Shop',
            }
        },
        gr:{
            message:{
                /* App Header */
                title: 'Διαμορφωτής ποδηλάτου',
                export: 'Εξαγωγή',
                load: 'Φόρτωση',
                theme: 'MΜοτίβο',
                language: 'Γλώσσα',
                dark: 'Σκοτεινό',
                light: 'Φωτεινό',
                /* Template Header */
                expand : 'Ελαχιστοποίηση και Μεγιστοποίηση',
                edit: 'Επεξεργασία',
                components: 'Συστατικά',
                accessories: 'Αξεσουάρ',
                add: 'Προσθήκη μονάδας',
                /* Template's Module */
                items: 'Προϊόντα που προστέθηκαν',
                partialsum: 'Μερικό σύνολο',
                filter: 'Φίλτρο',
                /* Basket */
                productlist: 'Λίστα προϊόντων',
                shop: 'Κατάστημα',
            }
        }
    }
})

const app = createApp(App)

app.use(i18n)
app.mount('#app');