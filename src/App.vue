<script setup>
import AppHeader from './components/AppHeader.vue'
import ConfiguratorHeader from './components/ConfiguratorHeader.vue'
import ConfiguratorProductList from './components/basket/ConfiguratorProductList.vue'
import ConfiguratorModule from './components/module/ConfiguratorModule.vue'
import bicycle from './components/bicycle.vue'

const ModuleItemCategory = ["Adapter-Kits", "Cleats & Schuhplatten", "Fahrradkassetten", "Fahrradketten", "Fahrradkurbeln", "Innenlager", "Kettenblätter", "Kettenführungen & Bashguards", "Kleinteile", "Nabenschaltung", "Pedale", "Riemen", "Riemenscheiben", "Singlespeed", "Verschleißsets"]

const ModuleItemCount = 10
const ModuleSum = "150,00 €"
const ModuleId = ["Module1", "Module2", "Module3", "Module4", "Module5", "Module6"]

</script>

<script>
import productData from './assets/products.json'

export default {
  data() {
    return {
      products: productData
    }
  }
}
</script>

<template>
  <AppHeader />
  <main class="container-fluid">
    <div class="row mt-3">
      <div class="col">
        <ConfiguratorHeader />
        <div class="row z-n1">
          <bicycle />
        </div>
        <div class="row mt-3 z-3">
          <ConfiguratorModule :ModuleId="ModuleId[0]" :ModuleGroup="productData[0].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <ConfiguratorModule :ModuleId="ModuleId[1]" :ModuleGroup="productData[1].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <ConfiguratorModule :ModuleId="ModuleId[2]" :ModuleGroup="productData[3].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
        </div>

        <div class="row mt-3">
          <ConfiguratorModule :ModuleId="ModuleId[3]" :ModuleGroup="productData[5].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <ConfiguratorModule :ModuleId="ModuleId[4]" :ModuleGroup="productData[10].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <ConfiguratorModule :ModuleId="ModuleId[5]" :ModuleGroup="productData[8].groupname"
            :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
        </div>
      </div>
      <ConfiguratorProductList />
    </div>
  </main>
</template>