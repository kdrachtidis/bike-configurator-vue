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
import groupData from './assets/groups.json'

export default {
  data() {
    return {
      groups: groupData
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
        <div class="container">
          <div class="row mt-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4">
            <div v-for="group in groups">
              <ConfiguratorModule :ModuleId="group.id" :ModuleGroup="group.name" :ModuleItemCount="ModuleItemCount"
                :ModuleSum="ModuleSum" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-3">
        <ConfiguratorProductList />
      </div>
    </div>
  </main>
</template>