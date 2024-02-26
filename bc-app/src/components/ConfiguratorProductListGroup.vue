<script setup>
import ConfiguratorProductListItem from './ConfiguratorProductListItem.vue';

const category = ["Adapter-Kits", "Cleats & Schuhplatten", "Fahrradkassetten", "Fahrradketten", "Fahrradkurbeln", "Innenlager", "Kettenblätter", "Kettenführungen & Bashguards", "Kleinteile", "Nabenschaltung", "Pedale", "Riemen", "Riemenscheiben", "Singlespeed", "Verschleißsets"]
const product = ["SHIMANO SLX KASSETTE CS-M7000-11 11-FACH", "SHIMANO ULTEGRA KURBELGARNITUR FC-R8000 HOLLOWTECH II"]

</script>

<template>
    <div class="col">
        <h6>Shop <span class="badge text-bg-secondary">bike-components.de</span></h6>
        <ul class="list-group list-group-flush">
            <ConfiguratorProductListItem :Product=product[0] :Category=category[0] />
            <ConfiguratorProductListItem :Product=product[1] :Category=category[1] />
            <ConfiguratorProductListItem :Product=product[0] :Category=category[2] />
            <ConfiguratorProductListItem :Product=product[1] :Category=category[3] />
            <ConfiguratorProductListItem :Product=product[0] :Category=category[4] />
            <ConfiguratorProductListItem :Product=product[1] :Category=category[5] />
            <ConfiguratorProductListItem :Product=product[0] :Category=category[6] />
        </ul>
    </div>
</template>