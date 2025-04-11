<script setup>
import { ref } from 'vue'
import SwitchLanguage from './../components/SwitchLanguage.vue'

function theme(event) {
    alert('Hallo');
}
</script>

<template>
    <header>
        <nav class="navbar bg-dark-subtle" aria-label="Fahrrad Konfigurator">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h1 class="display-6"><i class="bi bi-bicycle me-3"></i>Fahrrad Konfigurator</h1>
                </a>
                <form class="d-flex">
                    <div class="navbar-brand">Language: </div>
                    <SwitchLanguage />
                    <ul class="navbar-nav flex-row flex-wrap">
                        <li class="nav-item vr h-100 mx-lg-2 text-white">
                            <hr class="d-lg-none my-2 text-white-50" />
                        </li>
                        <li class="nav-item">
                            <div class="btn-group me-2" role="group" aria-label="Basic example">
                                <button type="button" @click="theme"
                                    class="btn btn-outline-secondary active">Dark</button>
                                <button type="button" class="btn btn-outline-secondary">Light</button>
                            </div>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-secondary me-2"
                                aria-label="Exportieren">Exportieren</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-outline-secondary" aria-label="Laden">Laden</button>
                        </li>
                    </ul>
                </form>
            </div>
        </nav>
    </header>
</template>