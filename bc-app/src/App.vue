<script setup>
import AppHeader from './components/AppHeader.vue'
import AppConfiguratorHeader from './components/AppConfiguratorHeader.vue'
import AppProductList from './components/AppProductList.vue'
import AppConfiguratorModule from './components/AppConfiguratorModule.vue'

const ModuleItemCategory = ["Adapter-Kits", "Cleats & Schuhplatten", "Fahrradkassetten", "Fahrradketten", "Fahrradkurbeln", "Innenlager", "Kettenblätter", "Kettenführungen & Bashguards", "Kleinteile", "Nabenschaltung", "Pedale", "Riemen", "Riemenscheiben", "Singlespeed", "Verschleißsets"]

const ModuleGroup = ["Antrieb", "Cockpit", "Dämpfer", "Fahrradbremsen", "Fahrradgabeln", "Fahrradrahmen", "Fahrradreifen", "Fahrradschläuche", "Laufräder", "Powermeter", "Sättel", "Sattelstützen", "Schaltung"]
const ModuleItemCount = 10
const ModuleSum = "150,00 €"
const ModuleId = ["Module1", "Module2", "Module3", "Module4", "Module5", "Module6"]

</script>

<template>
  <AppHeader />
  <main class="container-fluid">
    <div class="row mt-3">
      <div class="col">
        <AppConfiguratorHeader />
        <div class="row mt-3">
          <AppConfiguratorModule :ModuleId="ModuleId[0]" :ModuleGroup="ModuleGroup[0]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <AppConfiguratorModule :ModuleId="ModuleId[1]" :ModuleGroup="ModuleGroup[1]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <AppConfiguratorModule :ModuleId="ModuleId[2]" :ModuleGroup="ModuleGroup[3]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
        </div>
        <div class="row mt-3">
          <AppConfiguratorModule :ModuleId="ModuleId[3]" :ModuleGroup="ModuleGroup[5]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <AppConfiguratorModule :ModuleId="ModuleId[4]" :ModuleGroup="ModuleGroup[10]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
          <AppConfiguratorModule :ModuleId="ModuleId[5]" :ModuleGroup="ModuleGroup[8]" :ModuleItemCount="ModuleItemCount" :ModuleSum="ModuleSum" />
        </div>
      </div>
      <AppProductList />
    </div>
  </main>
</template>