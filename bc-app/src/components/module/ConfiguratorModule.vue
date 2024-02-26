<script setup>
import { ref } from 'vue'

import ConfiguratorModuleHeader from './ConfiguratorModuleHeader.vue'
import ConfiguratorModuleFooter from './ConfiguratorModuleFooter.vue'
import ConfiguratorModuleSubHeader from './ConfiguratorModuleSubHeader.vue'
import ConfiguratorModuleItemCategory from './ConfiguratorModuleItemCategory.vue'
import ConfiguratorModuleItemProduct from './ConfiguratorModuleItemProduct.vue'

const category = ["Adapter-Kits", "Cleats & Schuhplatten", "Fahrradkassetten", "Fahrradketten", "Fahrradkurbeln", "Innenlager", "Kettenblätter", "Kettenführungen & Bashguards", "Kleinteile", "Nabenschaltung", "Pedale", "Riemen", "Riemenscheiben", "Singlespeed", "Verschleißsets"]
const product = ["SHIMANO SLX KASSETTE CS-M7000-11 11-FACH", "SHIMANO ULTEGRA KURBELGARNITUR FC-R8000 HOLLOWTECH II"]
const sum = "150,00 €"
const count = "2"

const props = defineProps({
    ModuleId: String,
    ModuleGroup: String,
    ModuleItemCount: Number,
    ModuleSum: String
})

</script>

<template>
    <div class="col-4">
        <section class="card border-secondary mb-3">
            <ConfiguratorModuleHeader :Id="'#' + ModuleId" :Group="ModuleGroup" />
            <ConfiguratorModuleSubHeader :ItemCount="ModuleItemCount" />
            <div class="collapse show" :id="ModuleId">
                <div class="card-body p-0 overflow-auto" style="height: 300px;">
                    <ul class="list-group list-group-flush">
                        <ConfiguratorModuleItemCategory :Category="category[0]" />
                        <ConfiguratorModuleItemCategory :Category="category[1]" />
                        <ConfiguratorModuleItemProduct :Product="product[0]" :Category="category[2]" />
                        <ConfiguratorModuleItemCategory :Category="category[3]" />
                        <ConfiguratorModuleItemProduct :Product="product[1]" :Category="category[4]" />
                        <ConfiguratorModuleItemCategory :Category="category[5]" />
                        <ConfiguratorModuleItemCategory :Category="category[6]" />
                        <ConfiguratorModuleItemCategory :Category="category[7]" />
                        <ConfiguratorModuleItemCategory :Category="category[8]" />
                        <ConfiguratorModuleItemCategory :Category="category[9]" />
                        <ConfiguratorModuleItemCategory :Category="category[10]" />
                        <ConfiguratorModuleItemCategory :Category="category[11]" />
                        <ConfiguratorModuleItemCategory :Category="category[12]" />
                        <ConfiguratorModuleItemCategory :Category="category[13]" />
                        <ConfiguratorModuleItemCategory :Category="category[14]" />
                    </ul>
                </div>
            </div>
            <ConfiguratorModuleFooter :Sum="ModuleSum" />
        </section>
    </div>
</template>