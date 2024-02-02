<script setup>
import { ref } from 'vue'

import AppConfiguratorModuleHeader from './AppConfiguratorModuleHeader.vue'
import AppConfiguratorModuleFooter from './AppConfiguratorModuleFooter.vue'
import AppConfiguratorModuleSubHeader from './AppConfiguratorModuleSubHeader.vue'
import AppConfiguratorModuleItemCategory from './AppConfiguratorModuleItemCategory.vue'
import AppConfiguratorModuleItemProduct from './AppConfiguratorModuleItemProduct.vue'

const category = ["Adapter-Kits", "Cleats & Schuhplatten", "Fahrradkassetten", "Fahrradketten", "Fahrradkurbeln", "Innenlager", "Kettenblätter", "Kettenführungen & Bashguards", "Kleinteile", "Nabenschaltung", "Pedale", "Riemen", "Riemenscheiben", "Singlespeed", "Verschleißsets"]
const product = ["SHIMANO SLX KASSETTE CS-M7000-11 11-FACH", "SHIMANO ULTEGRA KURBELGARNITUR FC-R8000 HOLLOWTECH II"]
</script>

<template>
    <section class="card border-secondary mb-3">
        <AppConfiguratorModuleHeader />
        <AppConfiguratorModuleSubHeader />
        <div class="collapse show" id="CollapseList">
            <div class="card-body p-0 overflow-auto" style="height: 300px;">
                <ul class="list-group list-group-flush">
                    <AppConfiguratorModuleItemCategory :category="category[0]" />
                    <AppConfiguratorModuleItemCategory :category="category[1]" />
                    <AppConfiguratorModuleItemProduct :product="product[0]" :category="category[2]" />
                    <AppConfiguratorModuleItemCategory :category="category[3]" />
                    <AppConfiguratorModuleItemProduct :product="product[1]" :category="category[4]" />
                    <AppConfiguratorModuleItemCategory :category="category[5]" />
                    <AppConfiguratorModuleItemCategory :category="category[6]" />
                    <AppConfiguratorModuleItemCategory :category="category[7]" />
                    <AppConfiguratorModuleItemCategory :category="category[8]" />
                    <AppConfiguratorModuleItemCategory :category="category[9]" />
                    <AppConfiguratorModuleItemCategory :category="category[10]" />
                    <AppConfiguratorModuleItemCategory :category="category[11]" />
                    <AppConfiguratorModuleItemCategory :category="category[12]" />
                    <AppConfiguratorModuleItemCategory :category="category[13]" />
                    <AppConfiguratorModuleItemCategory :category="category[14]" />
                </ul>
            </div>
        </div>
        <AppConfiguratorModuleFooter />
    </section>
</template>