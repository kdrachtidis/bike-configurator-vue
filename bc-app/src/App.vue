<script setup>
import AppHeader from './components/AppHeader.vue'
import AppConfiguratorHeader from './components/AppConfiguratorHeader.vue'
import AppProductList from './components/AppProductList.vue'
import AppConfiguratorModule from './components/AppConfiguratorModule.vue'
</script>

<template>
  <AppHeader />
  <main class="container-fluid">
    <div class="row mt-3">
      <div class="col">
        <AppConfiguratorHeader />
        <div class="row mt-3">
          <AppConfiguratorModule />
          <AppConfiguratorModule />
          <AppConfiguratorModule />
        </div>
        <div class="row mt-3">
          <AppConfiguratorModule />
          <AppConfiguratorModule />
          <AppConfiguratorModule />
        </div>
      </div>
      <AppProductList />
    </div>
  </main>
</template>